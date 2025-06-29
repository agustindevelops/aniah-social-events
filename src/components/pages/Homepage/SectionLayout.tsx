import { FC, ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({ children, id }) => {
  return (
    <section className="mb-24 flex scroll-mt-20 flex-col justify-between" id={id}>
      <div className="container mx-auto py-2 sm:py-8">{children}</div>
    </section>
  );
};

export default SectionLayout;
