import { TypeServiceFields } from "@/lib/contentful/types";
import NextImage from "next/image";
import NextLink from "next/link";

const ServicesCard = ({
  slug,
  title,
  subtitle,
  price,
  mainImage,
}: TypeServiceFields) => {
  return (
    <div
      className="bg-cream flex flex-col rounded-lg shadow-md text-start"
      data-slug={slug}
    >
      <div className=" w-full overflow-hidden rounded-t-lg bg-opacity-20 bg-peach-200 relative h-64">
        <NextImage
          src={`https:${mainImage.fields.file.url}`}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="from-peach-500 absolute inset-0 bg-gradient-to-t to-transparent opacity-20"></div>
      </div>
      <div className="flex flex-col justify-between p-4 h-1/2">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-brown-500 text-xl font-moonjelly">{title}</h3>
            </div>
            <span className="bg-peach-100 text-peach-600 font-libre rounded-full bg-opacity-50 px-2.5 py-0.5 text-xs">
              ${price}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-brown-400 font-libre mt-1">{subtitle}</p>
          </div>
        </div>
        <NextLink
          href={`/services/${slug}`}
          className="view-service-btn bg-peach-500 hover:bg-peach-600 font-libre w-full rounded-md px-4 py-2 text-white transition duration-300"
        >
          View Details
        </NextLink>
      </div>
    </div>
  );
};

export default ServicesCard;
