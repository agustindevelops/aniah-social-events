import { Service } from './servicesTypes';
import { SERVICES } from '@/utils/data';

const {
  TABLESCAPES,
  PLANNING_AND_COORDINATION: {
    THIRTY_DAYS_OUT_COORDINATION,
    PLANNING_AND_COORDINATION,
    ATELIER_PLANNING_AND_COORDINATION,
  },
} = SERVICES;

export const servicesData: Service[] = [
  {
    title: 'Event Planning',
    price: `${PLANNING_AND_COORDINATION.price} - ${ATELIER_PLANNING_AND_COORDINATION.price}`,
    description:
      'Transform your vision into reality with our comprehensive event planning package. Starting at $2000, includes everything from custom invitation design to post-wedding wrap-up. Let Aniah Social Events Co. handle every detail to create an unforgettable celebration.',
    image: '/images/event-planning.png',
    link: `/services/${ATELIER_PLANNING_AND_COORDINATION.slug}`,
  },
  {
    title: '30 Days Out Coordination',
    price: THIRTY_DAYS_OUT_COORDINATION.price,
    description:
      'Ensure your event is meticulously planned with our "30-Days Out Coordination" service. This package includes rehearsal coordination, minimal decor setup, and comprehensive cleanup. Experience stress-free festivities as we handle the details and execution of your event schedule.',
    image: '/images/coordinator.png',
    link: `/services/${THIRTY_DAYS_OUT_COORDINATION.slug}`,
  },
  {
    title: 'Event Design & Tablescapes',
    price: 'Starts at $800',
    description:
      "Begin your event's story with stunning design and tablescapes starting at $800. Aniah Social Events Co. specializes in creating atmospheric settings that speak to the heart. Let us curate a visual feast that will enchant you and your guests alike.",
    image: '/images/tablescape-event-design.jpg',
    link: `/services/${TABLESCAPES.slug}`,
  },
];
