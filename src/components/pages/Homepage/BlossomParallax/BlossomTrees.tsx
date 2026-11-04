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

/**
 * One watercolor tree. Rotates around the painted stem base so the trunk
 * stays planted and the canopy follows the wave.
 */
export const BlossomTree = ({ side, rotate, className }: BlossomTreeProps) => {
  const isLeft = side === "left";
  const signed = useTransform(rotate, (value) => (isLeft ? value : -value));

  return (
    <motion.div
      className={clsxm(
        "absolute overflow-visible will-change-transform",
        isLeft
          ? "left-[-30%] -top-[24%] sm:left-[-18%] sm:-top-[20%] lg:left-[-12%]"
          : "right-[-24%] -top-[24%] sm:right-[-14%] sm:-top-[20%] lg:right-[-8%]",
        className
      )}
      style={{
        rotate: signed,
        originX: isLeft ? 1 - TREE_STEM_ORIGIN_X : TREE_STEM_ORIGIN_X,
        originY: TREE_STEM_ORIGIN_Y,
      }}
      aria-hidden
    >
      <div className="h-64 w-52 overflow-visible sm:h-[20rem] sm:w-64 md:h-[24rem] md:w-[19rem] lg:h-[28rem] lg:w-[22rem]">
        <OptimizedImage
          host="vercel"
          src={TREE_SRC}
          alt=""
          width={TREE_WIDTH}
          height={TREE_HEIGHT}
          className={clsxm(
            "h-full w-full max-w-none overflow-visible object-contain object-bottom",
            isLeft && "-scale-x-100"
          )}
          style={{ overflow: "visible" }}
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
    <div className={clsxm("absolute inset-0 overflow-visible", className)} aria-hidden>
      <BlossomTree side="left" rotate={rotation} />
      <BlossomTree side="right" rotate={rotation} />
    </div>
  );
};

export default BlossomTrees;
