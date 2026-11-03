import OptimizedImage from "@/components/OptimizedImage";

const FloralMoment = () => {
  return (
    <section className="w-full" aria-label="A styled celebration table">
      <OptimizedImage
        host="vercel"
        src="/images/homepage/floral-moment.webp"
        alt="Peach and cream florals with a taper candle and glass on a blush outdoor table"
        width={2400}
        height={960}
        className="h-56 w-full object-cover sm:h-72 md:h-[22rem]"
        sizes="100vw"
      />
    </section>
  );
};

export default FloralMoment;
