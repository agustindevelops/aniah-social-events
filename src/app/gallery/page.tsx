import OptimizedImage from "@/components/OptimizedImage";
import { Card } from "@/components/ui/card";
import { getProjects } from "@/lib/contentful/api";
import { contentfulImageUrl } from "@/lib/contentful/image";
import { format } from "date-fns";
import Link from "next/link";

const Page = async () => {
  const projects = await getProjects();

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <h1 className="my-12 font-moonjelly text-7xl">Gallery</h1>
      <div className="container mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map(
          (
            {
              slug,
              title,
              date,
              thumbnail: {
                fields: {
                  file,
                  title: thumbnailTitle,
                  description: thumbnailDescription,
                },
              },
            },
            index
          ) => {
            const imageUrl = contentfulImageUrl(`https:${file?.url}`, {
              width: 640,
              height: 840,
              fit: "fill",
              focus: "faces",
            });

            return (
              <div
                key={title}
                className="mb-4 overflow-hidden rounded-lg w-full text-center"
              >
                <Link
                  href={`/gallery/${slug}`}
                  className="group relative flex justify-center w-full"
                  aria-label={`View ${title} project details`}
                >
                  <Card className="group relative h-[420px] w-full max-w-[320px] overflow-hidden">
                    <div className="relative h-full w-full">
                      <OptimizedImage
                        host="contentful"
                        src={imageUrl}
                        alt={thumbnailDescription}
                        title={thumbnailTitle}
                        fill
                        priority={index === 0}
                        sizes="320px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                        <h3 className="text-xl font-bold text-white">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {format(new Date(date), "MMMM d, yyyy")}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export const metadata = {
  title: "Event Gallery – Weddings & Parties by Aniah Social Events",
  description:
    "View our portfolio of beautifully designed weddings and events in Austin and San Antonio. Real moments, real celebrations.",
};

export default Page;
