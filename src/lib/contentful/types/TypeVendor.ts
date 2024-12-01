import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeVendorFields {
    company: EntryFields.Symbol;
    areas: EntryFields.Symbol;
    pricing: "Affordable" | "Luxury" | "Standard";
    logo: Asset;
    mainImage: Asset;
    photos?: Asset[];
}

export type TypeVendor = Entry<TypeVendorFields>;
