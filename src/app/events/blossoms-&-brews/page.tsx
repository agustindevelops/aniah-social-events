import Hero from '@/app/events/blossoms-&-brews/Hero';
import CTA from '@/app/events/blossoms-&-brews/CTA';
import Emotion from '@/app/events/blossoms-&-brews/Emotion';
import Banner from '@/app/events/blossoms-&-brews/Banner';
import Facts from '@/app/events/blossoms-&-brews/Facts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Enchanting High Tea Brunch: A Whimsical Dress-Up Garden Tea Party in San Antonio - Summer 2024',
  description:
    "Join 'Blossoms & Brews' in Summer 2024 for an enchanting high tea brunch experience. Dive into a whimsical dress-up garden tea party in the heart of San Antonio, Texas. Embrace the magic with delightful teas, exquisite brunch, and the joy of dressing up in your garden-party best.",
  keywords: [
    'whimsical',
    'enchanting',
    'dress up',
    'high tea brunch experience',
    'summer 2024',
    'San Antonio Texas',
    'garden tea party',
  ],
  openGraph: {
    title:
      'Enchanting High Tea Brunch: A Whimsical Dress-Up Garden Tea Party in San Antonio - Summer 2024',
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
    <div className='my-24'>
      <Hero />
      <Emotion />
      <Banner />
      <Facts />
      <CTA />
    </div>
  );
};

export default TeaParty;
