import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Spacer } from '@/components/UI/spacer/spacer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex min-h-screen flex-col'>
          {/* <ThemeContextProvider>
          <ThemeProvider> */}
          <header>
            <Header />
          </header>
          <Spacer size={14} /> {/*Header size*/}
          <main className='flex-grow'>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
        {/* </ThemeProvider>
        </ThemeContextProvider> */}
      </body>
    </html>
  );
}
