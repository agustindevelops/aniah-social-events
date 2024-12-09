import type { EntryFields } from "contentful";
import type { Asset, CustomEntries } from "../customTypes";
export interface TypeProjectFields {
  slug: EntryFields.Symbol;
  title: EntryFields.Symbol;
  metaDescription: EntryFields.Symbol;
  description: EntryFields.Symbol;
  date: EntryFields.Date;
  thumbnail: Asset;
  images?: Asset[];
  location?: EntryFields.Location;
}

export type TypeProject = CustomEntries<TypeProjectFields>;
