import { Shrikhand, Pacifico } from 'next/font/google';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

const gentySans = localFont({
  src: './genty-sans-regular.otf',
  variable: '--font-gentySans',
});

const Fonts = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${gentySans.variable} ${shrikhand.variable} ${pacifico.variable} font-sans`}
    >
      {children}
    </div>
  );
};

export default Fonts;
