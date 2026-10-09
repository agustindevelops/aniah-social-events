"use client";

import Offerings from "@/components/pages/Homepage/Offerings";
import type { TypePageLandingFields } from "@/lib/contentful/types";
import Image from "next/image";

const Hero = ({
  heroImage,
  title,
}: Pick<TypePageLandingFields, "heroImage" | "title">) => {
  return (
    <section className="relative mt-16">
      <div
        className="relative flex h-[40rem] w-full flex-col items-center justify-center bg-cover bg-center sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem]"
        style={{
          backgroundImage: `url('https:${heroImage.fields.file.url}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center px-4 pb-40 text-center sm:pb-36">
          <Image
            src="/images/aniah-social-events-logo.png"
            alt="Aniah Social Events"
            width={300}
            height={300}
          />
          <h2 className="font-nickainley text-peach-200 max-w-lg text-4xl font-bold sm:max-w-xl sm:text-5xl md:max-w-3xl md:text-6xl lg:max-w-4xl lg:text-7xl">
            {title}
          </h2>
        </div>
        <div className="absolute inset-x-0 bottom-6 z-10 px-4 sm:bottom-8">
          <Offerings />
        </div>
      </div>
    </section>
  );
};

export default Hero;
