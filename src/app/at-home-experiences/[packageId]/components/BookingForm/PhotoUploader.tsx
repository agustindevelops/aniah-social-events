import { useRef } from "react";

import type { BookingPhoto } from "@/lib/booking/draft";
import clsxm from "@/lib/clsxm";

type Props = {
  label: string;
  helper: string;
  photos: BookingPhoto[];
  onAdd: (files: File[]) => void;
  onRemove: (id: string) => void;
};

const PhotoUploader = ({ label, helper, photos, onAdd, onRemove }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-3">
      <div>
        <p className="text-base font-semibold text-brown-800">{label}</p>
        <p className="text-sm text-brown-600">{helper}</p>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square overflow-hidden rounded-lg border border-brown-100 bg-brown-50"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.previewUrl}
              alt=""
              className={clsxm(
                "h-full w-full object-cover",
                photo.status !== "ready" && "opacity-50"
              )}
            />
            {photo.status === "uploading" ? (
              <span className="absolute inset-x-0 bottom-0 bg-white/90 py-1 text-center text-xs text-brown-700">
                Uploading…
              </span>
            ) : null}
            {photo.status === "error" ? (
              <span
                role="alert"
                className="absolute inset-x-0 bottom-0 bg-white/90 px-1 py-1 text-center text-xs text-peach-700"
              >
                {photo.error}
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => onRemove(photo.id)}
              aria-label="Remove photo"
              className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-sm text-brown-800 shadow hover:bg-white"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-dashed border-brown-200 bg-white text-sm text-brown-600 transition hover:border-green-500 hover:text-green-700"
        >
          <span className="text-2xl leading-none">+</span>
          <span className="mt-1">Add photos</span>
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(event) => {
          const files = Array.from(event.target.files ?? []);
          if (files.length > 0) onAdd(files);
          event.target.value = "";
        }}
      />
    </div>
  );
};

export default PhotoUploader;
