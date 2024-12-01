import {
  TypePageBlogPostFields,
  TypeService,
  TypeServiceFields,
} from "../types";
import client from "./client";
import DEFAULT from "./default";

export const getBlogs = async (): Promise<TypePageBlogPostFields[]> => {
  const rawBlogs = await client.getEntries({
    content_type: "pageBlogPost",
  });

  return rawBlogs.items.map(
    ({ fields }) => fields
  ) as unknown as TypePageBlogPostFields[];
};

export const getBlogsBySlug = async (
  slug: string
): Promise<TypePageBlogPostFields[]> => {
  const rawBlogs = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": slug,
  });

  return rawBlogs.items.map(
    ({ fields }) => fields
  ) as unknown as TypePageBlogPostFields[];
};

export const getServices = async (): Promise<TypeServiceFields[]> => {
  const rawServices = await client.getEntries({
    content_type: "service",
  });

  return rawServices.items.map(
    ({ fields }) => fields
  ) as unknown as TypeServiceFields[];
};

export const getServiceBySlug = async (
  slug: string
): Promise<TypeServiceFields> => {
  const rawServices = (await client.getEntries({
    content_type: "service",
    "fields.slug": slug,
  })) as unknown as TypeService;

  const service = rawServices.items[0]?.fields || DEFAULT.SERVICE;

  return service;
};
