import { FC, ReactNode } from 'react';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import UnderlineLink from '@/components/links/UnderlineLink';
import Providers from '@/components/providers';
import GoogleAnalytics from '@/components/third-party/GoogleAnalytics';
import Script from 'next/script';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Aniah Social Events</title>
        <Script src='https://sdk.amazonaws.com/js/aws-sdk-2.1540.0.min.js' />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main className='bg-cream text-brown-500 min-h-screen'>
          <Providers>{children}</Providers>
        </main>
        <footer className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <div className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href=''>Ragustin</UnderlineLink>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
