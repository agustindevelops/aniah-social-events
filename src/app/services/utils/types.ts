import { TypeServiceFields } from "@/lib/contentful/types";

export type Package = {
  slug: string;
  title: string;
  subTitle: string;
  price: string;
  body: string;
  services: string[];
};

export interface ServiceGroup {
  category: string;
  services: TypeServiceFields[];
}
