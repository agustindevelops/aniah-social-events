import {
  Shrikhand,
  Pacifico,
  Playfair,
  Libre_Baskerville,
  Style_Script,
} from "next/font/google";
import { ReactNode } from "react";
import localFont from "next/font/local";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const gentySans = localFont({
  src: "./genty-sans-regular.otf",
  variable: "--font-gentySans",
});

const bright = localFont({
  src: "./bright.otf",
  display: "swap",
  variable: "--font-bright",
});
const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-libre",
});
const styleScript = Style_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-styleScript",
});

const Fonts = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${gentySans.variable} ${shrikhand.variable} ${pacifico.variable} ${bright.variable} ${playfair.variable} ${libre.variable} ${styleScript.variable} font-sans`}
    >
      {children}
    </div>
  );
};

export default Fonts;
