import { SERVICES } from "@/utils/data";
import Service from "@/app/services/components/Service";
import { getServices } from "@/lib/contentful/api";

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

export default Service;
