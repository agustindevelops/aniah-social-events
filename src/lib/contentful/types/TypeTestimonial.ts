import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTestimonialFields {
    title: EntryFields.Symbol;
    clientNames?: EntryFields.Symbol;
    date?: EntryFields.Date;
    written?: EntryFields.Text;
    video?: Asset;
    rating?: EntryFields.Number;
    images?: Asset[];
}

export type TypeTestimonial = Entry<any>;
