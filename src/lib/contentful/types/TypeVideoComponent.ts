import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeVideoComponentFields {
    title?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    video?: Asset;
    tags?: EntryFields.Symbol[];
}

export type TypeVideoComponent = Entry<TypeVideoComponentFields>;
