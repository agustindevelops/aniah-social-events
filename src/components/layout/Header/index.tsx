import Image from 'next/image';
import logo from 'public/images/aniah-social-events-logo.png';
import UnstyledLink from '@/components/links/UnstyledLink';
import Mobile from '@/components/layout/Header/Mobile';
import Desktop from '@/components/layout/Header/Desktop';

export default function Header() {
  return (
    <header className='bg-cream text-brown-500 fixed left-0 right-0 top-0 z-50'>
      <div className='layout container flex h-20 items-center justify-between px-2'>
        <UnstyledLink href='/#home' className='hover:text-peach-600 font-bold'>
          <Image
            src={logo}
            width={60}
            height={60}
            alt='Aniah Social Events Logo'
            priority
          />
        </UnstyledLink>
        <nav>
          <Mobile />
          <Desktop />
        </nav>
      </div>
      <div className='bg-peach-200 h-4' />
    </header>
  );
}
