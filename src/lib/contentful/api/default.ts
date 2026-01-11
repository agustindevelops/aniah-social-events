import {
  TypePageLandingFields,
  TypeProjectFields,
  TypeServiceFields,
} from "@/lib/contentful/types";

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

const LANDING_PAGE: TypePageLandingFields = {
  internalName: "",
  heroImage: {
    fields: {
      file: { url: "", contentType: "" },
      title: "",
      description: "",
    },
    sys: { id: "" },
  },
  title: "",
};

const DEFAULT = { SERVICE, PROJECT, LANDING_PAGE };

export default DEFAULT;
