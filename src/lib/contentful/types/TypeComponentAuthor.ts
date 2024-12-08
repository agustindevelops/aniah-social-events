import type { EntryFields } from "contentful";
import type { CustomEntry, Asset } from "@/lib/contentful/customTypes";

export interface TypeComponentAuthorFields {
  internalName: EntryFields.Symbol;
  name: EntryFields.Symbol;
  avatar?: Asset;
}

export type TypeComponentAuthor = CustomEntry<TypeComponentAuthorFields>;
