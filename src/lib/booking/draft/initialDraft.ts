import { AT_HOME_EXPERIENCE_PRICING } from "@/lib/booking/atHomeExperience";

import type { BookingDraft } from "./types";

export const INITIAL_BOOKING_DRAFT: BookingDraft = {
  furniture: "OURS",
  guestCount: AT_HOME_EXPERIENCE_PRICING.baseGuestCount,
  table: {
    tableShape: "",
    tableDimensions: "",
    numberOfTables: "",
    numberOfChairs: "",
  },
  eventDate: "",
  startTime: "",
  endTime: "",
  address: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "TX",
    zipcode: "",
  },
  isPrivateHome: null,
  pickupOption: null,
  morningTime: "",
  areaCleared: false,
  outletsAvailable: null,
  accessType: "STANDARD",
  accessNotes: "",
  allowMarketingPhotos: null,
  specialNotes: "",
  contact: { firstName: "", lastName: "", email: "", phone: "" },
  acks: {
    indoors: false,
    nonRefundable: false,
    reschedule: false,
    damage: false,
    times: false,
  },
};
