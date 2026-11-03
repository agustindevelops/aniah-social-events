"use client";

import BlossomSwitcher from "@/components/pages/Homepage/BlossomParallax/BlossomSwitcher";
import {
  useBlossomVariant,
  usePetalCap,
  usePrefersReducedMotion,
} from "@/components/pages/Homepage/BlossomParallax/hooks";
import CanvasWind from "@/components/pages/Homepage/BlossomParallax/variants/CanvasWind";
import DepthGusts from "@/components/pages/Homepage/BlossomParallax/variants/DepthGusts";
import Layers from "@/components/pages/Homepage/BlossomParallax/variants/Layers";
import { Suspense } from "react";

const BlossomParallaxInner = () => {
  const { variant, setVariant } = useBlossomVariant();
  const reducedMotion = usePrefersReducedMotion();
  const petalCap = usePetalCap();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[15]" aria-hidden>
        {variant === "a" && (
          <Layers reducedMotion={reducedMotion} petalCap={petalCap} />
        )}
        {variant === "b" && (
          <CanvasWind reducedMotion={reducedMotion} petalCap={petalCap} />
        )}
        {variant === "c" && (
          <DepthGusts reducedMotion={reducedMotion} petalCap={petalCap} />
        )}
      </div>
      <BlossomSwitcher variant={variant} onChange={setVariant} />
    </>
  );
};

const BlossomParallax = () => (
  <Suspense fallback={null}>
    <BlossomParallaxInner />
  </Suspense>
);

export default BlossomParallax;
