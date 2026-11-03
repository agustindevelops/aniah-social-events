import Image, { type ImageProps } from "next/image";

export type ImageHost = "contentful" | "vercel" | "cloudflare";

export type OptimizedImageProps = ImageProps & {
  host?: ImageHost;
};

// Any host skips Vercel's image optimizer (and its Fast Data Transfer on
// /_next/image); the source must already be sized. Next optimizes only when
// host is omitted.
const OptimizedImage = ({
  host,
  unoptimized,
  ...props
}: OptimizedImageProps) => (
  <Image {...props} unoptimized={host !== undefined || unoptimized} />
);

export default OptimizedImage;
