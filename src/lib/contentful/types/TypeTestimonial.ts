import type { Asset, EntryFields } from "contentful";
import type { CustomEntry } from "../customTypes";

export interface TypeTestimonialFields {
    title: EntryFields.Symbol;
    clientNames?: EntryFields.Symbol;
    date?: EntryFields.Date;
    written?: EntryFields.Text;
    video?: Asset;
    rating?: EntryFields.Number;
    images?: Asset[];
}

export type TypeTestimonial = CustomEntry<TypeTestimonialFields>;
