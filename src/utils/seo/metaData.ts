import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
}

const createMetadata = ({
  title,
  description,
  image,
  url,
}: SEOProps): Metadata => {
  return {
    title,
    description,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
};

export default createMetadata;
