import { FC, ReactNode } from "react";
import clsxm from "@/lib/clsxm";

type Props = {
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({ children, id }) => {
  return (
    <section className={clsxm("mb-24 flex scroll-mt-20 flex-col justify-between", id === "ourServices" && "")} id={id}>
      <div className="container mx-auto py-2 sm:py-8">{children}</div>
    </section>
  );
};

export default SectionLayout;
