"use client";

import Button from "@/components/buttons/Button";
import {
  BLOSSOMS_AND_BREWS_CTA,
  MAIN_LINKS,
} from "@/components/layout/Header/constants";
import UnstyledLink from "@/components/links/UnstyledLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "public/images/aniah-social-events-logo.png";
import { useState, useEffect, useRef } from "react";
import { RiMenu2Line } from "react-icons/ri";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const cta =
    pathname === "/events/blossoms-&-brews"
      ? BLOSSOMS_AND_BREWS_CTA
      : MAIN_LINKS[MAIN_LINKS.length - 1];
  const filteredLinks = MAIN_LINKS.slice(0, -1);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  if (!cta) return <></>;

  return (
    <header className="bg-cream text-brown-500 fixed left-0 right-0 top-0 z-50">
      <div className="layout container flex h-20 items-center justify-between px-2">
        <nav className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="relative lg:hidden" ref={mobileMenuRef}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center p-2 hover:bg-brown-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <RiMenu2Line size={48} />
              </button>
              {mobileMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-cream rounded-lg shadow-lg z-[1] p-2 border border-brown-200">
                  <ul className="space-y-1">
                    {filteredLinks.map(({ label, route, items }) => (
                      <li key={label}>
                        <UnstyledLink
                          href={route}
                          className="block px-4 py-2 hover:bg-brown-100 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {label}
                        </UnstyledLink>
                        {items && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {items.map(({ label, route }) => (
                              <li key={label}>
                                <UnstyledLink
                                  href={route}
                                  className="block px-4 py-2 hover:bg-brown-100 rounded-lg transition-colors text-sm"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {label}
                                </UnstyledLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <UnstyledLink
              href="/"
              className="hidden lg:block p-2 hover:bg-brown-100 rounded-lg transition-colors"
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
          <div className="flex items-center">
            <UnstyledLink href="/" className="lg:hidden p-2 hover:bg-brown-100 rounded-lg transition-colors">
              <Image
                src={logo}
                width={60}
                height={60}
                alt="Aniah Social Events Logo"
                priority
              />
            </UnstyledLink>
            <ul className="hidden lg:flex items-center px-1 space-x-4">
              {filteredLinks.map(({ label, route, items }) => (
                <li key={label} className="relative group">
                  {items ? (
                    <>
                      <UnstyledLink
                        href={route}
                        className="px-4 py-2 hover:bg-brown-100 rounded-lg transition-colors block"
                      >
                        {label}
                      </UnstyledLink>
                      <ul className="absolute left-0 top-full mt-1 bg-cream border-peach-200 border-2 rounded-lg shadow-lg p-2 min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {items.map(({ label, route }) => (
                          <li key={label}>
                            <UnstyledLink
                              href={route}
                              className="block px-4 py-2 hover:bg-brown-100 rounded-lg transition-colors whitespace-nowrap"
                            >
                              {label}
                            </UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <UnstyledLink
                      href={route}
                      className="px-4 py-2 hover:bg-brown-100 rounded-lg transition-colors block"
                    >
                      {label}
                    </UnstyledLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <Button href="/schedule">Contact Us</Button>
          </div>
        </nav>
      </div>
      <div className="bg-peach-200 h-1" />
    </header>
  );
};

export default Header;
