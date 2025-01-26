"use client";

import Link from "next/link";
import { isMobile, isTablet } from "react-device-detect";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <Link
        href="https://g.page/r/CTIL-GOein2cEAI/review"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex w-60 items-center justify-center rounded-lg bg-[#DB4437] px-4 py-2 text-white transition hover:bg-[#C13526]"
      >
        <FaGoogle className="mr-2 text-2xl" />
        Review on Google
      </Link>
      <Link
        href={
          isMobile || isTablet
            ? "https://www.facebook.com/anishsocialevents.co/?sk=reviews"
            : "https://www.facebook.com/aniahsocialevents.co/reviews"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-60 items-center justify-center rounded-lg bg-[#1877F2] px-4 py-2 text-white transition hover:bg-[#3399FF]"
      >
        <FaFacebookSquare className="mr-2 text-2xl" />
        Review on Facebook
      </Link>
    </>
  );
};

export default Links;
