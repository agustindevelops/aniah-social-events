import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';
import { SERVICES } from '@/utils/data';

const {
  TABLESCAPES,
  PLANNING_AND_COORDINATION: { TRUE_DAY_OF_COORDINATION, FULL_PLANNING },
} = SERVICES;

export const LINKS = [
  { href: '/events/blossoms-&-brews', label: 'Blossoms & Brews' },
  { href: '/#ourServices', label: 'Services' },
  { href: '/#getToKnowMe', label: 'About Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  {
    href: 'https://www.honeybook.com/widget/aniah_social_events_258611/cf_id/64ac6b5f5c67b511146db09e',
    label: "Let's get in touch!",
  },
];

type LinkType = {
  label: string;
  route: string;
  items?: Omit<LinkType, 'items'>[];
};

export const BLOSSOMS_AND_BREWS_CTA = {
  label: 'Reserve Your Cup',
  route: BLOSSOMS_AND_BREWS.CTA.URL,
};

export const MAIN_LINKS: LinkType[] = [
  {
    label: 'Wedding Planning',
    route: '/#ourServices',
    items: [
      { label: 'Planning', route: `/services/${FULL_PLANNING.slug}` },
      {
        label: 'Coordination',
        route: `/services/${TRUE_DAY_OF_COORDINATION.slug}`,
      },
      { label: 'Tablescapes', route: `/services/${TABLESCAPES.slug}` },
    ],
  },
  { label: 'Reviews', route: '/reviews' },
  { label: 'Gallery', route: '/gallery' },
  { label: 'About Us', route: '/#getToKnowMe' },
  { label: 'Blog', route: '/blog' },
  { label: 'Blossoms & Brews', route: '/events/blossoms-&-brews' },
  {
    label: "Let's Get in Touch!",
    route:
      'https://www.honeybook.com/widget/aniah_social_events_258611/cf_id/64ac6b5f5c67b511146db09e',
  },
];
