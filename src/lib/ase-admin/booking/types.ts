import type { AccessType, PickupOption } from "@/lib/booking/atHomeExperience";

export type BookingUploadType = "SETUP_SPACE" | "CLIENT_FURNITURE";

export type TableShape = "RECTANGULAR" | "ROUND" | "SQUARE" | "OTHER";

/** Facts only. The server builds setup/pickup windows and the price. */
export type BookingRequest = {
  packageId: string;
  guestCount: number;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  pickupOption: PickupOption;
  morningPickupTime: string | null;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  address: {
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
  details: {
    isPrivateHome: boolean;
    outletsAvailable: boolean;
    accessType: AccessType;
    accessNotes: string | null;
    allowMarketingPhotos: boolean;
    specialNotes: string | null;
  };
  clientTableDetails: {
    tableShape: TableShape;
    tableDimensions: string;
    numberOfTables: number;
    numberOfChairs: number;
  } | null;
  uploads: { uploadType: BookingUploadType; fileUrl: string }[];
};

export type BookingResponse = {
  order: { id: string; status: string; quote: number };
  checkoutUrl: string;
};

/** Booked-page summary from GET orders/checkout/{sessionId}. */
export type BookingConfirmation = {
  reference: string;
  paid: boolean;
  packageName: string | null;
  firstName: string | null;
  /** YYYY-MM-DD at the event location. */
  eventDate: string | null;
  /** HH:mm wall-clock at the event location. */
  eventStartTime: string | null;
  eventEndTime: string | null;
  guestCount: number | null;
  totalCents: number | null;
  setupStartsAt: string | null;
  setupEndsAt: string | null;
  pickupStartsAt: string | null;
  pickupEndsAt: string | null;
  address: {
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    zipcode: string | null;
  } | null;
};
