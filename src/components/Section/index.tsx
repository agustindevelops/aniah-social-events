const Section = ({
  children,
  title,
  paragraph,
  list,
}: {
  children?: React.ReactNode;
  title?: string;
  paragraph?: string;
  list?: string[];
}) => {
  if (!children && !title && !paragraph && !list) return <></>;

  return (
    <section className="container mx-auto my-24 flex scroll-mt-20 flex-col justify-between bg-soft-peach bg-opacity-50 pb-16 pt-24">
      <h3 className="font-nickainley text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-16 pt-24">
        {title}
      </h3>
      <p className="font-extrabold font-moonjelly text-warm-taupe mx-auto mt-4 max-w-5xl text-xl sm:text-3xl md:mt-5 md:max-w-5xl md:text-3xl">
        {paragraph}
      </p>
      <ul className="list-inside mx-auto my-4 text-center">
        {list?.map((item, idx) => (
          <li
            key={`${title}-item-${idx}`}
            className="flex items-center justify-center gap-2 text-2xl lg:text-3xl font-libre my-2"
          >
            <span
              role="img"
              aria-label="heart"
              className="text-peach-500 mt-0.5"
            >
              ❤️
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
};

export default Section;
