"use client";

import {
  TREE_HEIGHT,
  TREE_SRC,
  TREE_STEM_ORIGIN_X,
  TREE_STEM_ORIGIN_Y,
  TREE_WIDTH,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import { useBlossomWave } from "@/components/pages/Homepage/BlossomParallax/hooks";
import OptimizedImage from "@/components/OptimizedImage";
import clsxm from "@/lib/clsxm";
import { motion, useTransform, type MotionValue } from "framer-motion";

type BlossomTreeProps = {
  side: "left" | "right";
  /** Shared lean in degrees; this side signs it so both canopies sway together. */
  rotate: MotionValue<number>;
  className?: string;
};

const edgeMask = (side: "left" | "right") =>
  side === "left"
    ? "radial-gradient(ellipse 100% 115% at 0% 10%, #000 0%, #000 34%, transparent 66%)"
    : "radial-gradient(ellipse 100% 115% at 100% 10%, #000 0%, #000 34%, transparent 66%)";

/**
 * One watercolor tree. Rotates around the painted stem base so the trunk
 * stays planted and the canopy follows the wave.
 */
export const BlossomTree = ({ side, rotate, className }: BlossomTreeProps) => {
  const isLeft = side === "left";
  const signed = useTransform(rotate, (value) => (isLeft ? value : -value));
  const mask = edgeMask(side);

  return (
    <motion.div
      className={clsxm(
        "absolute will-change-transform",
        isLeft
          ? "left-[-40%] -top-[10%] sm:left-[-22%] sm:-top-[8%] lg:left-[-14%]"
          : "right-[-40%] -top-[10%] sm:right-[-22%] sm:-top-[8%] lg:right-[-14%]",
        className
      )}
      style={{
        rotate: signed,
        originX: isLeft ? 1 - TREE_STEM_ORIGIN_X : TREE_STEM_ORIGIN_X,
        originY: TREE_STEM_ORIGIN_Y,
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
      aria-hidden
    >
      <div className="h-[15rem] w-[23rem] sm:h-[19rem] sm:w-[30rem] md:h-[22rem] md:w-[36rem] lg:h-[24rem] lg:w-[42rem]">
        <OptimizedImage
          host="vercel"
          src={TREE_SRC}
          alt=""
          width={TREE_WIDTH}
          height={TREE_HEIGHT}
          className={clsxm(
            "h-full w-full object-contain object-bottom",
            isLeft && "-scale-x-100"
          )}
        />
      </div>
    </motion.div>
  );
};

type BlossomTreesProps = {
  reducedMotion?: boolean;
  /** Wave frequency in Hz — snap, overshoot, reverse. */
  shakeSpeed?: number;
  damping?: number;
  className?: string;
};

/**
 * Pair of hero trees. Owns the tilt wave so it can be tuned without
 * touching falling petals. Both still follow page scroll.
 */
export const BlossomTrees = ({
  reducedMotion = false,
  shakeSpeed,
  damping,
  className,
}: BlossomTreesProps) => {
  const { rotation } = useBlossomWave({
    reducedMotion,
    shakeSpeed,
    damping,
  });

  return (
    <div className={clsxm("absolute inset-0 overflow-hidden", className)} aria-hidden>
      <BlossomTree side="left" rotate={rotation} />
      <BlossomTree side="right" rotate={rotation} />
    </div>
  );
};

export default BlossomTrees;
