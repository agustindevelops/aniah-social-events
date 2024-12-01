import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeComponentRichImageFields {
    internalName: EntryFields.Symbol;
    image: Asset;
    caption?: EntryFields.Symbol;
    fullWidth?: EntryFields.Boolean;
}

export type TypeComponentRichImage = Entry<TypeComponentRichImageFields>;
