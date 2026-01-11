import type { EntryFields } from "contentful";
import type { Asset, CustomEntries } from "../customTypes";

export interface TypeServiceFields {
  slug: EntryFields.Symbol;
  title: EntryFields.Symbol;
  subtitle?: EntryFields.Symbol;
  price: EntryFields.Number;
  body?: EntryFields.Text;
  services?: EntryFields.Symbol[];
  addons?: EntryFields.Symbol[];
  disclaimer?: EntryFields.Symbol[];
  mainImage: Asset;
  category: EntryFields.Symbol;
}

export type TypeService = CustomEntries<TypeServiceFields>;
