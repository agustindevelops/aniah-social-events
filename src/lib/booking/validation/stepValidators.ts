import {
  type BookingDraft,
  type BookingPhoto,
  usesClientFurniture,
} from "@/lib/booking/draft";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_PATTERN = /^\d{5}(-\d{4})?$/;

export function experienceErrors(draft: BookingDraft, photos: BookingPhoto[]) {
  const errors: string[] = [];
  if (usesClientFurniture(draft)) {
    const { table } = draft;
    if (!table.tableShape) errors.push("Choose your table shape.");
    if (!table.tableDimensions.trim()) errors.push("Add your table dimensions.");
    if (!(Number(table.numberOfTables) >= 1))
      errors.push("Add how many tables you have.");
    if (!(Number(table.numberOfChairs) >= 1))
      errors.push("Add how many chairs you have.");
  }
  if (photos.some((photo) => photo.status === "uploading"))
    errors.push("Wait for your photos to finish uploading.");
  if (photos.some((photo) => photo.status === "error"))
    errors.push("Remove photos that failed to upload.");
  if (!photos.some((photo) => photo.status === "ready"))
    errors.push("Add at least one photo.");
  return errors;
}

export function eventErrors(draft: BookingDraft, earliestDate: string) {
  const errors: string[] = [];
  const { address } = draft;
  if (!draft.eventDate || draft.eventDate < earliestDate)
    errors.push("Choose an event date from tomorrow onward.");
  if (!draft.startTime) errors.push("Choose an event start time.");
  if (!draft.endTime) errors.push("Choose an event end time.");
  if (!address.addressLine1.trim()) errors.push("Add the street address.");
  if (!address.city.trim()) errors.push("Add the city.");
  if (!address.state.trim()) errors.push("Add the state.");
  if (!ZIP_PATTERN.test(address.zipcode.trim()))
    errors.push("Add a valid ZIP code.");
  if (draft.isPrivateHome === null)
    errors.push("Let us know if this is a private home.");
  if (draft.endTime && !draft.pickupOption)
    errors.push("Choose a pickup option.");
  if (draft.pickupOption === "NEXT_MORNING" && !draft.morningTime)
    errors.push("Choose a next-morning pickup time.");
  return errors;
}

export function accessErrors(draft: BookingDraft) {
  const errors: string[] = [];
  if (!draft.areaCleared)
    errors.push("Confirm the setup area will be cleared before installation.");
  if (draft.outletsAvailable === null)
    errors.push("Let us know if outlets are available near the setup area.");
  return errors;
}

export function contactErrors(draft: BookingDraft) {
  const errors: string[] = [];
  const { contact } = draft;
  if (draft.allowMarketingPhotos === null)
    errors.push("Let us know if we may photograph the setup.");
  if (!contact.firstName.trim()) errors.push("Add your first name.");
  if (!contact.lastName.trim()) errors.push("Add your last name.");
  if (!EMAIL_PATTERN.test(contact.email.trim()))
    errors.push("Add a valid email address.");
  if (contact.phone.replace(/\D/g, "").length < 10)
    errors.push("Add a valid phone number.");
  return errors;
}

export function confirmErrors(draft: BookingDraft) {
  const errors: string[] = [];
  const { acks } = draft;
  if (!acks.indoors) errors.push("Confirm the event will take place indoors.");
  if (!acks.nonRefundable)
    errors.push("Confirm you understand payments are non-refundable.");
  if (!acks.reschedule) errors.push("Confirm the rescheduling policy.");
  if (!acks.damage) errors.push("Confirm the rental property policy.");
  if (!acks.times)
    errors.push("Confirm the setup and pickup times work for your location.");
  return errors;
}
