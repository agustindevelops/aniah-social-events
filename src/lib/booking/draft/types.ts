import type { TableShape } from "@/lib/ase-admin/booking";
import type { AccessType, PickupOption } from "@/lib/booking/atHomeExperience";

export type TableDraft = {
  tableShape: TableShape | "";
  tableDimensions: string;
  numberOfTables: string;
  numberOfChairs: string;
};

export type AddressDraft = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
};

export type ContactDraft = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Acknowledgments = {
  indoors: boolean;
  nonRefundable: boolean;
  reschedule: boolean;
  damage: boolean;
  times: boolean;
};

export type BookingPhoto = {
  id: string;
  previewUrl: string;
  status: "uploading" | "ready" | "error";
  fileUrl?: string;
  error?: string;
};

/** Everything the customer has entered, except photos (see usePhotoUploads). */
export type BookingDraft = {
  variantId: string;
  variantName: string;
  /** Package.basePriceCents. */
  packageBasePriceCents: number;
  /** PackageVariant.priceCents — added to the package base. */
  variantPriceCents: number;
  /** BookingForm.code values from the selected package variant. */
  forms: string[];
  guestCount: number;
  table: TableDraft;
  eventDate: string;
  startTime: string;
  endTime: string;
  address: AddressDraft;
  isPrivateHome: boolean | null;
  pickupOption: PickupOption | null;
  morningTime: string;
  areaCleared: boolean;
  outletsAvailable: boolean | null;
  accessType: AccessType;
  accessNotes: string;
  allowMarketingPhotos: boolean | null;
  specialNotes: string;
  contact: ContactDraft;
  acks: Acknowledgments;
};
