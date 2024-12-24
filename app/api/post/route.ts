import { prisma } from '@/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;
  console.log('🚀 ~ GET ~ blogId:\n\n\n\n', blogId);

  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: 'example-post', // Case-insensitive comparison
      },
      include: {
        user: true,
        cat: true,
        comments: true,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
