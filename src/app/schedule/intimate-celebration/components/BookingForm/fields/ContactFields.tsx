import type { ContactDraft } from "@/lib/booking/draft";

import { Question, TextField } from "../controls";

type Props = {
  value: ContactDraft;
  onChange: (value: ContactDraft) => void;
};

const ContactFields = ({ value, onChange }: Props) => {
  const set = (key: keyof ContactDraft) => (next: string) =>
    onChange({ ...value, [key]: next });

  return (
    <Question label="Your contact information">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          id="firstName"
          label="First name"
          autoComplete="given-name"
          value={value.firstName}
          onChange={set("firstName")}
        />
        <TextField
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          value={value.lastName}
          onChange={set("lastName")}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={value.email}
          onChange={set("email")}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          value={value.phone}
          onChange={set("phone")}
        />
      </div>
    </Question>
  );
};

export default ContactFields;
