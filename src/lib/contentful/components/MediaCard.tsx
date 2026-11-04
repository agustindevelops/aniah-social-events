import OptimizedImage from "@/components/OptimizedImage";
import { contentfulImageUrl } from "@/lib/contentful/image";

const MediaCard = (props: MediaCardProps) => {
  const {
    file,
    title,
    description,
    file: { contentType },
  } = props.fields;

  const sourceUrl = `https:${file?.url}`;

  if (contentType?.includes("video")) {
    return (
      <div key={title} className="relative mb-8 h-[540px] w-full">
        <video
          src={sourceUrl}
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
      <OptimizedImage
        host="contentful"
        src={contentfulImageUrl(sourceUrl, { width: 1200 })}
        alt={description || title}
        title={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg object-cover"
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
