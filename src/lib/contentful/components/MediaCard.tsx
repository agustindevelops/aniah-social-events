import Image from "next/image";

const MediaCard = (props: MediaCardProps) => {
  const {
    file,
    title,
    description,
    file: { contentType },
  } = props.fields;

  const imageUrl = `https:${file?.url}`;

  if (contentType?.includes("video")) {

    return (
      <div key={title} className="relative mb-8 h-[540px] w-full">
        <video
          src={imageUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-center object-cover rounded-lg"
        />
      </div>
    );
  }

  return (
    <div key={title} className="relative mb-8 h-[540px] w-full">
      <Image
        src={imageUrl}
        alt={description || title}
        title={title}
        fill
        sizes="(max-width: 768px) 540px, (max-width: 1200px) 720px, 1080px"
        className="rounded-lg object-cover"
        loading="lazy"
        quality={85}
      />
    </div>
  );
};

export type MediaCardProps = {
  fields: {
    file: {
      url: string;
      fileName?: string;
      contentType?: string;
    };
    title: string;
    description?: string;
  };
};

export default MediaCard;
