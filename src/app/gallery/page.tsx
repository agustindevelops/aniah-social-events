import { Card } from "@/components/ui/card";
import { getProjects } from "@/lib/contentful/api";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const projects = await getProjects();

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <h1 className="my-12 font-moonjelly text-7xl">Gallery</h1>
      <div className="container mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map(
          ({
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
          }) => {
            const imageUrl = `https:${file?.url}`;

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
                      <Image
                        src={imageUrl}
                        alt={thumbnailDescription}
                        title={thumbnailTitle}
                        fill
                        sizes="(max-width: 768px) 560px, (max-width: 1200px) 560px, 560px"
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

export default Page;
