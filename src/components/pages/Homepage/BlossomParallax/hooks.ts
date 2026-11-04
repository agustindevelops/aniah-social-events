"use client";

import {
  BLOSSOM_IDLE_WIND,
  BLOSSOM_LEAN_MAX,
  BLOSSOM_LEAN_REST,
  BLOSSOM_SCROLL_RANGE,
  BLOSSOM_SHAKE_DAMPING,
  BLOSSOM_SHAKE_SPEED,
  PETAL_CAP_DESKTOP,
  PETAL_CAP_MOBILE,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import { useAnimationFrame, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const mediaMatches = (query: string) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(() =>
    mediaMatches("(prefers-reduced-motion: reduce)")
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
};

export const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => mediaMatches("(max-width: 767px)"));

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
};

export const usePetalCap = () =>
  useIsMobile() ? PETAL_CAP_MOBILE : PETAL_CAP_DESKTOP;

type BlossomWaveOptions = {
  reducedMotion?: boolean;
  /** Wave frequency in Hz (x = time on the rotation graph). */
  shakeSpeed?: number;
  /** Underdamped ratio; lower overshoots more before reversing. */
  damping?: number;
};

/**
 * Scroll sets a lean target. Rotation snaps to it, overshoots, then
 * rings the other way as a decaying sine — y = degrees, x = time.
 */
export const useBlossomWave = ({
  reducedMotion = false,
  shakeSpeed = BLOSSOM_SHAKE_SPEED,
  damping = BLOSSOM_SHAKE_DAMPING,
}: BlossomWaveOptions = {}) => {
  const { scrollY } = useScroll();
  const rotation = useMotionValue(BLOSSOM_LEAN_REST);
  const velocity = useMotionValue(0);
  const target = useMotionValue(BLOSSOM_LEAN_REST);

  useAnimationFrame((time, delta) => {
    if (reducedMotion) {
      rotation.set(0);
      velocity.set(0);
      target.set(0);
      return;
    }

    const dt = Math.min(delta, 40) / 1000;
    const scrollT = Math.min(
      1,
      Math.max(0, scrollY.get() / BLOSSOM_SCROLL_RANGE)
    );
    const leanTarget = Math.min(
      BLOSSOM_LEAN_MAX,
      BLOSSOM_LEAN_REST +
        (BLOSSOM_LEAN_MAX - BLOSSOM_LEAN_REST) * scrollT +
        BLOSSOM_IDLE_WIND *
          Math.sin((time / 1000) * shakeSpeed * 0.38 * Math.PI * 2)
    );
    target.set(leanTarget);

    const omega = shakeSpeed * Math.PI * 2;
    const x = rotation.get();
    const v = velocity.get();
    const accel = -omega * omega * (x - leanTarget) - 2 * damping * omega * v;
    const nextV = Math.max(-360, Math.min(360, v + accel * dt));
    const nextX = Math.max(-8, Math.min(BLOSSOM_LEAN_MAX, x + nextV * dt));
    velocity.set(nextV);
    rotation.set(nextX);
  });

  return { rotation, velocity, target, scrollY };
};
