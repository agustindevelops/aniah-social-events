"use client";

import { FC } from "react";
import { Package } from "@/app/services/[slug]/page";
import { usePathname } from "next/navigation";
import UnstyledLink from "@/components/links/UnstyledLink";
import { AiFillHeart } from "react-icons/ai";
import classNames from "classnames";

const BottomHeart: FC<Package> = ({ title, subTitle, price, pathname }) => {
  const currPathname = usePathname();

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <UnstyledLink
        href={pathname}
        className={classNames(
          "flex h-32 w-full flex-col items-center justify-center rounded border-4 p-4 text-center transition duration-300 hover:scale-105 hover:shadow-lg lg:h-36 lg:p-4",
          pathname === currPathname
            ? "bg-peach-200 border-secondary"
            : "bg-peach-50"
        )}
      >
        <h2 className="font-pacifico mb-2 text-2xl lg:text-3xl xl:text-4xl">
          {title}
        </h2>
        <h3 className="font-libre mb-2 text-sm font-bold md:text-lg">
          {subTitle}
        </h3>
      </UnstyledLink>
      <AiFillHeart />
    </div>
  );
};

export default BottomHeart;
