import { PETAL_COLORS } from "@/components/pages/Homepage/BlossomParallax/constants";

export type CanvasPetal = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  color: number;
  wobble: number;
  wobbleSpeed: number;
  sprite: 0 | 1;
};

export const createCanvasPetal = (
  width: number,
  height: number,
  fromCanopy = true
): CanvasPetal => ({
  x: width * (0.42 + Math.random() * 0.58),
  y: fromCanopy ? -24 - Math.random() * 80 : Math.random() * height,
  z: Math.random(),
  vx: -0.25 - Math.random() * 0.55,
  vy: 0.35 + Math.random() * 0.7,
  rot: Math.random() * Math.PI * 2,
  vr: (Math.random() - 0.5) * 0.07,
  size: 7 + Math.random() * 11,
  color: Math.floor(Math.random() * PETAL_COLORS.length),
  wobble: Math.random() * Math.PI * 2,
  wobbleSpeed: 0.018 + Math.random() * 0.04,
  sprite: Math.random() > 0.72 ? 1 : 0,
});

export const stepCanvasPetal = (
  petal: CanvasPetal,
  width: number,
  height: number,
  wind: number,
  gravity: number,
  gust: number
) => {
  petal.wobble += petal.wobbleSpeed;
  petal.vx +=
    wind * 0.018 + gust * 0.12 + Math.sin(petal.wobble) * 0.045 * (0.6 + petal.z);
  petal.vy += gravity * (0.014 + petal.z * 0.012);
  petal.vx *= 0.985;
  petal.vy = Math.min(petal.vy, 2.6 + Math.abs(gust) * 1.4);
  petal.x += petal.vx + gust * (1.4 + petal.z * 1.8);
  petal.y += petal.vy * (0.65 + petal.z * 0.7);
  petal.rot += petal.vr + gust * 0.04;

  const off =
    petal.y > height + 36 || petal.x < -48 || petal.x > width + 48;
  if (off) Object.assign(petal, createCanvasPetal(width, height, true));
};

export const drawCanvasPetal = (
  ctx: CanvasRenderingContext2D,
  petal: CanvasPetal,
  sprite?: HTMLImageElement | null
) => {
  ctx.save();
  ctx.translate(petal.x, petal.y);
  ctx.rotate(petal.rot);
  ctx.globalAlpha = 0.42 + petal.z * 0.42;
  const w = petal.size * (0.85 + petal.z * 0.4);
  const h = w * 1.25;

  if (sprite && sprite.complete && sprite.naturalWidth > 0) {
    ctx.drawImage(sprite, -w / 2, -h / 2, w, h);
  } else {
    ctx.scale(1, 0.62 + petal.z * 0.2);
    ctx.beginPath();
    ctx.moveTo(0, w);
    ctx.bezierCurveTo(w * 0.9, w * 0.3, w * 0.5, -w * 0.2, 0, -w * 0.18);
    ctx.bezierCurveTo(-w * 0.5, -w * 0.2, -w * 0.9, w * 0.3, 0, w);
    ctx.fillStyle = PETAL_COLORS[petal.color] ?? PETAL_COLORS[0];
    ctx.fill();
  }

  ctx.restore();
};
