import {
  type AccessType,
  AT_HOME_EXPERIENCE_PRICING,
} from "@/lib/booking/atHomeExperience";
import { formatMoney } from "@/lib/booking/format";

import { ChoiceCard, Question, TextAreaField } from "../controls";

type Props = {
  accessType: AccessType;
  accessNotes: string;
  onAccessTypeChange: (value: AccessType) => void;
  onAccessNotesChange: (value: string) => void;
};

const AccessOptions = ({
  accessType,
  accessNotes,
  onAccessTypeChange,
  onAccessNotesChange,
}: Props) => (
  <Question label="How easy is it for our team to access the setup space?">
    <div role="radiogroup" className="grid gap-3">
      <ChoiceCard
        selected={accessType === "STANDARD"}
        onSelect={() => onAccessTypeChange("STANDARD")}
        title="Standard access"
        description="Ground-level or straightforward entry with nearby parking/loading."
        badge="Included"
      />
      <ChoiceCard
        selected={accessType === "SPECIAL"}
        onSelect={() => onAccessTypeChange("SPECIAL")}
        title="Special building access"
        description="Parking garage, elevator, multi-level building, restricted loading, or a longer carry from the vehicle."
        badge={`+${formatMoney(AT_HOME_EXPERIENCE_PRICING.specialAccessCents)}`}
      />
    </div>
    {accessType === "SPECIAL" ? (
      <TextAreaField
        id="accessNotes"
        label="Anything we should know about accessing the space?"
        rows={3}
        placeholder="Garage level, elevator instructions, loading entrance, etc."
        value={accessNotes}
        onChange={onAccessNotesChange}
      />
    ) : null}
  </Question>
);

export default AccessOptions;
