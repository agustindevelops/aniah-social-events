import ImageCarousel from "@/components/pages/Homepage/Gallery/ImageCarousel";
import { getProjects } from "@/lib/contentful/api";
import _ from "lodash";
import Link from "next/link";

const Gallery = async () => {
  const projects = await getProjects();

  const images = _.shuffle(
    projects
      .map((project) =>
        project.images?.map((image) => ({
          id: image.sys.id,
          alt: image.fields.title,
          imageUrl: `https:${image.fields.file.url}`,
        }))
      )
      .flat()
  ) as { id: string; alt: string; imageUrl: string }[];

  return (
    <div className="bg-white py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-nickainley text-4xl sm:text-5xl md:text-6xl">
          Our Wedding & Event Planning Gallery
        </h2>

        <ImageCarousel images={images} />
      </div>
      <Link
        href="/gallery"
        className="font-bold bg-peach-200 hover:bg-peach-300 inline-flex items-center px-6 py-3 text-base text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
      >
        View Gallery
      </Link>
    </div>
  );
};

export default Gallery;
