import type { Entry, EntryFields } from "contentful";
import type { TypeComponentSeoFields } from "./TypeComponentSeo";
import type { TypePageBlogPostFields } from "./TypePageBlogPost";

export interface TypePageLandingFields {
    internalName: EntryFields.Symbol;
    seoFields?: Entry<TypeComponentSeoFields>;
    featuredBlogPost?: Entry<TypePageBlogPostFields>;
}

export type TypePageLanding = Entry<TypePageLandingFields>;
