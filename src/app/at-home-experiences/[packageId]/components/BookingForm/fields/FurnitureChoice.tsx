import type { FurnitureChoice as Choice } from "@/lib/booking/draft";
import { DINNER_EXPERIENCE_PRICING } from "@/lib/booking/dinnerExperience";
import { formatMoney } from "@/lib/booking/format";

import { ChoiceCard, Question } from "../controls";

type Props = {
  value: Choice;
  onChange: (value: Choice) => void;
};

const FurnitureChoice = ({ value, onChange }: Props) => (
  <Question label="Who is providing the tables and chairs?">
    <div role="radiogroup" className="grid gap-3">
      <ChoiceCard
        selected={value === "OURS"}
        onSelect={() => onChange("OURS")}
        title="We'd like you to provide them"
        description="Tables, chairs, styling, décor, setup and pickup."
        badge={`from ${formatMoney(DINNER_EXPERIENCE_PRICING.ourFurnitureBaseCents)}`}
      />
      <ChoiceCard
        selected={value === "CLIENT"}
        onSelect={() => onChange("CLIENT")}
        title="We'll provide our own tables and chairs"
        description="We'll style your tables and chairs with our décor, setup and pickup."
        badge={`from ${formatMoney(
          DINNER_EXPERIENCE_PRICING.clientFurnitureBaseCents
        )}`}
      />
    </div>
  </Question>
);

export default FurnitureChoice;
