import type { BookingRequest } from "@/lib/ase-admin/booking";
import {
  type BookingDraft,
  type BookingPhoto,
  usesClientFurniture,
} from "@/lib/booking/draft";

/** Facts only: the server rebuilds the price and schedule from these. */
export function toBookingRequest(
  packageId: string,
  draft: BookingDraft,
  photos: BookingPhoto[]
): BookingRequest {
  if (!draft.pickupOption) {
    throw new Error("A pickup option is required before booking.");
  }

  const clientFurniture = usesClientFurniture(draft);
  const { address, contact, table } = draft;
  const uploadType = clientFurniture ? "CLIENT_FURNITURE" : "SETUP_SPACE";

  return {
    packageId,
    guestCount: draft.guestCount,
    eventDate: draft.eventDate,
    eventStartTime: draft.startTime,
    eventEndTime: draft.endTime,
    pickupOption: draft.pickupOption,
    morningPickupTime:
      draft.pickupOption === "NEXT_MORNING" ? draft.morningTime : null,
    contact: {
      firstName: contact.firstName.trim(),
      lastName: contact.lastName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
    },
    address: {
      addressLine1: address.addressLine1.trim(),
      addressLine2: address.addressLine2.trim() || null,
      city: address.city.trim(),
      state: address.state.trim(),
      zipcode: address.zipcode.trim(),
      country: "US",
    },
    details: {
      isPrivateHome: draft.isPrivateHome === true,
      outletsAvailable: draft.outletsAvailable === true,
      accessType: draft.accessType,
      accessNotes:
        draft.accessType === "SPECIAL" ? draft.accessNotes.trim() || null : null,
      allowMarketingPhotos: draft.allowMarketingPhotos === true,
      specialNotes: draft.specialNotes.trim() || null,
    },
    clientTableDetails:
      clientFurniture && table.tableShape
        ? {
            tableShape: table.tableShape,
            tableDimensions: table.tableDimensions.trim(),
            numberOfTables: Number(table.numberOfTables),
            numberOfChairs: Number(table.numberOfChairs),
          }
        : null,
    uploads: photos.flatMap((photo) =>
      photo.status === "ready" && photo.fileUrl
        ? [{ uploadType, fileUrl: photo.fileUrl }]
        : []
    ),
  };
}
