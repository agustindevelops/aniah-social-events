import {
  Libre_Baskerville,
  Pacifico,
  Shrikhand,
  Style_Script,
} from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";

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
const nickainley = localFont({
  src: "./Nickainley-Normal.otf",
  display: "swap",
  variable: "--font-nickainley",
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
const moonjelly = localFont({
  src: "./moonjelly-light.woff.ttf",
  display: "swap",
  variable: "--font-moonjelly",
});

const Fonts = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${nickainley.variable} ${moonjelly.variable} ${gentySans.variable} ${shrikhand.variable} ${pacifico.variable} ${bright.variable} ${libre.variable} ${styleScript.variable} font-sans`}
    >
      {children}
    </div>
  );
};

export default Fonts;
