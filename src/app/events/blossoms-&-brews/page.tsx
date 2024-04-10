import Hero from '@/app/events/blossoms-&-brews/Hero';
import CTA from '@/app/events/blossoms-&-brews/CTA';
import Emotion from '@/app/events/blossoms-&-brews/Emotion';
import Banner from '@/app/events/blossoms-&-brews/Banner';
import Facts from '@/app/events/blossoms-&-brews/Facts';
import type { Metadata } from 'next';
import Attire from '@/app/events/blossoms-&-brews/Attire';
import Links from '@/app/events/blossoms-&-brews/Links';
import Location from '@/app/events/blossoms-&-brews/Location';

export const metadata: Metadata = {
  title: 'Blossoms & Brews Tea Party, San Antonio',
  description:
    "Join 'Blossoms & Brews' in Summer 2024 for an enchanting high tea brunch experience. Dive into a whimsical dress-up garden tea party in the heart of San Antonio, Texas. Embrace the magic with delightful teas, exquisite brunch, and the joy of dressing up in your garden-party best.",
  keywords: [
    'tea party in San Antonio',
    'tea party',
    'San Antonio, Texas tea party event',
    'San Antonio Tea Party',
    'Texas Tea party',
    'Tea Party in Texas',
    'brunch',
    'dress up',
    'high tea brunch experience',
    'summer 2024',
  ],
  openGraph: {
    title: 'Blossoms & Brews Tea Party Brunch, San Antonio - Summer 2024',
    description:
      "Join 'Blossoms & Brews' in Summer 2024 for an enchanting high tea brunch experience. Dive into a whimsical dress-up garden tea party in the heart of San Antonio, Texas. Embrace the magic with delightful teas, exquisite brunch, and the joy of dressing up in your garden-party best.",
    images: {
      url: 'https://www.aniahsocialevents.com/images/blossoms-and-brews/banner.png',
      alt: "Collage for 'Blossoms & Brews' tea party with logo, guests in summer dresses, assorted tea treats, floral decor, a 'Flower Bar' cart, and a 'Let's Partea' balloon arch.",
    },
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Enchanting High Tea Brunch: A Whimsical Dress-Up Garden Party in San Antonio - Summer 2024',
    description:
      "Join 'Blossoms & Brews' in Summer 2024 for an enchanting high tea brunch experience. Dive into a whimsical dress-up garden tea party in the heart of San Antonio, Texas. Embrace the magic with delightful teas, exquisite brunch, and the joy of dressing up in your garden-party best.",
    images: {
      url: 'https://www.aniahsocialevents.com/images/blossoms-and-brews/banner.png',
      alt: "Collage for 'Blossoms & Brews' tea party with logo, guests in summer dresses, assorted tea treats, floral decor, a 'Flower Bar' cart, and a 'Let's Partea' balloon arch.",
    },
  },
};

const TeaParty = () => {
  return (
    <div className='mt-24'>
      <Hero />
      <Emotion />
      <Location />
      <Attire />
      <Banner />
      <Facts />
      <CTA />
      <Links />
    </div>
  );
};

export default TeaParty;
