import Header from "@/components/layout/Header";
import UnderlineLink from "@/components/links/UnderlineLink";
import Providers from "@/components/providers";
import GoogleAnalytics from "@/components/third-party/GoogleAnalytics";
import "@/styles/globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Aniah Social Events",
  generator: "Next.js",
  applicationName: "Aniah Social Events",
  keywords: [
    "Event Planning",
    "Wedding Planning",
    "Wedding Planner",
    "Party Planning",
    "Event Coordination",
    "Wedding Coordination",
    "Austin Event Planner",
    "San Antonio Event Planner",
    "Texas Wedding Planner",
    "Custom Event Design",
    "Bachelorette Party Planning",
    "Event Decor Services",
    "Full-Service Event Planning",
    "Day-of Coordination",
    "Event Design",
    "Bridal Services",
    "Personalized Event Planning",
  ],
  authors: [
    { name: "Aniah Social Events", url: "https://www.aniahsocialevents.com" },
  ],
  description:
    "Aniah Social Events offers exceptional event planning, wedding coordination, and personalized services in San Antonio, Texas & Austin, Texas.",
  themeColor: "#f5e0c3",
  robots: "index,follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    url: "https://www.aniahsocialevents.com",
    title: "Aniah Social Events",
    description:
      "Exceptional event planning and coordination services in San Antonio, Texas & Austin, Texas.",
    images: [
      {
        url: "https://www.aniahsocialevents.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aniah Social Events",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.aniahsocialevents.com",
    types: {
      "application/rss+xml": "https://www.aniahsocialevents.com/rss.xml",
    },
  },
  category: "Event Planning",
  classification: "Professional Services",
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Script src="https://sdk.amazonaws.com/js/aws-sdk-2.1540.0.min.js" />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main className="bg-cream text-brown-500">
          <Providers>{children}</Providers>
        </main>
        <footer className="layout relative flex flex-col items-center justify-center py-12 text-center">
          <div className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{" "}
            <UnderlineLink href="">Ragustin</UnderlineLink>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
