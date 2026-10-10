import { Question, SectionTitle, TextAreaField, YesNo } from "../controls";
import ContactFields from "../fields/ContactFields";
import type { StepProps } from "../types";

const NotesContactStep = ({ draft, update }: StepProps) => (
  <>
    <SectionTitle title="Notes & contact" />
    <Question label="May we photograph the completed setup for marketing?">
      <YesNo
        value={draft.allowMarketingPhotos}
        onChange={(value) => update("allowMarketingPhotos", value)}
        yesDescription="We'll be respectful of your home and photograph only the event and styling elements."
      />
    </Question>
    <TextAreaField
      id="specialNotes"
      label="Special notes or questions"
      rows={4}
      value={draft.specialNotes}
      onChange={(value) => update("specialNotes", value)}
    />
    <ContactFields
      value={draft.contact}
      onChange={(value) => update("contact", value)}
    />
  </>
);

export default NotesContactStep;
