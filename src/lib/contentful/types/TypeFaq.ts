import type { EntryFields } from "contentful";
import type { CustomEntries } from "../customTypes";

export interface TypeFaqFields {
  question: EntryFields.Symbol;
  answer: EntryFields.Text;
}

export type TypeFaq = CustomEntries<TypeFaqFields>;
