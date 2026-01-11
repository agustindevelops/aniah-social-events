import { BLOSSOMS_AND_BREWS } from "@/utils/content/events";

export const LINKS = [
  { href: "/events/blossoms-&-brews", label: "Blossoms & Brews" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  {
    href: "/schedule",
    label: "Book Now",
  },
];

type LinkType = {
  label: string;
  route: string;
  items?: Omit<LinkType, "items">[];
};

export const BLOSSOMS_AND_BREWS_CTA = {
  label: "Reserve Your Cup",
  route: BLOSSOMS_AND_BREWS.CTA.URL,
};

export const MAIN_LINKS: LinkType[] = [
  {
    label: "Our Services",
    route: "/services",
    items: [
      {
        label: "Styled Celebrations",
        route: "/services/styled-celebrations",
      },
      {
        label: "Brand Events",
        route: "/services/small-business-brand-event-design-and-production",
      },
      {
        label: "Wedding Coordination",
        route: "/services/wedding-day-coordination",
      },
    ],
  },
  { label: "Reviews", route: "/reviews" },
  { label: "Gallery", route: "/gallery" },
  { label: "About Us", route: "/about-us" },
  { label: "Blog", route: "/blog" },
  {
    label: "Book Now",
    route: "/schedule",
  },
];
