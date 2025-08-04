import type { Asset, EntryFields } from "contentful";
import type { CustomEntry } from "../customTypes";

export interface TypeVendorFields {
  company: EntryFields.Symbol;
  areas: EntryFields.Symbol;
  pricing: "Affordable" | "Luxury" | "Standard";
  logo: Asset;
  mainImage: Asset;
  photos?: Asset[];
}

export type TypeVendor = CustomEntry<TypeVendorFields>;
