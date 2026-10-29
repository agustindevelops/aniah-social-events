import {
  atHomePackageCents,
  atHomeScheduleHref,
  isCompleteSelection,
  packagePageHref,
  parseAtHomeSelection,
} from "@/lib/booking/atHomeSelection";
import type { PublicPackageVariant } from "@/lib/ase-admin/packages";

const EARLIEST = "2026-12-02";
const PACKAGE_BASE = 45_000;

const variants: PublicPackageVariant[] = [
  {
    id: "var_ours",
    name: "Intimate Celebration",
    preview: "We bring the tables.",
    description: null,
    priceCents: 20_000,
    forms: [],
  },
  {
    id: "var_client",
    name: "Intimate Styling",
    preview: "We style your tables.",
    description: null,
    priceCents: 0,
    forms: ["YOUR_TABLES"],
  },
];

describe("at-home selection", () => {
  it("reads a complete selection from the URL", () => {
    const selection = parseAtHomeSelection(
      { variant: "var_client", guests: "8", date: "2026-12-05" },
      variants,
      EARLIEST
    );
    expect(selection).toEqual({
      variantId: "var_client",
      guestCount: 8,
      eventDate: "2026-12-05",
    });
    expect(isCompleteSelection(selection)).toBe(true);
  });

  it("maps legacy furniture params onto variants", () => {
    expect(
      parseAtHomeSelection(
        { furniture: "CLIENT", guests: "8", date: "2026-12-05" },
        variants,
        EARLIEST
      ).variantId
    ).toBe("var_client");
    expect(
      parseAtHomeSelection(
        { furniture: "OURS", guests: "8", date: "2026-12-05" },
        variants,
        EARLIEST
      ).variantId
    ).toBe("var_ours");
  });

  it("drops values that are malformed, out of range or too soon", () => {
    expect(
      parseAtHomeSelection(
        { variant: "missing", guests: "12", date: "2026-12-01" },
        variants,
        EARLIEST
      )
    ).toEqual({ variantId: null, guestCount: null, eventDate: null });
    expect(
      parseAtHomeSelection({ date: "2026-02-30" }, variants, EARLIEST).eventDate
    ).toBeNull();
    expect(
      isCompleteSelection(parseAtHomeSelection({}, variants, EARLIEST))
    ).toBe(false);
  });

  it("links between the package page and the schedule page", () => {
    const selection = {
      variantId: "var_ours",
      guestCount: 7,
      eventDate: "2026-12-05",
    };
    expect(atHomeScheduleHref("fantasy-forest", selection)).toBe(
      "/schedule/intimate-celebration?package=fantasy-forest&date=2026-12-05&variant=var_ours&guests=7"
    );
    expect(
      packagePageHref("fantasy-forest", { ...selection, eventDate: null })
    ).toBe("/intimate-celebrations/fantasy-forest?variant=var_ours&guests=7");
    expect(
      packagePageHref("fantasy-forest", {
        variantId: null,
        guestCount: null,
        eventDate: null,
      })
    ).toBe("/intimate-celebrations/fantasy-forest");
  });

  it("adds the style modifier to the package base", () => {
    expect(atHomePackageCents(PACKAGE_BASE, 20_000, 6)).toBe(65_000);
    expect(atHomePackageCents(PACKAGE_BASE, 0, 6)).toBe(45_000);
    expect(atHomePackageCents(PACKAGE_BASE, 0, 10)).toBe(55_000);
  });
});
