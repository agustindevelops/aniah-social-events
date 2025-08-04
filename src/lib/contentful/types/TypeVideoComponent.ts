import type { Asset, EntryFields } from "contentful";
import type { CustomEntry } from "../customTypes";

export interface TypeVideoComponentFields {
  title?: EntryFields.Symbol;
  description?: EntryFields.RichText;
  video?: Asset;
  tags?: EntryFields.Symbol[];
}

export type TypeVideoComponent = CustomEntry<TypeVideoComponentFields>;
