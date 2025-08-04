import type { EntryFields } from "contentful";
import type { CustomEntry } from "../customTypes";
import type { TypeComponentSeo } from "./TypeComponentSeo";
import type { TypePageBlogPost } from "./TypePageBlogPost";

export interface TypePageLandingFields {
  internalName: EntryFields.Symbol;
  seoFields?: TypeComponentSeo;
  featuredBlogPost?: TypePageBlogPost;
}

export type TypePageLanding = CustomEntry<TypePageLandingFields>;
