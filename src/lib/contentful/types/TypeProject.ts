import type { EntryFields } from "contentful";
import type { Asset, CustomEntry } from "../customTypes";
export interface TypeProjectFields {
  title: EntryFields.Symbol;
  date: EntryFields.Date;
  thumbnail: Asset;
  images?: Asset[];
  location?: EntryFields.Location;
}

export type TypeProject = CustomEntry<TypeProjectFields>;
