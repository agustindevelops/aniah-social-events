"use client";

import { FarBlossoms, TreeArt } from "@/components/pages/Homepage/BlossomParallax/TreeArt";
import HtmlPetals from "@/components/pages/Homepage/BlossomParallax/HtmlPetals";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

type LayersProps = {
  reducedMotion: boolean;
  petalCap: number;
};

const Layers = ({ reducedMotion, petalCap }: LayersProps) => {
  const { scrollY } = useScroll();
  const farY = useTransform(scrollY, [0, 2800], [0, 110]);
  const midY = useTransform(scrollY, [0, 2800], [0, 260]);
  const nearY = useTransform(scrollY, [0, 2800], [0, 460]);
  const [count, setCount] = useState(reducedMotion ? 0 : 8);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (reducedMotion) return;
    setCount((current) =>
      Math.min(petalCap, Math.max(current, 8 + Math.floor(y / 70)))
    );
  });

  return (
    <>
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: reducedMotion ? 0 : farY }}
      >
        <FarBlossoms />
      </motion.div>
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: reducedMotion ? 0 : midY }}
      >
        <TreeArt depth="mid" />
      </motion.div>
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ y: nearY }}
        >
          <HtmlPetals count={count} />
        </motion.div>
      )}
    </>
  );
};

export default Layers;
