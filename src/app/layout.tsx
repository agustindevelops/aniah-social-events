import { FC, ReactNode } from 'react';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import UnderlineLink from '@/components/links/UnderlineLink';
import Providers from '@/components/providers';
import GoogleAnalytics from '@/components/third-party/GoogleAnalytics';
import Script from 'next/script';
import { Metadata } from 'next';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Aniah Social Events',
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <Script src='https://sdk.amazonaws.com/js/aws-sdk-2.1540.0.min.js' />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main className='bg-cream text-brown-500'>
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
