import { TypeProjectFields, TypeServiceFields } from "@/lib/contentful/types";

const SERVICE: TypeServiceFields = {
  slug: "",
  title: "",
  subtitle: "",
  category: "",
  price: 0,
  body: "",
  services: [],
  mainImage: {
    fields: {
      file: { url: "", contentType: "" },
      title: "",
      description: "",
    },
    sys: { id: "" },
  },
};

const PROJECT: TypeProjectFields = {
  slug: "",
  title: "",
  date: "2024-01-01T00:00:00Z",
  metaDescription: "",
  description: "",
  thumbnail: {
    fields: { file: { url: "", contentType: "" }, title: "", description: "" },
    sys: { id: "" },
  },
};

const DEFAULT = { SERVICE, PROJECT };

export default DEFAULT;
