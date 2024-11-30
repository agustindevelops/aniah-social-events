import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeServiceFields {
    slug: EntryFields.Symbol;
    title: EntryFields.Symbol;
    subtitle?: EntryFields.Symbol;
    price: EntryFields.Number;
    body?: EntryFields.Text;
    services?: EntryFields.Symbol[];
    mainImage: Asset;
}

export type TypeService = Entry<TypeServiceFields>;
