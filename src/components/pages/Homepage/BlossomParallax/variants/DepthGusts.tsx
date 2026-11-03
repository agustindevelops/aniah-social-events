"use client";

import { PETAL_SRC } from "@/components/pages/Homepage/BlossomParallax/constants";
import {
  createCanvasPetal,
  drawCanvasPetal,
  stepCanvasPetal,
  type CanvasPetal,
} from "@/components/pages/Homepage/BlossomParallax/petals";
import { FarBlossoms, TreeArt } from "@/components/pages/Homepage/BlossomParallax/TreeArt";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

type DepthGustsProps = {
  reducedMotion: boolean;
  petalCap: number;
};

const clampSway = (value: number) => Math.max(-4, Math.min(4, value));

const DepthGusts = ({ reducedMotion, petalCap }: DepthGustsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const petals: CanvasPetal[] = [];
    const sprite = new Image();
    sprite.src = PETAL_SRC;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = document.visibilityState === "visible";
    let lastT = performance.now();
    let lastY = scrollY.get();
    let velocity = 0;
    let gustValue = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const loop = (t: number) => {
      if (!running) return;
      const dt = Math.min(32, t - lastT);
      lastT = t;
      const y = scrollY.get();
      const instant = (y - lastY) / Math.max(dt, 8);
      lastY = y;
      velocity = velocity * 0.8 + instant * 0.2;

      if (Math.abs(instant) > 1.35) {
        gustValue = Math.sign(instant) * Math.min(1, Math.abs(instant) / 2.4);
      }
      gustValue *= 0.91;

      const idle = Math.sin(t / 1700) * 0.7;
      const fromScroll = Math.sin(y / 380) * 2.3;
      const fromWind = velocity * 9;
      const nextSway = clampSway(idle + fromScroll + fromWind + gustValue * 1.2);
      if (treeRef.current) {
        treeRef.current.style.transform = `rotate(${nextSway}deg)`;
      }

      const wind = Math.max(-1.5, Math.min(1.5, velocity * 14));
      const gravity = 1 + Math.min(1.6, y / 1600) + Math.abs(gustValue) * 0.8;
      const target = Math.min(
        petalCap,
        Math.floor(
          10 + y / 80 + Math.abs(velocity) * 36 + Math.abs(gustValue) * 18
        )
      );
      while (petals.length < target) {
        petals.push(createCanvasPetal(width, height, true));
      }
      if (petals.length > target) petals.length = target;

      ctx.clearRect(0, 0, width, height);
      for (const petal of petals) {
        stepCanvasPetal(petal, width, height, wind, gravity, gustValue);
        drawCanvasPetal(ctx, petal, sprite);
      }
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) {
        lastT = performance.now();
        raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    resize();
    for (let i = 0; i < Math.min(12, petalCap); i += 1) {
      petals.push(createCanvasPetal(width, height, i > 4));
    }
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [petalCap, reducedMotion, scrollY]);

  return (
    <div
      className="absolute inset-0 [transform-style:preserve-3d]"
      style={{ perspective: "1400px", perspectiveOrigin: "82% 38%" }}
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateZ(-200px) scale(1.14)" }}
      >
        <FarBlossoms />
      </div>
      <div
        ref={treeRef}
        className="absolute inset-0 origin-bottom-right will-change-transform"
        style={{ transform: "rotate(0deg)" }}
      >
        <TreeArt depth="mid" />
      </div>
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(64px)" }}
          aria-hidden
        />
      )}
    </div>
  );
};

export default DepthGusts;
