"use client";

import Link, { LinkProps } from "next/link";
import * as React from "react";

import clsxm from "@/lib/clsxm";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithRef<"a">;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#");

    const removeFocus = () => {
      setTimeout(() => {
        const elem = document.activeElement;
        if (elem && elem instanceof HTMLElement) {
          elem.blur();
        }
      }, 250);
    };

    if (!isNewTab) {
      return (
        <Link
          onClick={removeFocus}
          href={href}
          ref={ref}
          className={className}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={clsxm("cursor-newtab", className)}
        onClick={removeFocus}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
