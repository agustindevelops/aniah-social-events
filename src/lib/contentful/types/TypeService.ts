import type { EntryFields } from "contentful";
import type { Asset, CustomEntries } from "../customTypes";

export interface TypeServiceFields {
  slug: EntryFields.Symbol;
  title: EntryFields.Symbol;
  subtitle?: EntryFields.Symbol;
  price: EntryFields.Number;
  body?: EntryFields.Text;
  services?: EntryFields.Symbol[];
  mainImage: Asset;
}

export type TypeService = CustomEntries<TypeServiceFields>;
