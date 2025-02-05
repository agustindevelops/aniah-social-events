import { TypeProjectFields, TypeServiceFields } from "@/lib/contentful/types";

const SERVICE: TypeServiceFields = {
  slug: "",
  title: "",
  subtitle: "",
  price: 0,
  body: "",
  services: [],
  mainImage: {
    fields: {
      file: { url: "" },
      title: "",
      description: "",
    },
  },
};

const PROJECT: TypeProjectFields = {
  slug: "",
  title: "",
  date: "2024-01-01T00:00:00Z",
  metaDescription: "",
  description: "",
  thumbnail: {
    fields: { file: { url: "" }, title: "", description: "" },
  },
};

const DEFAULT = { SERVICE, PROJECT };

export default DEFAULT;
