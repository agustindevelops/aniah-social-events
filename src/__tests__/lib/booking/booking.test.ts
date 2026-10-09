import {
  type BookingDraft,
  type BookingPhoto,
  getBookingQuote,
  getBookingSchedule,
  INITIAL_BOOKING_DRAFT,
  withEndTime,
  withStartTime,
} from "@/lib/booking/draft";
import { toBookingRequest } from "@/lib/booking/bookingRequest";
import {
  firstInvalidStep,
  validateBookingStep,
} from "@/lib/booking/validation";

const EARLIEST = "2026-10-10";
const readyPhoto: BookingPhoto = {
  id: "1",
  previewUrl: "blob:1",
  status: "ready",
  fileUrl: "https://admin.example/api/public/org/uploads/a.jpg",
};

const completeDraft: BookingDraft = {
  ...INITIAL_BOOKING_DRAFT,
  furniture: "CLIENT",
  guestCount: 8,
  table: {
    tableShape: "ROUND",
    tableDimensions: "60 in round",
    numberOfTables: "1",
    numberOfChairs: "8",
  },
  eventDate: "2026-10-24",
  startTime: "19:00",
  endTime: "22:30",
  address: {
    addressLine1: "123 Main St",
    addressLine2: "",
    city: "Houston",
    state: "TX",
    zipcode: "77002",
  },
  isPrivateHome: true,
  pickupOption: "NEXT_MORNING",
  morningTime: "09:00",
  areaCleared: true,
  outletsAvailable: false,
  accessType: "SPECIAL",
  accessNotes: "  Garage P2  ",
  allowMarketingPhotos: true,
  contact: {
    firstName: "Test",
    lastName: "Customer",
    email: "test@example.com",
    phone: "713-555-0100",
  },
  acks: {
    indoors: true,
    nonRefundable: true,
    reschedule: true,
    damage: true,
    times: true,
  },
};

describe("booking draft", () => {
  it("defaults pickup from the end time and clears it when start moves past end", () => {
    const early = withEndTime(INITIAL_BOOKING_DRAFT, "20:00");
    expect(early.pickupOption).toBe("SAME_DAY");
    expect(withEndTime(early, "21:00").pickupOption).toBe("NEXT_MORNING");

    const moved = withStartTime({ ...early, startTime: "18:00" }, "20:30");
    expect(moved.endTime).toBe("");
    expect(moved.pickupOption).toBeNull();
  });

  it("prices client furniture, extra guests, and special access", () => {
    expect(getBookingQuote(completeDraft).quotedTotalCents).toBe(45_000 + 5_000 + 5_000);
    expect(
      getBookingQuote({ ...completeDraft, pickupOption: "LATE_NIGHT" })
        .quotedTotalCents
    ).toBe(65_000);
  });

  it("builds the setup window and next-morning pickup in Chicago time", () => {
    const schedule = getBookingSchedule(completeDraft);
    expect(schedule.setupWindow?.setupStartsAt.toISOString()).toBe(
      "2026-10-24T22:00:00.000Z"
    );
    expect(schedule.pickupWindow?.pickupStartsAt.toISOString()).toBe(
      "2026-10-25T14:00:00.000Z"
    );
    expect(schedule.lateEvent).toBe(true);
    expect(schedule.pickupOptions).toEqual(["NEXT_MORNING", "LATE_NIGHT"]);
  });
});

describe("booking validation", () => {
  it("passes a complete booking", () => {
    expect(firstInvalidStep(completeDraft, [readyPhoto], EARLIEST)).toBeNull();
  });

  it("requires a finished photo upload and table details", () => {
    const errors = validateBookingStep(
      0,
      { ...completeDraft, table: { ...completeDraft.table, numberOfChairs: "" } },
      [{ ...readyPhoto, status: "uploading" }],
      EARLIEST
    );
    expect(errors).toEqual([
      "Add how many chairs you have.",
      "Wait for your photos to finish uploading.",
      "Add at least one photo.",
    ]);
  });

  it("requires a morning time for next-morning pickup", () => {
    expect(
      validateBookingStep(1, { ...completeDraft, morningTime: "" }, [], EARLIEST)
    ).toEqual(["Choose a next-morning pickup time."]);
  });

  it("sends the customer back to the first incomplete step", () => {
    const result = firstInvalidStep(
      { ...completeDraft, areaCleared: false },
      [readyPhoto],
      EARLIEST
    );
    expect(result?.step).toBe(2);
  });
});

describe("booking request", () => {
  it("sends trimmed facts and photo URLs typed by the furniture choice", () => {
    const request = toBookingRequest("pkg_1", completeDraft, [
      readyPhoto,
      { id: "2", previewUrl: "blob:2", status: "error" },
    ]);
    expect(request).toMatchObject({
      packageId: "pkg_1",
      pickupOption: "NEXT_MORNING",
      morningPickupTime: "09:00",
      address: { addressLine2: null, country: "US" },
      details: { accessNotes: "Garage P2", outletsAvailable: false },
      clientTableDetails: { tableShape: "ROUND", numberOfChairs: 8 },
      uploads: [{ uploadType: "CLIENT_FURNITURE", fileUrl: readyPhoto.fileUrl }],
    });
    expect(request).not.toHaveProperty("quote");
  });

  it("drops table details and access notes when they don't apply", () => {
    const request = toBookingRequest(
      "pkg_1",
      { ...completeDraft, furniture: "OURS", accessType: "STANDARD" },
      [readyPhoto]
    );
    expect(request.clientTableDetails).toBeNull();
    expect(request.details.accessNotes).toBeNull();
    expect(request.uploads[0].uploadType).toBe("SETUP_SPACE");
  });
});
