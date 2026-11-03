"use client";

import BlossomTrees from "@/components/pages/Homepage/BlossomParallax/BlossomTrees";
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
      className="pointer-events-none absolute inset-x-0 top-16 z-[15] h-[40rem] sm:h-[42rem] md:h-[44rem] lg:h-[46rem] xl:h-[48rem]"
      aria-hidden
    >
      <BlossomTrees reducedMotion={reducedMotion} />
      <FallingPetals reducedMotion={reducedMotion} petalCap={petalCap} />
    </div>
  );
};

export default BlossomParallax;
