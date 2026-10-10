"use client";

import type { AtHomeSelection } from "@/lib/booking/atHomeSelection";
import { usesClientFurniture } from "@/lib/booking/draft";

import ErrorList from "./ErrorList";
import MobileTotalBar from "./MobileTotalBar";
import QuoteSummary from "./QuoteSummary";
import StepActions from "./StepActions";
import StepNav from "./StepNav";
import AccessSetupStep from "./steps/AccessSetupStep";
import ConfirmStep from "./steps/ConfirmStep";
import EventTimingStep from "./steps/EventTimingStep";
import NotesContactStep from "./steps/NotesContactStep";
import TablesStep from "./steps/TablesStep";
import { useBookingForm } from "./useBookingForm";

type Props = {
  packageId: string;
  packageName: string;
  /** Style, guests and date chosen on the package page. */
  selection: AtHomeSelection;
  /** The package page with the same selection, for changing it. */
  experienceHref: string;
};

const BookingForm = ({
  packageId,
  packageName,
  selection,
  experienceHref,
}: Props) => {
  const form = useBookingForm(packageId, selection);
  const { draft, update, quote, schedule, step } = form;
  const clientFurniture = usesClientFurniture(draft);

  return (
    <div ref={form.topRef} className="scroll-mt-28">
      <StepNav
        steps={form.steps}
        step={step}
        onSelect={form.goTo}
        experienceHref={experienceHref}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {step === "tables" ? (
            <TablesStep
              draft={draft}
              update={update}
              photos={form.photos}
              onAddPhotos={form.addPhotos}
              onRemovePhoto={form.removePhoto}
            />
          ) : null}
          {step === "event" ? (
            <EventTimingStep
              draft={draft}
              update={update}
              schedule={schedule}
              changeDateHref={`${experienceHref}#event-date`}
              onStartTimeChange={form.setStartTime}
              onEndTimeChange={form.setEndTime}
            />
          ) : null}
          {step === "access" ? (
            <AccessSetupStep draft={draft} update={update} />
          ) : null}
          {step === "contact" ? (
            <NotesContactStep draft={draft} update={update} />
          ) : null}
          {step === "confirm" ? (
            <ConfirmStep draft={draft} update={update} schedule={schedule} />
          ) : null}

          <ErrorList errors={form.errors} />

          <StepActions
            isFirstStep={form.isFirstStep}
            isLastStep={form.isLastStep}
            submitting={form.submitting}
            totalCents={quote.quotedTotalCents}
            experienceHref={experienceHref}
            onBack={form.goBack}
            onNext={form.goNext}
            onSubmit={form.submit}
          />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <QuoteSummary
              packageName={packageName}
              guestCount={draft.guestCount}
              usesClientFurniture={clientFurniture}
              pickupOption={draft.pickupOption}
              quote={quote}
            />
          </div>
        </aside>
      </div>

      <MobileTotalBar
        usesClientFurniture={clientFurniture}
        guestCount={draft.guestCount}
        totalCents={quote.quotedTotalCents}
      />
    </div>
  );
};

export default BookingForm;
