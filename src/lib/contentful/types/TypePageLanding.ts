import type { EntryFields } from "contentful";
import type { Asset, CustomEntry } from "../customTypes";
import type { TypeComponentSeo } from "./TypeComponentSeo";
import type { TypePageBlogPost } from "./TypePageBlogPost";

export interface TypePageLandingFields {
  internalName: EntryFields.Symbol;
  seoFields?: TypeComponentSeo;
  featuredBlogPost?: TypePageBlogPost;
  heroImage: Asset;
  title: EntryFields.Symbol;
  subtitle?: EntryFields.Symbol;
  whatWeDoTitle?: EntryFields.Symbol;
  whatWeDoParagraph?: EntryFields.Text;
  whatWeDoList?: EntryFields.Symbol[];
  whoWeAreForTitle?: EntryFields.Symbol;
  whoWeAreForParagraph?: EntryFields.Text;
  whoWeAreForList?: EntryFields.Symbol[];
  faqTitle?: EntryFields.Symbol;
  faqParagraph?: EntryFields.Text;
}

export type TypePageLanding = CustomEntry<TypePageLandingFields>;
