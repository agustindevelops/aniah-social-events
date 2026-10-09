import { aseAdminApi } from "@/lib/ase-admin/client";

import type { BookingRequest, BookingResponse } from "./types";

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
