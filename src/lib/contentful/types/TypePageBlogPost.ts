import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeComponentAuthorFields } from "./TypeComponentAuthor";
import type { TypeComponentSeoFields } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
    internalName: EntryFields.Symbol;
    seoFields?: Entry<TypeComponentSeoFields>;
    slug: EntryFields.Symbol;
    author?: Entry<TypeComponentAuthorFields>;
    publishedDate: EntryFields.Date;
    title: EntryFields.Symbol;
    shortDescription?: EntryFields.Text;
    featuredImage: Asset;
    featuredVideo?: Asset;
    content: EntryFields.RichText;
    relatedBlogPosts?: Entry<TypePageBlogPostFields>[];
}

export type TypePageBlogPost = Entry<TypePageBlogPostFields>;
