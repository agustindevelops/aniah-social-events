"use client";

import {
  BLOSSOM_VARIANT_META,
  BLOSSOM_VARIANTS,
  type BlossomVariant,
} from "@/components/pages/Homepage/BlossomParallax/constants";
import clsxm from "@/lib/clsxm";

type BlossomSwitcherProps = {
  variant: BlossomVariant;
  onChange: (variant: BlossomVariant) => void;
};

const BlossomSwitcher = ({ variant, onChange }: BlossomSwitcherProps) => (
  <div
    role="group"
    aria-label="Blossom effect"
    className="pointer-events-auto fixed left-3 top-[5.5rem] z-[40] flex gap-1 rounded-full border border-brown-200 bg-cream/90 p-1 shadow-md backdrop-blur-sm"
  >
    {BLOSSOM_VARIANTS.map((id) => {
      const active = variant === id;
      const meta = BLOSSOM_VARIANT_META[id];
      return (
        <button
          key={id}
          type="button"
          aria-pressed={active}
          onClick={() => onChange(id)}
          className={clsxm(
            "rounded-full px-2.5 py-1 text-left leading-tight transition-colors",
            active
              ? "bg-white text-[#CE6B69]"
              : "text-brown-700 hover:bg-brown-50"
          )}
        >
          <span className="block font-nickainley text-sm leading-none">
            {id.toUpperCase()}
          </span>
          <span className="block text-[10px] font-medium tracking-wide">
            {meta.name}
          </span>
        </button>
      );
    })}
  </div>
);

export default BlossomSwitcher;
