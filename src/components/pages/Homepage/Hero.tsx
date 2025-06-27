import Image from "next/image";

import MainCTA from "@/components/buttons/MainCTA";
const Hero = () => {
  return (
    <section>
      <div className="absolute top-16 h-[calc(100vh-8rem)] w-full md:h-[calc(100vh-16rem)]">
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover"
          style={{
            backgroundImage: "url('/images/hero-collage.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto text-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
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
      <div className="absolute bottom-2 left-0 right-0 flex justify-center md:bottom-16">
        <MainCTA />
      </div>
      <div className="h-screen" />
    </section>
  );
};

export default Hero;
