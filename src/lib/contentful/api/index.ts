import {
  TypePageBlogPostFields,
  TypePageLandingFields,
  TypeProject,
  TypeProjectFields,
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

export const getProjects = async (): Promise<
  (TypeProjectFields & { id: string })[]
> => {
  const rawProjects = await client.getEntries({
    content_type: "project",
    order: ["-fields.date"],
  });

  return rawProjects.items.map(({ fields, sys: { id } }) => ({
    id,
    ...fields,
  })) as unknown as (TypeProjectFields & { id: string })[];
};

export const getProjectBySlug = async (
  slug: string
): Promise<TypeProjectFields> => {
  const rawProjects = (await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  })) as unknown as TypeProject;

  return rawProjects.items[0]?.fields || DEFAULT.PROJECT;
};

export const getLandingPage = async (): Promise<TypePageLandingFields> => {
  const rawLandingPage = await client.getEntries({
    content_type: "pageHome",
  });

  return (
    (rawLandingPage.items[0]?.fields as unknown as TypePageLandingFields) ||
    DEFAULT.LANDING_PAGE
  );
};
