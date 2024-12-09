import { SERVICES } from "@/utils/data";

import { Service } from "./servicesTypes";

const {
  PLANNING_AND_COORDINATION: {
    THIRTY_DAYS_OUT_COORDINATION,
    PLANNING_AND_COORDINATION,
    ATELIER_PLANNING_AND_COORDINATION,
    PARTY_PLANNING,
  },
} = SERVICES;

export const servicesData: Service[] = [
  {
    title: "Event Planning",
    price: `${PLANNING_AND_COORDINATION.price} - ${ATELIER_PLANNING_AND_COORDINATION.price}`,
    description:
      "Transform your vision into reality with our comprehensive event planning package. Starting at $2000, includes everything from custom invitation design to post-wedding wrap-up. Let Aniah Social Events Co. handle every detail to create an unforgettable celebration.",
    image: "/images/group-services/wedding-planning.jpg",
    link: `/services/${ATELIER_PLANNING_AND_COORDINATION.slug}`,
    ctaLabel: "Learn More",
  },
  {
    title: "30 Days Out Coordination",
    price: THIRTY_DAYS_OUT_COORDINATION.price,
    description:
      'Ensure your event is meticulously planned with our "30-Days Out Coordination" service. This package includes rehearsal coordination, minimal decor setup, and comprehensive cleanup. Experience stress-free festivities as we handle the details and execution of your event schedule.',
    image: "/images/group-services/coordinator.jpg",
    link: `/services/${THIRTY_DAYS_OUT_COORDINATION.slug}`,
    ctaLabel: "Learn More",
  },
  {
    title: "Party Planning",
    price: PARTY_PLANNING.price,
    description:
      "Not just for weddings, but perfect for bachelorette parties! Our comprehensive package includes custom digital invitation design, decor planning and sourcing, full setup and breakdown, and day-of coordination. We handle everything from curated decor options to vendor management, ensuring a seamless and beautifully styled event experience.",
    image: "/images/group-services/decorating.jpg",
    link: `/services/${PARTY_PLANNING.slug}`,
    ctaLabel: "Learn More",
  },
];
