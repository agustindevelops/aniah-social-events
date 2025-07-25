import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug } from "@/lib/contentful/api";
import MediaCard from "@/lib/contentful/components/MediaCard";
import createMetadata from "@/utils/seo/metaData";
import { format } from "date-fns";
import { HomeIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import SEO from "../../../components/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const { title, metaDescription, thumbnail } = project;
  const imageUrl = thumbnail ? `https:${thumbnail.fields.file.url}` : undefined;
  const pageUrl = `/gallery/${slug}`;

  return createMetadata({
    title,
    description: metaDescription,
    image: imageUrl,
    url: pageUrl,
  });
}

const GalleryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const { title, metaDescription, description, date, thumbnail, images } =
    project;

  const imageUrl = `https:${thumbnail?.fields?.file?.url}`;

  return (
    <div className="my-24 flex flex-col items-center justify-center">
      <SEO
        title={title}
        description={metaDescription}
        image={imageUrl}
        url={`/gallery/${slug}`}
      />
      <div className="container m-2">
        <Card className="mx-auto mb-4 overflow-hidden">
          <div className="relative h-[540px] w-full">
            <Image
              src={imageUrl}
              alt={thumbnail?.fields?.description || title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="mb-4 text-xs md:text-sm">
                  {format(new Date(date), "MMMM d, yyyy")}
                </p>
                <h1 className="font-bol font-nickainley text-3xl">{title}</h1>
              </div>
              <p className="col-span-2">{description}</p>
            </div>
          </CardContent>
        </Card>
        <Breadcrumb className="m-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HomeIcon className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallery">Gallery</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="m-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images?.map((media) => (
            <MediaCard key={media.fields.title} fields={media.fields} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
