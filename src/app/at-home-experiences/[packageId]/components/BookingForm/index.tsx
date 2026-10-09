"use client";

import { usesClientFurniture } from "@/lib/booking/draft";
import { BOOKING_STEPS } from "@/lib/booking/validation";

import ErrorList from "./ErrorList";
import MobileTotalBar from "./MobileTotalBar";
import QuoteSummary from "./QuoteSummary";
import StepActions from "./StepActions";
import StepNav from "./StepNav";
import AccessSetupStep from "./steps/AccessSetupStep";
import ConfirmStep from "./steps/ConfirmStep";
import EventTimingStep from "./steps/EventTimingStep";
import ExperienceStep from "./steps/ExperienceStep";
import NotesContactStep from "./steps/NotesContactStep";
import { useBookingForm } from "./useBookingForm";

type Props = {
  packageId: string;
  packageName: string;
};

const BookingForm = ({ packageId, packageName }: Props) => {
  const form = useBookingForm(packageId);
  const { draft, update, quote, schedule, step } = form;
  const clientFurniture = usesClientFurniture(draft);

  return (
    <div ref={form.topRef} className="scroll-mt-28">
      <StepNav step={step} onSelect={form.goTo} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {step === 0 ? (
            <ExperienceStep
              draft={draft}
              update={update}
              photos={form.photos}
              onAddPhotos={form.addPhotos}
              onRemovePhoto={form.removePhoto}
            />
          ) : null}
          {step === 1 ? (
            <EventTimingStep
              draft={draft}
              update={update}
              schedule={schedule}
              onStartTimeChange={form.setStartTime}
              onEndTimeChange={form.setEndTime}
            />
          ) : null}
          {step === 2 ? <AccessSetupStep draft={draft} update={update} /> : null}
          {step === 3 ? <NotesContactStep draft={draft} update={update} /> : null}
          {step === 4 ? (
            <ConfirmStep draft={draft} update={update} schedule={schedule} />
          ) : null}

          <ErrorList errors={form.errors} />

          <StepActions
            isFirstStep={step === 0}
            isLastStep={step === BOOKING_STEPS.length - 1}
            submitting={form.submitting}
            totalCents={quote.quotedTotalCents}
            onBack={() => form.goTo(step - 1)}
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
