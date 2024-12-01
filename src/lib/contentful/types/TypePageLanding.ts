import type { Entry, EntryFields } from "contentful";

export interface TypePageLandingFields {
  internalName: EntryFields.Symbol;
  seoFields?: Entry<any>;
  featuredBlogPost?: Entry<any>;
}

export type TypePageLanding = Entry<any>;
