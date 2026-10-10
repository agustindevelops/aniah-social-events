import { BLOSSOMS_AND_BREWS } from "@/utils/content/events";
import {
  AT_HOME_EXPERIENCES,
  WEDDINGS_AND_EVENTS,
} from "@/utils/content/offerings";
import { APPOINTMENT_ROUTE } from "@/utils/content/schedule";

export const LINKS = [
  { href: "/events/blossoms-&-brews", label: "Blossoms & Brews" },
  { href: AT_HOME_EXPERIENCES.href, label: AT_HOME_EXPERIENCES.navLabel },
  { href: WEDDINGS_AND_EVENTS.href, label: WEDDINGS_AND_EVENTS.navLabel },
  { href: "/about-us", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  {
    href: APPOINTMENT_ROUTE,
    label: "Start Planning",
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
  { label: AT_HOME_EXPERIENCES.navLabel, route: AT_HOME_EXPERIENCES.href },
  {
    label: WEDDINGS_AND_EVENTS.navLabel,
    route: WEDDINGS_AND_EVENTS.href,
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
    label: "Start Planning",
    route: APPOINTMENT_ROUTE,
  },
];
