import { getRandomFromId } from "@/utils/functions";
import Image from "next/image";

const ImageCard = ({
  imageUrl,
  alt,
  id,
}: {
  imageUrl: string;
  alt: string;
  id: string;
  mediaType: string;
}) => {
  const bounceDur = getRandomFromId(id, 2, 5);

  return (
    <div className="inline-block flex-shrink-0 mx-2 h-[300px] w-auto ">
      <div key={id} className="relative h-full w-auto">
        <Image
          src={imageUrl}
          alt={alt}
          height={300}
          width={500}
          className="h-full w-auto object-contain rounded-md shadow-lg bg-white"
          style={{
            animation: `bounce ${bounceDur}s ease-in-out infinite alternate`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageCard;
