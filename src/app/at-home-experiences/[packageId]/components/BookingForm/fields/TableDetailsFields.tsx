import type { TableShape } from "@/lib/ase-admin/booking";
import type { TableDraft } from "@/lib/booking/draft";

import { inputClass, labelClass, TextField } from "../controls";

const TABLE_SHAPES: { value: TableShape; label: string }[] = [
  { value: "RECTANGULAR", label: "Rectangular" },
  { value: "ROUND", label: "Round" },
  { value: "SQUARE", label: "Square" },
  { value: "OTHER", label: "Other" },
];

type Props = {
  value: TableDraft;
  onChange: (value: TableDraft) => void;
};

const TableDetailsFields = ({ value, onChange }: Props) => {
  const set = <K extends keyof TableDraft>(key: K, next: TableDraft[K]) =>
    onChange({ ...value, [key]: next });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="tableShape" className={labelClass}>
          Table shape
        </label>
        <select
          id="tableShape"
          className={inputClass}
          value={value.tableShape}
          onChange={(event) => set("tableShape", event.target.value as TableShape)}
        >
          <option value="">Select a shape</option>
          {TABLE_SHAPES.map((shape) => (
            <option key={shape.value} value={shape.value}>
              {shape.label}
            </option>
          ))}
        </select>
      </div>
      <TextField
        id="tableDimensions"
        label="Table dimensions"
        placeholder="e.g. 72 × 30 in, or 60 in round"
        value={value.tableDimensions}
        onChange={(next) => set("tableDimensions", next)}
      />
      <TextField
        id="numberOfTables"
        label="Number of tables"
        type="number"
        min={1}
        inputMode="numeric"
        value={value.numberOfTables}
        onChange={(next) => set("numberOfTables", next)}
      />
      <TextField
        id="numberOfChairs"
        label="Number of chairs"
        type="number"
        min={1}
        inputMode="numeric"
        value={value.numberOfChairs}
        onChange={(next) => set("numberOfChairs", next)}
      />
    </div>
  );
};

export default TableDetailsFields;
