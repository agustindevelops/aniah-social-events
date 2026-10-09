import { useCallback, useEffect, useRef, useState } from "react";

import { bookingErrorMessage, uploadBookingPhoto } from "@/lib/ase-admin/booking";
import type { BookingPhoto } from "@/lib/booking/draft";
import { resizeImage } from "@/lib/booking/resizeImage";

/** Uploads each photo as soon as it's picked so the final submit only sends URLs. */
export function usePhotoUploads() {
  const [photos, setPhotos] = useState<BookingPhoto[]>([]);

  const photosRef = useRef(photos);
  photosRef.current = photos;
  useEffect(
    () => () =>
      photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.previewUrl)),
    []
  );

  const updatePhoto = useCallback(
    (id: string, patch: Partial<BookingPhoto>) =>
      setPhotos((current) =>
        current.map((photo) => (photo.id === id ? { ...photo, ...patch } : photo))
      ),
    []
  );

  const addPhotos = useCallback(
    (files: File[]) => {
      files.forEach((file) => {
        const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        setPhotos((current) => [
          ...current,
          { id, previewUrl: URL.createObjectURL(file), status: "uploading" },
        ]);
        resizeImage(file)
          .then(uploadBookingPhoto)
          .then((fileUrl) => updatePhoto(id, { status: "ready", fileUrl }))
          .catch((error) =>
            updatePhoto(id, {
              status: "error",
              error: bookingErrorMessage(error, "Couldn't upload"),
            })
          );
      });
    },
    [updatePhoto]
  );

  const removePhoto = useCallback(
    (id: string) =>
      setPhotos((current) => {
        const photo = current.find((entry) => entry.id === id);
        if (photo) URL.revokeObjectURL(photo.previewUrl);
        return current.filter((entry) => entry.id !== id);
      }),
    []
  );

  return { photos, addPhotos, removePhoto };
}
