import Image from "next/image";

const getRandomFromId = (id: string, min: number, max: number) => {
  const hash = id.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
  return (Math.abs(hash) % (max - min)) + min;
};

const ImageCard = ({
  imageUrl,
  alt,
  id,
}: {
  imageUrl: string;
  alt: string;
  id: string;
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
