import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeComponentAuthorFields {
    internalName: EntryFields.Symbol;
    name: EntryFields.Symbol;
    avatar?: Asset;
}

export type TypeComponentAuthor = Entry<TypeComponentAuthorFields>;
