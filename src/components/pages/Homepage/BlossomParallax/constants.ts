export const PETAL_CAP_MOBILE = 40;
export const PETAL_CAP_DESKTOP = 80;

/** Wave frequency in Hz: snap, overshoot, then reverse like a damped sine. */
export const BLOSSOM_SHAKE_SPEED = 1.15;
/** Underdamped ratio — lower rings longer after each overshoot. */
export const BLOSSOM_SHAKE_DAMPING = 0.22;
export const BLOSSOM_LEAN_REST = 8;
export const BLOSSOM_LEAN_MAX = 36;
export const BLOSSOM_SCROLL_RANGE = 1400;
/** Slow ambient wind added to the lean target, in degrees. */
export const BLOSSOM_IDLE_WIND = 2.4;

export const TREE_SRC = "/images/cherry-blossom/tree.png";
export const TREE_WIDTH = 1151;
export const TREE_HEIGHT = 966;
/** Stem base in the padded PNG, as 0–1 origin for rotation. */
export const TREE_STEM_ORIGIN_X = 0.59;
export const TREE_STEM_ORIGIN_Y = 0.86;
export const PETAL_SRC = "/images/cherry-blossom/petal.png";

export const PETAL_COLORS = [
  "rgba(206,107,105,0.82)",
  "rgba(243,208,200,0.78)",
  "rgba(232,154,148,0.72)",
  "rgba(255,120,94,0.42)",
] as const;
