"use client";

import FallingPetals from "@/components/pages/Homepage/BlossomParallax/FallingPetals";
import {
  usePetalCap,
  usePrefersReducedMotion,
} from "@/components/pages/Homepage/BlossomParallax/hooks";

const BlossomParallax = () => {
  const reducedMotion = usePrefersReducedMotion();
  const petalCap = usePetalCap();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      <FallingPetals reducedMotion={reducedMotion} petalCap={petalCap} />
    </div>
  );
};

export default BlossomParallax;
