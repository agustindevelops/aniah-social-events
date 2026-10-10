"use client";

import Image from "next/image";
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiPlay } from "react-icons/fi";

import type { PublicPackageMedia } from "@/lib/ase-admin/packages";

import MediaLightbox from "./MediaLightbox";

type Props = {
  media: PublicPackageMedia[];
  name: string;
};

const arrowClass =
  "absolute top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brown-800 shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:opacity-0 sm:flex";

const PackageGallery = ({ media, name }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxStartTime, setLightboxStartTime] = useState(0);
  const count = media.length;

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const next = Math.max(0, Math.min(count - 1, index));
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    },
    [count]
  );

  // Swipes and arrow clicks both end up here, so the active index follows the scroll position.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    trackRef.current
      ?.querySelectorAll<HTMLVideoElement>("video[data-slide]")
      .forEach((video) => {
        const isActive = Number(video.dataset.slide) === active;
        if (isActive && lightboxIndex === null && !reduceMotion) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      });
  }, [active, lightboxIndex]);

  const openLightbox = (index: number) => {
    const video = trackRef.current?.querySelector<HTMLVideoElement>(
      `video[data-slide="${index}"]`
    );
    setLightboxStartTime(video?.currentTime ?? 0);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    if (lightboxIndex !== null) goTo(lightboxIndex);
    setLightboxIndex(null);
  }, [goTo, lightboxIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  if (count === 0) return null;

  return (
    <div className="min-w-0">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${name} photos and videos`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative overflow-hidden rounded-2xl bg-peach-200/20 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex aspect-[3/4] w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {media.map((item, index) => (
            <div
              key={item.url}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              className="h-full w-full min-w-0 shrink-0 snap-center overflow-hidden"
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                aria-label={`Open ${item.type === "video" ? "video" : "photo"} ${index + 1} full screen`}
                className="group/slide relative block h-full w-full cursor-zoom-in focus:outline-none"
              >
                {item.type === "video" ? (
                  <video
                    data-slide={index}
                    src={item.url}
                    muted
                    loop
                    playsInline
                    preload={index === 0 ? "auto" : "metadata"}
                    aria-hidden
                    className="pointer-events-none h-full w-full bg-black object-cover"
                  />
                ) : (
                  // Signed admin URLs expire and are not on the Next image allowlist.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.url}
                    alt={`${name} — photo ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-500 group-hover/slide:scale-[1.02]"
                  />
                )}
                <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-brown-800/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition group-hover/slide:opacity-100 group-focus-visible/slide:opacity-100">
                  <FiMaximize2 size={12} />
                  {item.type === "video" ? "Watch full screen" : "View full screen"}
                </span>
              </button>
            </div>
          ))}
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className={`${arrowClass} left-3`}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => goTo(active + 1)}
              disabled={active === count - 1}
              className={`${arrowClass} right-3`}
            >
              <FiChevronRight size={22} />
            </button>
            <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brown-800/70 px-2.5 py-1 text-xs font-medium text-white">
              {active + 1} / {count}
            </span>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {media.map((item, index) => (
            <button
              key={item.url}
              type="button"
              aria-label={`Show ${item.type === "video" ? "video" : "photo"} ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition focus:outline-none focus-visible:ring-green-500 ${
                index === active
                  ? "ring-green-500"
                  : "opacity-70 ring-transparent hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.url}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full bg-black object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                    <FiPlay size={18} />
                  </span>
                </>
              ) : (
                <Image
                  src={item.url}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      ) : null}

      {lightboxIndex !== null ? (
        <MediaLightbox
          media={media}
          name={name}
          index={lightboxIndex}
          startTime={lightboxStartTime}
          onIndexChange={setLightboxIndex}
          onClose={closeLightbox}
        />
      ) : null}
    </div>
  );
};

export default PackageGallery;
