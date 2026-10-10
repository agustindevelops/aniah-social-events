import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

import clsxm from "@/lib/clsxm";

export const inputClass =
  "mt-1 block w-full rounded-md border-brown-200 bg-white text-brown-800 shadow-sm placeholder:text-brown-400 focus:border-green-500 focus:ring-green-500";

export const labelClass = "block text-sm font-medium text-brown-800";

export const helperClass = "mt-1 text-sm text-brown-600";

export const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div>
    <h2 className="text-2xl font-semibold tracking-tight text-[#CE6B69]">
      {title}
    </h2>
    {description ? <p className={helperClass}>{description}</p> : null}
  </div>
);

export const Question = ({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: ReactNode;
  children: ReactNode;
}) => (
  <fieldset className="space-y-3">
    <legend className="text-base font-semibold text-brown-800">{label}</legend>
    {helper ? <p className="-mt-1 text-sm text-brown-600">{helper}</p> : null}
    {children}
  </fieldset>
);

export const ChoiceCard = ({
  selected,
  onSelect,
  title,
  description,
  badge,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  description?: string;
  badge?: string;
}) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onSelect}
    className={clsxm(
      "flex w-full items-start justify-between gap-4 rounded-xl border-2 bg-white px-4 py-3 text-left transition",
      selected
        ? "border-green-500 ring-1 ring-green-500"
        : "border-brown-100 hover:border-brown-300"
    )}
  >
    <span className="flex items-start gap-3">
      <span
        aria-hidden
        className={clsxm(
          "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
          selected ? "border-green-500" : "border-brown-300"
        )}
      >
        {selected ? <span className="h-2 w-2 rounded-full bg-green-500" /> : null}
      </span>
      <span>
        <span className="block font-medium text-brown-800">{title}</span>
        {description ? (
          <span className="mt-0.5 block text-sm text-brown-600">
            {description}
          </span>
        ) : null}
      </span>
    </span>
    {badge ? (
      <span className="shrink-0 rounded-full bg-brown-50 px-2.5 py-0.5 text-sm font-medium text-brown-700">
        {badge}
      </span>
    ) : null}
  </button>
);

export const YesNo = ({
  value,
  onChange,
  yesLabel = "Yes",
  noLabel = "No",
  yesDescription,
  noDescription,
}: {
  value: boolean | null;
  onChange: (value: boolean) => void;
  yesLabel?: string;
  noLabel?: string;
  yesDescription?: string;
  noDescription?: string;
}) => (
  <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">
    <ChoiceCard
      selected={value === true}
      onSelect={() => onChange(true)}
      title={yesLabel}
      description={yesDescription}
    />
    <ChoiceCard
      selected={value === false}
      onSelect={() => onChange(false)}
      title={noLabel}
      description={noDescription}
    />
  </div>
);

export const Acknowledgment = ({
  checked,
  onChange,
  children,
  helper,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  helper?: string;
}) => (
  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-brown-100 bg-white px-4 py-3">
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="mt-0.5 h-5 w-5 shrink-0 rounded border-brown-300 text-green-500 focus:ring-green-500"
    />
    <span>
      <span className="block font-medium text-brown-800">{children}</span>
      {helper ? (
        <span className="mt-0.5 block text-sm text-brown-600">{helper}</span>
      ) : null}
    </span>
  </label>
);

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "value" | "onChange" | "className"
> & {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const TextField = ({
  id,
  label,
  value,
  onChange,
  className,
  type = "text",
  ...inputProps
}: TextFieldProps) => (
  <div className={className}>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <input
      {...inputProps}
      id={id}
      type={type}
      className={inputClass}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);

type TextAreaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id" | "value" | "onChange" | "className"
> & {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextAreaField = ({
  id,
  label,
  value,
  onChange,
  ...textareaProps
}: TextAreaFieldProps) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <textarea
      {...textareaProps}
      id={id}
      className={inputClass}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);

/** Compact radio for short values such as guest counts and pickup times. */
export const PillOption = ({
  selected,
  onSelect,
  children,
  className,
}: {
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
  className?: string;
}) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onSelect}
    className={clsxm(
      "border-2 font-medium transition",
      selected
        ? "border-green-500 bg-green-500 text-white"
        : "border-brown-100 bg-white text-brown-800 hover:border-brown-300",
      className
    )}
  >
    {children}
  </button>
);

export const Notice = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border border-brown-200 bg-brown-50 px-4 py-3 text-sm text-brown-800">
    {children}
  </div>
);
