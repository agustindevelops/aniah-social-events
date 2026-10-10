import { aseAdminApi } from "@/lib/ase-admin/client";

export type EventDatesBooked = {
  /** First day a guest may book (YYYY-MM-DD); the same for every month. */
  earliestBookableDate: string;
  /** YYYY-MM-DD days in the requested month that already have an event. */
  bookedDates: string[];
};

/** `month` is YYYY-MM; omitted means the current month at the event location. */
export async function getEventDatesBooked(
  month?: string
): Promise<EventDatesBooked> {
  const { data } = await aseAdminApi.get<EventDatesBooked>(
    "event-dates-booked",
    { params: month ? { month } : undefined }
  );
  return data;
}
