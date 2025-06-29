import Image from "next/image";
import { FC } from "react";

type PropTypes = { video?: string; image?: string; alt?: string };

const Media: FC<PropTypes> = ({ video, image, alt }) => {
  return (
    <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
      <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        {video ? (
          <video
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : image ? (
          <Image
            className="absolute inset-0 h-full w-full bg-gray-50 object-cover object-bottom"
            src={image}
            alt={alt || "featured image for blog post"}
            width={1000}
            height={1000}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Media;
