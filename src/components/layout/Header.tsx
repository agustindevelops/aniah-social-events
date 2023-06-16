import Image from 'next/image';
import logo from 'public/images/aniah-social-events-logo.png';

import UnstyledLink from '@/components/links/UnstyledLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import * as React from 'react';

const links = [
  { href: '#ourServices', label: 'Services' },
  { href: '#getToKnowMe', label: 'About Us' },
  { href: '#contactUs', label: "Let's get in touch!" },
];

export default function Header() {
  return (
    <>
      <header className='fixed left-0 right-0 top-0 z-50 bg-white'>
        <div className='layout container flex h-20 items-center justify-between px-2'>
          <UnstyledLink href='#home' className='font-bold hover:text-gray-600'>
            <Image
              src={logo}
              width={60}
              height={60}
              alt='Aniah Social Events Logo'
              priority
            />
          </UnstyledLink>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnderlineLink href={href}>{label}</UnderlineLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={'bg-primary-400 h-4'} />
      </header>
    </>
  );
}
