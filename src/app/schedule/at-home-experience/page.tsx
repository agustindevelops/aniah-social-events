import type { Metadata } from "next";
import { redirect } from "next/navigation";

import BookingForm from "@/app/schedule/at-home-experience/components/BookingForm";
import SelectionSummary from "@/app/schedule/at-home-experience/components/SelectionSummary";
import { getPublicPackageBySlug } from "@/lib/ase-admin/packages";
import {
  isCompleteSelection,
  packagePageHref,
  parseAtHomeSelection,
  type SearchParams,
} from "@/lib/booking/atHomeSelection";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";

type Props = {
  searchParams: Promise<SearchParams>;
};

export const metadata: Metadata = {
  title: "Schedule Your At-Home Experience | Aniah Social Events",
  robots: { index: false },
};

/** Step two of booking; the package page sends style, guests and date in the query. */
const AtHomeExperienceSchedulePage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const slug = typeof params.package === "string" ? params.package : "";
  const pkg = slug ? await getPublicPackageBySlug(slug) : null;
  if (!pkg) redirect(AT_HOME_EXPERIENCES.href);

  const selection = parseAtHomeSelection(params);
  const experienceHref = packagePageHref(pkg.slug, selection);
  if (!isCompleteSelection(selection)) redirect(experienceHref);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-36 sm:px-6 lg:px-8 lg:pb-24">
      <h1 className="font-moonjelly text-3xl text-[#CE6B69] sm:text-4xl">
        Schedule your at-home experience
      </h1>
      <SelectionSummary
        packageName={pkg.name}
        selection={selection}
        changeHref={experienceHref}
      />
      <BookingForm
        key={experienceHref}
        packageId={pkg.id}
        packageName={pkg.name}
        selection={selection}
        experienceHref={experienceHref}
      />
    </div>
  );
};

export default AtHomeExperienceSchedulePage;
