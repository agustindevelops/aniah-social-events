const CONTENTFUL_IMAGE_HOST = "images.ctfassets.net";

export type ContentfulImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "pad" | "fill" | "scale" | "crop" | "thumb";
  focus?: "center" | "face" | "faces";
  format?: "webp" | "avif" | "jpg";
};

/** Build a Contentful Images API URL. Non-image hosts are returned unchanged. */
export const contentfulImageUrl = (
  url: string,
  {
    width,
    height,
    quality = 75,
    fit,
    focus,
    format = "webp",
  }: ContentfulImageOptions = {}
) => {
  const absolute = url.startsWith("//") ? `https:${url}` : url;

  let parsed: URL;
  try {
    parsed = new URL(absolute);
  } catch {
    return absolute;
  }

  if (parsed.hostname !== CONTENTFUL_IMAGE_HOST) return absolute;

  if (width) parsed.searchParams.set("w", String(width));
  if (height) parsed.searchParams.set("h", String(height));
  if (fit) parsed.searchParams.set("fit", fit);
  if (focus) parsed.searchParams.set("f", focus);
  parsed.searchParams.set("q", String(quality));
  parsed.searchParams.set("fm", format);

  return parsed.toString();
};
