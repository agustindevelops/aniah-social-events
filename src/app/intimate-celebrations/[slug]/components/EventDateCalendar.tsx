"use client";

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import clsxm from "@/lib/clsxm";
import { getEventDatesBooked } from "@/lib/ase-admin/eventDates";
import {
  BOOKING_LEAD_DAYS,
  todayAtEventLocation,
  zonedDateTime,
} from "@/lib/booking/atHomeExperience";
import { formatEventDay } from "@/lib/booking/format";

type Props = {
  value: string;
  onChange: (date: string) => void;
};

const MONTHS_AHEAD = 11;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const navClass =
  "flex h-9 w-9 items-center justify-center rounded-full text-brown-800 transition hover:bg-brown-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent";

/** "2026-12" shifted by whole months. */
function shiftMonth(month: string, delta: number): string {
  const [year, monthNumber] = month.split("-").map(Number);
  return new Date(Date.UTC(year, monthNumber - 1 + delta, 1))
    .toISOString()
    .slice(0, 7);
}

function monthLabel(month: string): string {
  const [year, monthNumber] = month.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    year: "numeric",
  }).format(new Date(Date.UTC(year, monthNumber - 1, 1)));
}

/** Leading blanks for the weekday offset, then every YYYY-MM-DD in the month. */
function monthCells(month: string): (string | null)[] {
  const [year, monthNumber] = month.split("-").map(Number);
  const offset = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  return [
    ...Array.from({ length: offset }, () => null),
    ...Array.from(
      { length: days },
      (_, index) => `${month}-${String(index + 1).padStart(2, "0")}`
    ),
  ];
}

/**
 * Fetches its own availability from ASE admin. Opens on the month of the
 * selected date, or else the first bookable month.
 */
const EventDateCalendar = ({ value, onChange }: Props) => {
  const [initialDate] = useState(value);
  const [earliestBookableDate, setEarliestBookableDate] = useState<
    string | null
  >(null);
  const [visibleMonth, setVisibleMonth] = useState<string | null>(null);
  const [bookedByMonth, setBookedByMonth] = useState<Record<string, string[]>>(
    {}
  );
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const booked = visibleMonth ? bookedByMonth[visibleMonth] : undefined;

  useEffect(() => {
    if (booked) return;
    let cancelled = false;
    setFailed(false);
    getEventDatesBooked(visibleMonth ?? undefined)
      .then((data) => {
        if (cancelled) return;
        const month = visibleMonth ?? todayAtEventLocation().slice(0, 7);
        setEarliestBookableDate(data.earliestBookableDate);
        setBookedByMonth((current) => ({
          ...current,
          [month]: data.bookedDates,
        }));
        if (!visibleMonth) {
          const first = data.earliestBookableDate.slice(0, 7);
          const initialMonth = initialDate.slice(0, 7);
          setVisibleMonth(
            initialDate >= data.earliestBookableDate &&
              initialMonth <= shiftMonth(first, MONTHS_AHEAD)
              ? initialMonth
              : first
          );
        }
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [visibleMonth, booked, attempt, initialDate]);

  // A date carried over from the URL may have been booked since it was picked.
  const valueBooked = value
    ? bookedByMonth[value.slice(0, 7)]?.includes(value) ?? false
    : false;
  useEffect(() => {
    if (valueBooked) onChange("");
  }, [valueBooked, onChange]);

  const firstMonth = earliestBookableDate?.slice(0, 7) ?? null;
  const lastMonth = firstMonth ? shiftMonth(firstMonth, MONTHS_AHEAD) : null;
  const bookedSet = new Set(booked ?? []);
  const loading = !booked && !failed;

  return (
    <section
      id="event-date"
      aria-labelledby="event-date-heading"
      className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-md sm:p-6"
    >
      <h2
        id="event-date-heading"
        className="font-moonjelly text-2xl text-[#CE6B69]"
      >
        Pick your event date
      </h2>
      <p className="mt-1 text-sm text-brown-600">
        Book at least {BOOKING_LEAD_DAYS} days ahead. Days that are already
        booked can&apos;t be selected.
      </p>

      {visibleMonth && firstMonth && lastMonth ? (
        <div className="mt-5" aria-busy={loading}>
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setVisibleMonth(shiftMonth(visibleMonth, -1))}
              disabled={visibleMonth <= firstMonth}
              className={navClass}
            >
              <FiChevronLeft size={20} />
            </button>
            <p
              aria-live="polite"
              className="font-libre text-lg font-semibold text-brown-800"
            >
              {monthLabel(visibleMonth)}
            </p>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setVisibleMonth(shiftMonth(visibleMonth, 1))}
              disabled={visibleMonth >= lastMonth}
              className={navClass}
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-medium uppercase tracking-wide text-brown-500">
            {WEEKDAYS.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div
            className={clsxm(
              "mt-1 grid grid-cols-7 gap-1",
              loading && "animate-pulse"
            )}
          >
            {monthCells(visibleMonth).map((date, index) => {
              if (!date) return <span key={`blank-${index}`} />;
              const isBooked = bookedSet.has(date);
              const tooSoon = date < (earliestBookableDate ?? date);
              const selected = date === value;
              const unavailable = loading || isBooked || tooSoon;
              const dayLabel = formatEventDay(zonedDateTime(date, "12:00"));
              return (
                <button
                  key={date}
                  type="button"
                  aria-pressed={selected}
                  aria-label={isBooked ? `${dayLabel}, booked` : dayLabel}
                  disabled={unavailable}
                  onClick={() => onChange(date)}
                  className={clsxm(
                    "mx-auto flex aspect-square w-full max-w-[2.75rem] items-center justify-center rounded-full text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500",
                    selected
                      ? "bg-green-500 font-semibold text-white"
                      : unavailable
                      ? "cursor-not-allowed text-brown-300"
                      : "font-medium text-brown-800 hover:bg-green-100",
                    isBooked && !selected && "line-through"
                  )}
                >
                  {Number(date.slice(8))}
                </button>
              );
            })}
          </div>
        </div>
      ) : !failed ? (
        <p className="mt-5 text-sm text-brown-600" aria-busy>
          Loading available dates…
        </p>
      ) : null}

      {failed ? (
        <p role="alert" className="mt-4 text-sm text-peach-700">
          We couldn&apos;t load available dates.{" "}
          <button
            type="button"
            onClick={() => setAttempt((count) => count + 1)}
            className="font-medium underline"
          >
            Try again
          </button>
        </p>
      ) : null}
    </section>
  );
};

export default EventDateCalendar;
