"use client";

import {
  BLOSSOM_LEAN_MAX,
  BLOSSOM_LEAN_REST,
  BLOSSOM_SCROLL_RANGE,
  PETAL_SRC,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import {
  createHangingPetal,
  drawCanvasPetal,
  stepHangingPetal,
  type HangingPetal,
} from "@/components/pages/Homepage/BlossomParallax/petals";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

type FallingPetalsProps = {
  reducedMotion: boolean;
  petalCap: number;
};

/** Falling petals. Tree tilt lives in BlossomTrees; both follow page scroll. */
const FallingPetals = ({ reducedMotion, petalCap }: FallingPetalsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const petals: HangingPetal[] = [];
    const sprite = new Image();
    sprite.src = PETAL_SRC;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = document.visibilityState === "visible";
    let lastT = performance.now();
    let lastY = scrollY.get();
    let lastLean = BLOSSOM_LEAN_REST;
    let velocity = 0;
    let spawnAcc = 0;

    const leanFromScroll = () => {
      const t = Math.min(1, Math.max(0, scrollY.get() / BLOSSOM_SCROLL_RANGE));
      return BLOSSOM_LEAN_REST + (BLOSSOM_LEAN_MAX - BLOSSOM_LEAN_REST) * t;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      petals.length = 0;
      const initial = Math.min(12, petalCap);
      for (let i = 0; i < initial; i += 1) {
        petals.push(
          createHangingPetal(width, height, i % 2 === 0 ? "left" : "right")
        );
      }
    };

    const loop = (t: number) => {
      if (!running) return;
      const dt = Math.min(32, t - lastT);
      lastT = t;
      const y = scrollY.get();
      const instant = (y - lastY) / Math.max(dt, 8);
      lastY = y;
      velocity = velocity * 0.82 + instant * 0.18;
      const leanNow = leanFromScroll();
      const leanVel = (leanNow - lastLean) / Math.max(dt, 8);
      lastLean = leanNow;
      const throwStrength =
        0.42 + leanNow * 0.055 + Math.max(0, leanVel) * 22;
      const gravity = 0.85 + Math.min(1.1, y / 2000) + Math.abs(velocity) * 2.4;
      const target = Math.min(
        petalCap,
        Math.floor(10 + y / 110 + Math.abs(velocity) * 36)
      );
      spawnAcc += (0.012 + Math.abs(velocity) * 0.055) * dt;
      while (petals.length < target && spawnAcc >= 1) {
        petals.push(
          createHangingPetal(
            width,
            height,
            petals.length % 2 === 0 ? "left" : "right",
            throwStrength
          )
        );
        spawnAcc -= 1;
      }
      if (petals.length > target) petals.length = target;

      ctx.clearRect(0, 0, width, height);
      for (const petal of petals) {
        stepHangingPetal(petal, width, height, gravity, throwStrength);
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
    seed();
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

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
};

export default FallingPetals;
