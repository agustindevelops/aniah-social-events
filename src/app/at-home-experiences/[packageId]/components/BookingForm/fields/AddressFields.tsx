import type { AddressDraft } from "@/lib/booking/draft";

import { TextField } from "../controls";

type Props = {
  value: AddressDraft;
  onChange: (value: AddressDraft) => void;
};

const AddressFields = ({ value, onChange }: Props) => {
  const set = (key: keyof AddressDraft) => (next: string) =>
    onChange({ ...value, [key]: next });

  return (
    <div className="grid gap-4 sm:grid-cols-6">
      <TextField
        id="addressLine1"
        label="Street address"
        autoComplete="address-line1"
        className="sm:col-span-4"
        value={value.addressLine1}
        onChange={set("addressLine1")}
      />
      <TextField
        id="addressLine2"
        label="Apt, suite, unit"
        autoComplete="address-line2"
        className="sm:col-span-2"
        value={value.addressLine2}
        onChange={set("addressLine2")}
      />
      <TextField
        id="city"
        label="City"
        autoComplete="address-level2"
        className="sm:col-span-3"
        value={value.city}
        onChange={set("city")}
      />
      <TextField
        id="state"
        label="State"
        autoComplete="address-level1"
        className="sm:col-span-1"
        value={value.state}
        onChange={set("state")}
      />
      <TextField
        id="zipcode"
        label="ZIP code"
        autoComplete="postal-code"
        inputMode="numeric"
        className="sm:col-span-2"
        value={value.zipcode}
        onChange={set("zipcode")}
      />
    </div>
  );
};

export default AddressFields;
