import { FC, ReactNode } from 'react';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import UnderlineLink from '@/components/links/UnderlineLink';
import Providers from '@/components/providers';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Aniah Social Events</title>
      </head>
      <body>
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
