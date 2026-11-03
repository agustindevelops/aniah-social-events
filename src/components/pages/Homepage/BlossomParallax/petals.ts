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

export type HangingSide = "left" | "right";

export type HangingPetal = CanvasPetal & {
  side: HangingSide;
  baseX: number;
  phase: number;
  zigzagAmp: number;
  zigzagSpeed: number;
};

const canopyX = (side: HangingSide, width: number) =>
  side === "left"
    ? width * (0.02 + Math.random() * 0.22)
    : width * (0.76 + Math.random() * 0.22);

const awayFromTree = (side: HangingSide) => (side === "left" ? 1 : -1);

export const createHangingPetal = (
  width: number,
  height: number,
  side: HangingSide,
  throwStrength = 0.45
): HangingPetal => {
  const x = canopyX(side, width);
  const away = awayFromTree(side);
  return {
    x,
    y: -18 - Math.random() * 70,
    z: Math.random(),
    vx: away * throwStrength * (0.6 + Math.random() * 0.8),
    vy: 0.28 + Math.random() * 0.45 + Math.abs(throwStrength) * 0.2,
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.08,
    size: 7 + Math.random() * 11,
    color: Math.floor(Math.random() * PETAL_COLORS.length),
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.018 + Math.random() * 0.04,
    sprite: Math.random() > 0.72 ? 1 : 0,
    side,
    baseX: x,
    phase: Math.random() * Math.PI * 2,
    zigzagAmp: 18 + Math.random() * 28,
    zigzagSpeed: 0.035 + Math.random() * 0.04,
  };
};

export const stepHangingPetal = (
  petal: HangingPetal,
  width: number,
  height: number,
  gravity: number,
  throwStrength: number
) => {
  const away = awayFromTree(petal.side);
  const directed = away * Math.abs(throwStrength);

  petal.phase += petal.zigzagSpeed;
  petal.vy += gravity * (0.012 + petal.z * 0.01) + Math.abs(throwStrength) * 0.01;
  petal.vy = Math.min(petal.vy, 2.15);
  petal.y += petal.vy * (0.7 + petal.z * 0.55);
  // Follow-through: leaves keep the tree's lean, flung toward the opposite side.
  petal.baseX += directed * (0.55 + petal.z * 0.7);
  const amp = petal.zigzagAmp * (0.55 + petal.y / Math.max(height, 1));
  petal.x =
    petal.baseX +
    Math.asin(Math.sin(petal.phase)) * (amp / (Math.PI / 2));
  petal.rot += petal.vr + Math.cos(petal.phase) * 0.02 + directed * 0.012;

  if (petal.y > height + 40 || petal.x < -56 || petal.x > width + 56) {
    Object.assign(
      petal,
      createHangingPetal(width, height, petal.side, throwStrength)
    );
  }
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
