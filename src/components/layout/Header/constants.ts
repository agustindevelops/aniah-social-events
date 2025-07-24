import { BLOSSOMS_AND_BREWS } from "@/utils/content/events";
import { SERVICES } from "@/utils/data";

const {
  WEDDINGS: { THIRTY_DAYS_OUT_COORDINATION, ATELIER_PLANNING_AND_COORDINATION },
  SOCIAL_EVENTS: { PARTY_PLANNING },
} = SERVICES;

export const LINKS = [
  { href: "/events/blossoms-&-brews", label: "Blossoms & Brews" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  {
    href: "/schedule",
    label: "Contact Us",
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
        label: "Wedding Planning",
        route: `/services/${ATELIER_PLANNING_AND_COORDINATION.slug}`,
      },
      {
        label: "Coordination",
        route: `/services/${THIRTY_DAYS_OUT_COORDINATION.slug}`,
      },
      { label: "Party Planning", route: `/services/${PARTY_PLANNING.slug}` },
    ],
  },
  { label: "Reviews", route: "/reviews" },
  { label: "Gallery", route: "/gallery" },
  { label: "About Us", route: "/about-us" },
  { label: "Blog", route: "/blog" },
  {
    label: "Contact Us",
    route: "/schedule",
  },
];
