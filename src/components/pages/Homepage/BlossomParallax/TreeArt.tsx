"use client";

import {
  FAR_TEXTURE_SRC,
  TREE_SRC,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import OptimizedImage from "@/components/OptimizedImage";
import clsxm from "@/lib/clsxm";

const TREE_MASK =
  "linear-gradient(to left, #000 42%, rgba(0,0,0,0.55) 68%, transparent 100%), linear-gradient(to bottom, #000 58%, rgba(0,0,0,0.4) 78%, transparent 96%)";

type TreeArtProps = {
  className?: string;
  swayDeg?: number;
  depth?: "far" | "mid" | "near";
};

export const TreeArt = ({
  className,
  swayDeg = 0,
  depth = "mid",
}: TreeArtProps) => (
  <div
    className={clsxm(
      "absolute -top-[8%] -right-[22%] h-[58vh] w-[min(88vw,32rem)] origin-bottom-right will-change-transform sm:-right-[10%] sm:h-[64vh] sm:w-[min(62vw,34rem)] md:-right-[4%] md:h-[70vh] lg:right-0 lg:h-[74vh] lg:w-[min(52vw,36rem)]",
      className
    )}
    style={{
      transform: `rotate(${swayDeg}deg)`,
      WebkitMaskImage: TREE_MASK,
      maskImage: TREE_MASK,
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect",
    }}
  >
    <OptimizedImage
      host="vercel"
      src={TREE_SRC}
      alt=""
      width={900}
      height={1200}
      className={clsxm(
        "h-full w-full object-contain object-right",
        depth === "far" && "opacity-50 blur-[1px]",
        depth === "near" && "opacity-90"
      )}
    />
  </div>
);

export const FarBlossoms = ({ className }: { className?: string }) => (
  <div className={clsxm("absolute inset-0 overflow-hidden", className)}>
    <OptimizedImage
      host="vercel"
      src={FAR_TEXTURE_SRC}
      alt=""
      width={721}
      height={960}
      className="absolute -right-8 -top-10 h-[70vh] w-auto opacity-25 mix-blend-multiply max-md:opacity-15"
    />
    <svg
      aria-hidden
      viewBox="0 0 800 520"
      className="absolute right-0 top-0 h-[62vh] w-auto opacity-70 max-md:h-[48vh]"
    >
      {FAR_BLOOMS.map((bloom) => (
        <ellipse
          key={`${bloom.cx}-${bloom.cy}-${bloom.r}`}
          cx={bloom.cx}
          cy={bloom.cy}
          rx={bloom.r}
          ry={bloom.r * 0.82}
          fill={bloom.fill}
          fillOpacity={bloom.o}
        />
      ))}
    </svg>
  </div>
);

const FAR_BLOOMS = [
  { cx: 710, cy: 64, r: 36, fill: "#CE6B69", o: 0.16 },
  { cx: 640, cy: 42, r: 22, fill: "#f3d0c8", o: 0.28 },
  { cx: 760, cy: 120, r: 48, fill: "#e8a094", o: 0.18 },
  { cx: 580, cy: 88, r: 18, fill: "#CE6B69", o: 0.14 },
  { cx: 690, cy: 170, r: 28, fill: "#f9e4dc", o: 0.32 },
  { cx: 520, cy: 36, r: 14, fill: "#FF785E", o: 0.08 },
  { cx: 748, cy: 220, r: 20, fill: "#CE6B69", o: 0.12 },
  { cx: 610, cy: 150, r: 12, fill: "#e8a094", o: 0.2 },
  { cx: 780, cy: 70, r: 16, fill: "#f3d0c8", o: 0.22 },
  { cx: 560, cy: 200, r: 24, fill: "#CE6B69", o: 0.1 },
  { cx: 720, cy: 280, r: 18, fill: "#f3d0c8", o: 0.16 },
  { cx: 500, cy: 110, r: 10, fill: "#e8a094", o: 0.14 },
];
