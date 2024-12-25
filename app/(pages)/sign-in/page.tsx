'use client';
import React from 'react';
import { Col, Container, Row } from '@/components/UI/Grid';
import { Spacer } from '@/components/UI/spacer/spacer';
import Image from 'next/image';
import { Button } from '@/components/UI/Button/Button';
import { useSession, signIn } from 'next-auth/react';

function Signin() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <Container variant={'fluid'} className='dark:bg-black '>
      <Row>
        <Container spacing='none'>
          <Row>
            <Col lg={12} className='flex  justify-center items-center'>
              <div className='    shadow-lg text-center w-[700px] dark:text-white dark:bg-baseline-900 bg-baseline-100 p-4  rounded-lg  flex justify-center items-center flex-col gap-4'>
                <div>
                  <h4 className='text-xl font-bold'>Sign in</h4>
                  <p className=' text-baseline-200'>
                    Sign in to your account by using your social media account
                  </p>
                </div>

                <div className='flex flex-col gap-2 p-16'>
                  <Button
                    leftIcon={
                      <Image
                        src='/social-icons/company=google.svg'
                        alt='google'
                        width={20}
                        height={20}
                      />
                    }
                    variant={'tonal'}
                    onClick={() => signIn('google')}
                  >
                    Sign in with Google
                  </Button>
                  <Spacer size={6} />
                  <Button
                    leftIcon={
                      <Image
                        src='/social-icons/company=github.svg'
                        alt='github'
                        width={20}
                        height={20}
                      />
                    }
                    onClick={() => signIn('github')}
                    variant={'baseline'}
                  >
                    Sign in with Github
                  </Button>
                  <Spacer size={6} />
                  <Button
                    leftIcon={
                      <Image
                        src='/social-icons/company=facebook.svg'
                        alt='facebook'
                        width={20}
                        height={20}
                      />
                    }
                    onClick={() => signIn('facebook')}
                    className=' bg-primary-500 hover:bg-primary-400'
                    variant={'primary'}
                  >
                    Sign in with Facebook
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Signin;
