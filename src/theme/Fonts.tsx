import { Shrikhand } from 'next/font/google';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
});

const gentySans = localFont({
  src: './genty-sans-regular.otf',
  variable: '--font-gentySans',
});
const Fonts = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${gentySans.variable} ${shrikhand.variable} font-sans`}>
      {children}
    </div>
  );
};

export default Fonts;
