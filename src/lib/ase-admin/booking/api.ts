import { isAxiosError } from "axios";

import { aseAdminApi } from "@/lib/ase-admin/client";

import type {
  BookingConfirmation,
  BookingRequest,
  BookingResponse,
} from "./types";

export async function uploadBookingPhoto(file: Blob): Promise<string> {
  const form = new FormData();
  form.append("file", file, "photo");
  const { data } = await aseAdminApi.post<{ fileUrl: string }>("uploads", form);
  return data.fileUrl;
}

export async function createBooking(
  request: BookingRequest
): Promise<BookingResponse> {
  const { data } = await aseAdminApi.post<BookingResponse>("orders", request);
  return data;
}

/** Booking behind a Stripe Checkout Session id, or null when there is none. */
export async function getBookingConfirmation(
  sessionId: string
): Promise<BookingConfirmation | null> {
  try {
    const { data } = await aseAdminApi.get<{ booking: BookingConfirmation }>(
      `orders/checkout/${encodeURIComponent(sessionId)}`
    );
    return data.booking;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) return null;
    throw error;
  }
}
