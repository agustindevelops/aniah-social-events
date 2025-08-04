import { BLOSSOMS_AND_BREWS } from "@/utils/content/events";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:my-64 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image
        src={BLOSSOMS_AND_BREWS.BANNER.URL}
        alt={BLOSSOMS_AND_BREWS.BANNER.ALT}
        className="aspect-[2/1] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
};

export default Banner;
