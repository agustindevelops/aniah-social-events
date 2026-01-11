"use client";

import Button from "@/components/buttons/Button";
import type { TypePageLandingFields } from "@/lib/contentful/types";
import Image from "next/image";

const Hero = ({
  heroImage,
  title,
}: Pick<TypePageLandingFields, "heroImage" | "title">) => {
  return (
    <section>
      <div className="absolute top-16 w-full h-[32rem] sm:h-[34rem] md:h-[36rem] lg:h-[38rem] xl:h-[40rem]">
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover"
          style={{
            backgroundImage: `url('https:${heroImage.fields.file.url}')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto text-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src="/images/aniah-social-events-logo.png"
                alt="Placeholder image"
                width={300}
                height={300}
              />
              <h2 className="font-nickainley text-peach-200 max-w-lg text-4xl font-bold sm:max-w-xl sm:text-5xl md:max-w-3xl md:text-6xl lg:max-w-4xl lg:text-7xl">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[36rem] sm:h-[38rem] md:h-[40rem] lg:h-[42rem] xl:h-[44rem]" />
      <div className="my-16 flex gap-4 justify-center">
        <Button href="/services" className="text-2xl md:text-4xl">
          Services
        </Button>
        <Button href="/schedule" className="text-2xl md:text-4xl">
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
