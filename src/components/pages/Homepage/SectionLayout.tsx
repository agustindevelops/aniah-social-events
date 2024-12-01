import { FC, ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({ children, id }) => {
  return (
    <div className="my-24 flex scroll-mt-20 flex-col justify-between" id={id}>
      <div className="container mx-auto py-2 sm:py-8">{children}</div>
    </div>
  );
};

export default SectionLayout;
