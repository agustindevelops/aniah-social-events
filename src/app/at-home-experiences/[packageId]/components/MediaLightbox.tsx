"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

import type { PublicPackageMedia } from "@/lib/ase-admin/packages";

type Props = {
  media: PublicPackageMedia[];
  name: string;
  index: number;
  /** Where the card video was, so the full-screen video picks up from there. */
  startTime: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

const navClass =
  "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gray-500/40 text-white shadow-md backdrop-blur-sm transition hover:bg-gray-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-0 [&>svg]:drop-shadow";

const MediaLightbox = ({
  media,
  name,
  index,
  startTime,
  onIndexChange,
  onClose,
}: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openedAtRef = useRef(index);
  const item = media[index];
  const count = media.length;

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index < count - 1) onIndexChange(index + 1);
      if (event.key === "ArrowLeft" && index > 0) onIndexChange(index - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [count, index, onClose, onIndexChange]);

  if (!item) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${name} media`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-12"
      onClick={onClose}
    >
      <div
        className="flex max-h-full max-w-full items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.url}
            src={item.url}
            controls
            autoPlay
            playsInline
            onLoadedMetadata={(event) => {
              if (index === openedAtRef.current && startTime > 0) {
                event.currentTarget.currentTime = startTime;
              }
            }}
            className="max-h-[85vh] max-w-full rounded-lg bg-black"
          />
        ) : (
          // Signed admin URLs expire and are not on the Next image allowlist.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.url}
            src={item.url}
            alt={`${name} — photo ${index + 1}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        )}
      </div>

      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <FiX size={24} />
      </button>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous"
            disabled={index === 0}
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange(index - 1);
            }}
            className={`${navClass} left-3 sm:left-6`}
          >
            <FiChevronLeft size={28} />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={index === count - 1}
            onClick={(event) => {
              event.stopPropagation();
              onIndexChange(index + 1);
            }}
            className={`${navClass} right-3 sm:right-6`}
          >
            <FiChevronRight size={28} />
          </button>
          <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white">
            {index + 1} / {count}
          </span>
        </>
      ) : null}
    </div>,
    document.body
  );
};

export default MediaLightbox;
