import type { CustomEntry } from "@/lib/contentful/customTypes";
import type { Asset, EntryFields } from "contentful";

export interface TypeComponentSeoFields {
  internalName: EntryFields.Symbol;
  pageTitle: EntryFields.Symbol;
  pageDescription?: EntryFields.Text;
  canonicalUrl?: EntryFields.Symbol;
  nofollow: EntryFields.Boolean;
  noindex: EntryFields.Boolean;
  shareImages?: Asset[];
}

export type TypeComponentSeo = CustomEntry<TypeComponentSeoFields>;
