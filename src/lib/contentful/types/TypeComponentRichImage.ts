import type { Asset, EntryFields } from "contentful";

export interface TypeComponentRichImageFields {
  internalName: EntryFields.Symbol;
  image: Asset;
  caption?: EntryFields.Symbol;
  fullWidth?: EntryFields.Boolean;
}
