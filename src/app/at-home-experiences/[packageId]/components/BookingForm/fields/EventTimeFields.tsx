import { timeToMinutes } from "@/lib/booking/dinnerExperience";
import { formatTimeOfDay } from "@/lib/booking/format";

import { inputClass, labelClass, TextField } from "../controls";

/** 8:00 AM through 11:30 PM in 30-minute steps. */
const TIME_OPTIONS = Array.from({ length: 32 }, (_, index) => {
  const minutes = 8 * 60 + index * 30;
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
    minutes % 60
  ).padStart(2, "0")}`;
});
const START_TIMES = TIME_OPTIONS.slice(0, -1);

type Props = {
  eventDate: string;
  startTime: string;
  endTime: string;
  minEventDate: string;
  onDateChange: (value: string) => void;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
};

const TimeSelect = ({
  id,
  label,
  value,
  options,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  disabled?: boolean;
  onChange: (value: string) => void;
}) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <select
      id={id}
      className={inputClass}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">Select</option>
      {options.map((time) => (
        <option key={time} value={time}>
          {formatTimeOfDay(time)}
        </option>
      ))}
    </select>
  </div>
);

const EventTimeFields = ({
  eventDate,
  startTime,
  endTime,
  minEventDate,
  onDateChange,
  onStartTimeChange,
  onEndTimeChange,
}: Props) => {
  const endTimes = startTime
    ? TIME_OPTIONS.filter((time) => timeToMinutes(time) > timeToMinutes(startTime))
    : TIME_OPTIONS;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <TextField
        id="eventDate"
        label="Event date"
        type="date"
        min={minEventDate}
        value={eventDate}
        onChange={onDateChange}
      />
      <TimeSelect
        id="startTime"
        label="Start time"
        value={startTime}
        options={START_TIMES}
        onChange={onStartTimeChange}
      />
      <TimeSelect
        id="endTime"
        label="End time"
        value={endTime}
        options={endTimes}
        disabled={!startTime}
        onChange={onEndTimeChange}
      />
    </div>
  );
};

export default EventTimeFields;
