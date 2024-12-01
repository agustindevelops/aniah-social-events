import React from "react";
import UnderlineLink from "@/components/links/UnderlineLink";
import { LINKS } from "@/components/layout/Header/constants";

const Desktop = () => {
  return (
    <ul className="hidden items-center justify-between space-x-4 sm:flex ">
      {LINKS.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <UnderlineLink href={href}>{label}</UnderlineLink>
        </li>
      ))}
    </ul>
  );
};

export default Desktop;
