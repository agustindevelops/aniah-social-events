export const BLOSSOM_VARIANTS = ["a", "b", "c"] as const;

export type BlossomVariant = (typeof BLOSSOM_VARIANTS)[number];

export const BLOSSOM_VARIANT_META: Record<
  BlossomVariant,
  { id: BlossomVariant; name: string }
> = {
  a: { id: "a", name: "Layers" },
  b: { id: "b", name: "Wind" },
  c: { id: "c", name: "Gusts" },
};

export const BLOSSOM_STORAGE_KEY = "ase-blossom-variant";
export const BLOSSOM_QUERY_KEY = "blossom";

export const PETAL_CAP_MOBILE = 40;
export const PETAL_CAP_DESKTOP = 80;

export const TREE_SRC = "/images/cherry-blossom/tree.png";
export const FAR_TEXTURE_SRC = "/images/cherry-blossom/far-texture.png";
export const PETAL_SRC = "/images/cherry-blossom/petal.png";
export const PETALS_SRC = "/images/cherry-blossom/petals.png";
export const PETAL_SVG_SRC = "/images/cherry-blossom/petal.svg";

export const PETAL_COLORS = [
  "rgba(206,107,105,0.82)",
  "rgba(243,208,200,0.78)",
  "rgba(232,154,148,0.72)",
  "rgba(255,120,94,0.42)",
] as const;

export const isBlossomVariant = (value: string | null): value is BlossomVariant =>
  value === "a" || value === "b" || value === "c";
