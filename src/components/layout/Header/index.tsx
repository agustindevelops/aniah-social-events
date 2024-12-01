"use client";

import Image from "next/image";
import logo from "public/images/aniah-social-events-logo.png";
import UnstyledLink from "@/components/links/UnstyledLink";
import { RiMenu2Line } from "react-icons/ri";
import {
  BLOSSOMS_AND_BREWS_CTA,
  MAIN_LINKS,
} from "@/components/layout/Header/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const cta =
    pathname === "/events/blossoms-&-brews"
      ? BLOSSOMS_AND_BREWS_CTA
      : MAIN_LINKS[MAIN_LINKS.length - 1];
  const filteredLinks = MAIN_LINKS.slice(0, -1);

  if (!cta) return <></>;

  return (
    <header className="bg-cream text-brown-500 fixed left-0 right-0 top-0 z-50">
      <div className="layout container flex h-20 items-center justify-between px-2">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-lg lg:hidden"
              >
                <RiMenu2Line size={48} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
              >
                {filteredLinks.map(({ label, route, items }) => (
                  <li key={label}>
                    <UnstyledLink href={route}>{label}</UnstyledLink>
                    {items && (
                      <ul className="p-2">
                        {items.map(({ label, route }) => (
                          <li key={label}>
                            <UnstyledLink href={route}>{label}</UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <UnstyledLink
              href="/"
              className="btn btn-ghost btn-lg hidden lg:block"
            >
              <Image
                src={logo}
                width={60}
                height={60}
                alt="Aniah Social Events Logo"
                priority
              />
            </UnstyledLink>
          </div>
          <div className="navbar-center">
            <UnstyledLink href="/" className="btn btn-ghost btn-lg lg:hidden">
              <Image
                src={logo}
                width={60}
                height={60}
                alt="Aniah Social Events Logo"
                priority
              />
            </UnstyledLink>
            <ul className="menu menu-lg menu-horizontal hidden px-1 lg:flex">
              {filteredLinks.map(({ label, route, items }) => (
                <li key={label}>
                  {items ? (
                    <details>
                      <summary>
                        <UnstyledLink href={route}>{label}</UnstyledLink>
                      </summary>
                      {items ? (
                        <ul className="border-peach-200 border-b-4 border-l-2 border-r-2 p-2">
                          {items.map(({ label, route }) => (
                            <li key={label}>
                              <UnstyledLink href={route}>{label}</UnstyledLink>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <></>
                      )}
                    </details>
                  ) : (
                    <UnstyledLink href={route}>{label}</UnstyledLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <UnstyledLink
              href={cta.route}
              className="btn w-full bg-blue-500 text-white hover:bg-blue-600"
            >
              {cta?.label}
            </UnstyledLink>
          </div>
        </div>
      </div>
      <div className="bg-peach-200 h-4" />
    </header>
  );
};

export default Header;
