import type { EntryFields } from "contentful";
import type { Asset, CustomEntries, CustomEntry } from "../customTypes";
import type { TypeComponentAuthorFields } from "./TypeComponentAuthor";
import type { TypeComponentSeoFields } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
  internalName: EntryFields.Symbol;
  seoFields?: CustomEntries<TypeComponentSeoFields>;
  slug: EntryFields.Symbol;
  author?: CustomEntries<TypeComponentAuthorFields>;
  publishedDate: EntryFields.Date;
  title: EntryFields.Symbol;
  shortDescription?: EntryFields.Text;
  featuredImage: Asset;
  featuredVideo?: Asset;
  content: EntryFields.RichText;
  relatedBlogPosts?: CustomEntries<TypePageBlogPostFields>[];
}

export type TypePageBlogPost = CustomEntry<TypePageBlogPostFields>;
