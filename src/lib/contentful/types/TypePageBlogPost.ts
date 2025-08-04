import type { EntryFields } from "contentful";
import type { Asset, CustomEntries, CustomEntry } from "../customTypes";
import type { TypeComponentAuthor } from "./TypeComponentAuthor";
import type { TypeComponentSeoFields } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
  internalName: EntryFields.Symbol;
  seoFields?: CustomEntry<TypeComponentSeoFields>;
  slug: EntryFields.Symbol;
  author: TypeComponentAuthor;
  publishedDate: EntryFields.Date;
  title: EntryFields.Symbol;
  shortDescription?: EntryFields.Text;
  featuredImage: Asset;
  featuredVideo?: Asset;
  content: EntryFields.RichText;
  relatedBlogPosts?: CustomEntries<TypePageBlogPostFields>[];
}

export type TypePageBlogPost = CustomEntry<TypePageBlogPostFields>;
