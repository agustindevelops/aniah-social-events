import Image from "next/image";

import MainCTA from "@/components/buttons/MainCTA";
const Hero = () => {
  return (
    <>
      <div className="absolute h-screen w-full">
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-cover"
          style={{
            backgroundImage: "url('/images/aniah-social-events-flowers.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-pink-950 opacity-30"></div>
          <div className="container mx-auto text-center text-white">
            <div className="absolute inset-0 flex items-center justify-center sm:hidden">
              <Image
                src="/images/aniah-social-events-large-logo.png"
                alt="Placeholder image"
                width={300}
                height={300}
              />
            </div>
            <div className="absolute inset-0 hidden items-center justify-center sm:flex">
              <Image
                src="/images/aniah-social-events-large-logo.png"
                alt="Placeholder image"
                width={600}
                height={400}
              />
            </div>

            <div className="absolute bottom-32 left-0 right-0 flex justify-center">
              <MainCTA />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen" />
    </>
  );
};

export default Hero;
