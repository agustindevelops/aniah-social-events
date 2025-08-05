"use client";

import UnstyledLink from "@/components/links/UnstyledLink";
import { TypeServiceFields } from "@/lib/contentful/types";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { FC } from "react";

const BottomHeart: FC<TypeServiceFields> = ({ title, slug }) => {
  const currPathname = usePathname();
  const pathname = `/services/${slug}`;

  return (
    <div className="flex w-full items-center gap-2">
      <UnstyledLink
        href={pathname}
        className={classNames(
          "flex w-full flex-col items-center justify-center rounded border-4 text-center transition duration-300 hover:scale-105 hover:shadow-lg lg:h-24 lg:p-4",
          pathname === currPathname
            ? "bg-peach-200 border-secondary"
            : "bg-peach-50"
        )}
      >
        <h2 className="font-moonjelly py-1 text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h2>
      </UnstyledLink>
    </div>
  );
};

export default BottomHeart;
