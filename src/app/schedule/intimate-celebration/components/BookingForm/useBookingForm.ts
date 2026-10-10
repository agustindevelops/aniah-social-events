import { useCallback, useRef, useState } from "react";

import { bookingErrorMessage, createBooking } from "@/lib/ase-admin/booking";
import type { AtHomeSelection } from "@/lib/booking/atHomeSelection";
import {
  type BookingDraft,
  getBookingQuote,
  getBookingSchedule,
  INITIAL_BOOKING_DRAFT,
  withEndTime,
  withStartTime,
} from "@/lib/booking/draft";
import { toBookingRequest } from "@/lib/booking/bookingRequest";
import {
  type BookingStep,
  bookingSteps,
  firstInvalidStep,
  validateBookingStep,
} from "@/lib/booking/validation";

import { usePhotoUploads } from "./usePhotoUploads";

export type UpdateDraft = <K extends keyof BookingDraft>(
  key: K,
  value: BookingDraft[K]
) => void;

/** All booking-form state and actions; the step components stay presentational. */
export function useBookingForm(packageId: string, selection: AtHomeSelection) {
  const steps = bookingSteps(selection.furniture);
  const [draft, setDraft] = useState<BookingDraft>(() => ({
    ...INITIAL_BOOKING_DRAFT,
    ...selection,
  }));
  const [step, setStep] = useState<BookingStep>(steps[0]);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const { photos, addPhotos, removePhoto } = usePhotoUploads();
  const topRef = useRef<HTMLDivElement>(null);
  const stepIndex = steps.indexOf(step);

  const update: UpdateDraft = useCallback(
    (key, value) => setDraft((current) => ({ ...current, [key]: value })),
    []
  );
  const setStartTime = useCallback(
    (value: string) => setDraft((current) => withStartTime(current, value)),
    []
  );
  const setEndTime = useCallback(
    (value: string) => setDraft((current) => withEndTime(current, value)),
    []
  );

  const showStep = (next: BookingStep, nextErrors: string[] = []) => {
    setStep(next);
    setErrors(nextErrors);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    const stepErrors = validateBookingStep(step, draft, photos);
    if (stepErrors.length > 0) {
      setErrors(stepErrors);
      return;
    }
    const next = steps[stepIndex + 1];
    if (next) showStep(next);
  };

  const goBack = () => {
    const previous = steps[stepIndex - 1];
    if (previous) showStep(previous);
  };

  const submit = async () => {
    const invalid = firstInvalidStep(draft, photos);
    if (invalid) {
      showStep(invalid.step, invalid.errors);
      return;
    }

    setSubmitting(true);
    setErrors([]);
    try {
      const { checkoutUrl } = await createBooking(
        toBookingRequest(packageId, draft, photos)
      );
      window.location.assign(checkoutUrl);
    } catch (error) {
      setErrors([
        bookingErrorMessage(error, "We couldn't start checkout. Please try again."),
      ]);
      setSubmitting(false);
    }
  };

  return {
    draft,
    update,
    setStartTime,
    setEndTime,
    photos,
    addPhotos,
    removePhoto,
    quote: getBookingQuote(draft),
    schedule: getBookingSchedule(draft),
    steps,
    step,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
    goTo: (next: BookingStep) => showStep(next),
    goNext,
    goBack,
    submit,
    errors,
    submitting,
    topRef,
  };
}
