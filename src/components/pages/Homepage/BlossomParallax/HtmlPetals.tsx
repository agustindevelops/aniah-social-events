"use client";

import {
  PETALS_SRC,
  PETAL_SRC,
  PETAL_SVG_SRC,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import OptimizedImage from "@/components/OptimizedImage";

type PetalSeed = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  kind: 0 | 1 | 2;
  rotate: number;
};

const PETAL_SEEDS: PetalSeed[] = Array.from({ length: 80 }, (_, id) => ({
  id,
  left: 38 + ((id * 19) % 60),
  size: 9 + ((id * 13) % 15),
  duration: 11 + ((id * 7) % 15),
  delay: -((id * 11) % 18),
  drift: -36 + ((id * 23) % 92),
  opacity: 0.42 + ((id % 5) * 0.1),
  kind: (id % 3) as 0 | 1 | 2,
  rotate: (id * 47) % 360,
}));

const PetalGraphic = ({ seed }: { seed: PetalSeed }) => {
  const className = "h-full w-full";
  if (seed.kind === 0) {
    return (
      <OptimizedImage
        host="vercel"
        src={PETAL_SRC}
        alt=""
        width={75}
        height={80}
        className={className}
      />
    );
  }
  if (seed.kind === 1) {
    return (
      <OptimizedImage
        host="vercel"
        src={PETALS_SRC}
        alt=""
        width={96}
        height={96}
        className={className}
      />
    );
  }
  return (
    <OptimizedImage
      host="vercel"
      src={PETAL_SVG_SRC}
      alt=""
      width={32}
      height={40}
      className={className}
    />
  );
};

const HtmlPetals = ({ count }: { count: number }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {PETAL_SEEDS.slice(0, count).map((seed) => (
      <span
        key={seed.id}
        className="blossom-fall absolute top-0 will-change-transform"
        style={{
          left: `${seed.left}%`,
          width: seed.size,
          height: seed.size * 1.2,
          opacity: seed.opacity,
          animationDuration: `${seed.duration}s`,
          animationDelay: `${seed.delay}s`,
          ["--blossom-drift" as string]: `${seed.drift}px`,
        }}
      >
        <span
          className="blossom-twirl block h-full w-full"
          style={{
            animationDuration: `${8 + (seed.id % 6)}s`,
            animationDelay: `${seed.delay}s`,
            transform: `rotate(${seed.rotate}deg)`,
          }}
        >
          <PetalGraphic seed={seed} />
        </span>
      </span>
    ))}
  </div>
);

export default HtmlPetals;
