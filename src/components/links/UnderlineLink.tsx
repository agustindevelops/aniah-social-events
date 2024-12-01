import * as React from "react";

import clsxm from "@/lib/clsxm";

import UnstyledLink, {
  UnstyledLinkProps,
} from "@/components/links/UnstyledLink";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "animated-underline custom-link inline-flex items-center font-medium",
          "focus-visible:ring-peach-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2",
          "border-dark hover:border-peach-600 border-b border-dotted",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
