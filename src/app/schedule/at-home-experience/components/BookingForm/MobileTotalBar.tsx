import { experienceLabel } from "@/lib/booking/atHomeExperience";
import { formatMoney } from "@/lib/booking/format";

type Props = {
  usesClientFurniture: boolean;
  guestCount: number;
  totalCents: number;
};

/** Stands in for the sticky QuoteSummary below the lg breakpoint. */
const MobileTotalBar = ({ usesClientFurniture, guestCount, totalCents }: Props) => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brown-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur lg:hidden">
    <div className="mx-auto flex max-w-3xl items-center justify-between">
      <span className="text-sm text-brown-700">
        {experienceLabel(usesClientFurniture)} · {guestCount} guests
      </span>
      <span className="text-lg font-semibold text-brown-800">
        {formatMoney(totalCents)}
      </span>
    </div>
  </div>
);

export default MobileTotalBar;
