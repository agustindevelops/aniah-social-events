import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProjectFields {
  title: EntryFields.Symbol;
  date: EntryFields.Date;
  thumbnail: Asset;
  images?: Asset[];
  location?: EntryFields.Location;
}

export type TypeProject = Entry<any>;
