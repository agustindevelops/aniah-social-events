import { Service } from './servicesTypes';
import { SERVICES } from '@/utils/data';

const {
  TABLESCAPES,
  PLANNING_AND_COORDINATION: { TRUE_DAY_OF_COORDINATION, FULL_PLANNING },
} = SERVICES;

export const servicesData: Service[] = [
  {
    title: 'Event Planning',
    price: '$1800 - $2600',
    description:
      "Transform your vision into reality with our comprehensive event planning package. Starting from $1600, we ensure every detail is meticulously crafted to your taste. From venue selection to vendor coordination, we're with you every step to create an unforgettable celebration.",
    image: '/images/event-planning.png',
    link: `/services/${FULL_PLANNING.slug}`,
  },
  {
    title: 'Coordination',
    price: '$95/Hr or $1000/Day',
    description:
      'Navigate your event seamlessly with our professional coordination services. For $95/Hr or $1000/Day, we manage the intricacies of your day with precision. Experience stress-free festivities as we orchestrate the flow, timing, and execution of your event schedule.',
    image: '/images/coordinator.png',
    link: `/services/${TRUE_DAY_OF_COORDINATION.slug}`,
  },
  {
    title: 'Event Design & Tablescapes',
    price: 'Starts at $600',
    description:
      "Begin your event's story with stunning design and tablescapes starting at $600. Aniah Social Events Co. specializes in creating atmospheric settings that speak to the heart. Let us curate a visual feast that will enchant you and your guests alike.",
    image: '/images/tablescape-event-design.jpg',
    link: `/services/${TABLESCAPES.slug}`,
  },
];
