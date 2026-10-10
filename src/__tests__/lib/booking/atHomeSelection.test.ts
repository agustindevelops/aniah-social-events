import {
  atHomePackageCents,
  atHomeScheduleHref,
  isCompleteSelection,
  packagePageHref,
  parseAtHomeSelection,
} from "@/lib/booking/atHomeSelection";

const EARLIEST = "2026-12-02";

describe("at-home selection", () => {
  it("reads a complete selection from the URL", () => {
    const selection = parseAtHomeSelection(
      { furniture: "CLIENT", guests: "8", date: "2026-12-05" },
      EARLIEST
    );
    expect(selection).toEqual({
      furniture: "CLIENT",
      guestCount: 8,
      eventDate: "2026-12-05",
    });
    expect(isCompleteSelection(selection)).toBe(true);
  });

  it("drops values that are malformed, out of range or too soon", () => {
    expect(
      parseAtHomeSelection(
        { furniture: "MAYBE", guests: "12", date: "2026-12-01" },
        EARLIEST
      )
    ).toEqual({ furniture: null, guestCount: null, eventDate: null });
    expect(
      parseAtHomeSelection({ date: "2026-02-30" }, EARLIEST).eventDate
    ).toBeNull();
    expect(isCompleteSelection(parseAtHomeSelection({}, EARLIEST))).toBe(false);
  });

  it("links between the package page and the schedule page", () => {
    const selection = {
      furniture: "OURS" as const,
      guestCount: 7,
      eventDate: "2026-12-05",
    };
    expect(atHomeScheduleHref("fantasy-forest", selection)).toBe(
      "/schedule/intimate-celebration?package=fantasy-forest&date=2026-12-05&furniture=OURS&guests=7"
    );
    expect(
      packagePageHref("fantasy-forest", { ...selection, eventDate: null })
    ).toBe("/intimate-celebrations/fantasy-forest?furniture=OURS&guests=7");
    expect(
      packagePageHref("fantasy-forest", {
        furniture: null,
        guestCount: null,
        eventDate: null,
      })
    ).toBe("/intimate-celebrations/fantasy-forest");
  });

  it("prices each style and guest count", () => {
    expect(atHomePackageCents("OURS", 6)).toBe(65_000);
    expect(atHomePackageCents("CLIENT", 6)).toBe(45_000);
    expect(atHomePackageCents("CLIENT", 10)).toBe(55_000);
  });
});
