import Image from "next/image";

const GetToKnowMe = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 p-4 text-center md:grid-cols-2">
        <Image
          src="/images/get-to-know-me-photo-squiggle.png"
          alt="Aniah's Photo"
          width={414}
          height={414}
          className="mx-auto rounded-full shadow-lg"
        />
        <div className="space-y-6">
          <Image
            src="/images/get-to-know-me-title.png"
            alt="Get To Know Me"
            width={452}
            height={104}
            className="mx-auto"
          />
          <p className="text-lg leading-relaxed md:text-xl">
            Welcome to Aniah's Social Events Co., where creativity blossoms into
            unforgettable moments. I'm Aniah, the founder, and my passion for
            creating beautiful experiences drives everything we do. With a
            background as a bridal seamstress, coordinator, and decorator, I've
            cultivated a rich tapestry of skills in the wedding industry.
          </p>
        </div>

        <p className="text-lg leading-relaxed md:col-span-2 md:text-xl">
          My mission is to infuse every event with creativity and uniqueness. I
          believe in the magic that lies in the details and the transformative
          power of thoughtful design. At Aniah's Social Events Co., we bring a
          distinctive artistic vision to each project, ensuring every element
          contributes to a cohesive and stunning result.
        </p>
        <p className="text-lg leading-relaxed md:col-span-2 md:text-xl">
          When you choose us, you're entrusting your dreams to a team dedicated
          to turning them into extraordinary realities. We don't just plan
          events; we craft experiences that resonate with your personality and
          leave an indelible mark on all who attend. Let's embark on this
          creative journey together and make your special day truly magical.
        </p>
      </div>
    </div>
  );
};

export default GetToKnowMe;
