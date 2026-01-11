"use client";

import Button from "@/components/buttons/Button";
import type { TypePageLandingFields } from "@/lib/contentful/types";
import Image from "next/image";

const Hero = (props: TypePageLandingFields) => {
  console.log(props);
  return (
    <section>
      <div className="absolute top-16 w-full h-[32rem] sm:h-[34rem] md:h-[36rem] lg:h-[38rem] xl:h-[40rem]">
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover"
          style={{
            backgroundImage: "url('/images/hero-collage.png')",
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
              <h2 className="font-nickainley text-peach-200 max-w-lg text-3xl font-bold sm:max-w-xl sm:text-4xl md:max-w-3xl md:text-5xl lg:max-w-4xl lg:text-6xl">
                Event Planning for Weddings, Parties & More – Serving Austin,
                San Antonio, and Surrounding Areas
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[36rem] sm:h-[38rem] md:h-[40rem] lg:h-[42rem] xl:h-[44rem]" />
      <div className="my-4 flex gap-4 justify-center">
        <Button href="/services">Services</Button>
        <Button href="/schedule">Book Now</Button>
      </div>
    </section>
  );
};

export default Hero;
