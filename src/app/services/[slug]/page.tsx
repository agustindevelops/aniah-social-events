import Service from "@/app/services/components/Service";
import { getServiceBySlug, getServices } from "@/lib/contentful/api";
import createMetadata from "@/utils/seo/metaData";
import { Metadata } from "next";

export type Package = {
  slug: string;
  pathname: string;
  title: string;
  subTitle: string;
  price: string;
  body: string;
  services: string[];
};

export const generateStaticParams = async () =>
  (await getServices()).map(({ slug }) => ({
    slug,
  }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title, subtitle, body, mainImage } = await getServiceBySlug(slug);

  return createMetadata({
    title: `${title} | Aniah Social Events – Austin & San Antonio Planners`,
    description: subtitle || body || "",
    image: `https:${mainImage.fields.file.url}`,
    url: `/services/${slug}`,
  });
}

export default Service;
