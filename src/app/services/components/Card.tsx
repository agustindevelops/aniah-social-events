import { TypeServiceFields } from "@/lib/contentful/types";
import NextImage from "next/image";
import NextLink from "next/link";

const ServicesCard = ({
  slug,
  title,
  subtitle,
  price,
  body,
  mainImage,
}: TypeServiceFields) => {
  return (
    <div
      className="service-card bg-cream overflow-hidden rounded-lg shadow-sm"
      data-slug={slug}
    >
      <div className="bg-peach-200 relative h-48 w-full overflow-hidden rounded-lg bg-opacity-20">
        <NextImage
          src={`https:${mainImage.fields.file.url}`}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="from-peach-500 absolute inset-0 bg-gradient-to-t to-transparent opacity-20"></div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-brown-500 text-xl">{title}</h3>
            <p className="text-brown-400 font-libre mt-1">{subtitle}</p>
          </div>
          <span className="bg-peach-100 text-peach-600 font-libre rounded-full bg-opacity-50 px-2.5 py-0.5 text-xs">
            ${price}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-brown-400 font-libre line-clamp-2">{body}</p>
        </div>
        <div className="mt-6">
          <NextLink
            href={`/services/${slug}`}
            className="view-service-btn bg-peach-500 hover:bg-peach-600 font-libre w-full rounded-md px-4 py-2 text-white transition duration-300"
          >
            View Details
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
