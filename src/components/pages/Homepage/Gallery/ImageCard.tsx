import OptimizedImage from "@/components/OptimizedImage";
import { contentfulImageUrl } from "@/lib/contentful/image";
import { getRandomFromId } from "@/utils/functions";

const ImageCard = ({
  imageUrl,
  alt,
  id,
  priority = false,
}: {
  imageUrl: string;
  alt: string;
  id: string;
  mediaType: string;
  priority?: boolean;
}) => {
  const bounceDur = getRandomFromId(id, 2, 5);

  return (
    <div className="inline-block flex-shrink-0 mx-2 h-[300px] w-auto ">
      <div key={id} className="relative h-full w-auto">
        <OptimizedImage
          host="contentful"
          src={contentfulImageUrl(imageUrl, { height: 600, quality: 70 })}
          alt={alt}
          height={300}
          width={500}
          priority={priority}
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
