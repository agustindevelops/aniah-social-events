"use client";

import { PETAL_SRC } from "@/components/pages/Homepage/BlossomParallax/constants";
import {
  createCanvasPetal,
  drawCanvasPetal,
  stepCanvasPetal,
  type CanvasPetal,
} from "@/components/pages/Homepage/BlossomParallax/petals";
import { TreeArt } from "@/components/pages/Homepage/BlossomParallax/TreeArt";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

type CanvasWindProps = {
  reducedMotion: boolean;
  petalCap: number;
};

const CanvasWind = ({ reducedMotion, petalCap }: CanvasWindProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    let spawnAcc = 0;

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
      const initial = Math.min(10, petalCap);
      for (let i = 0; i < initial; i += 1) {
        petals.push(createCanvasPetal(width, height, i > 3));
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
      const wind = Math.max(-1.4, Math.min(1.4, velocity * 12));
      const gravity = 0.9 + Math.min(1.4, y / 1800) + Math.abs(velocity) * 4;
      const target = Math.min(
        petalCap,
        Math.floor(8 + y / 90 + Math.abs(velocity) * 40)
      );
      spawnAcc += (0.01 + Math.abs(velocity) * 0.05) * dt;
      while (petals.length < target && spawnAcc >= 1) {
        petals.push(createCanvasPetal(width, height, true));
        spawnAcc -= 1;
      }
      if (petals.length > target) petals.length = target;

      ctx.clearRect(0, 0, width, height);
      for (const petal of petals) {
        stepCanvasPetal(petal, width, height, wind, gravity, 0);
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

  return (
    <>
      <TreeArt depth="mid" />
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
      )}
    </>
  );
};

export default CanvasWind;
