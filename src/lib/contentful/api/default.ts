import { TypeServiceFields } from "@/lib/contentful/types";

const SERVICE: TypeServiceFields = {
  slug: "",
  title: "",
  subtitle: "",
  price: 0,
  body: "",
  services: [],
  mainImage: { file: { url: "" } },
};

const DEFAULT = { SERVICE };

export default DEFAULT