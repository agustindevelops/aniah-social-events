import { useState, useRef } from 'react';
import { LINKS } from '@/components/layout/Header/constants';
import UnderlineLink from '@/components/links/UnderlineLink';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import { useClickOutside } from '@react-hooks-library/core';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className='relative sm:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='focus:border-none focus:outline-none'
      >
        {isOpen ? <AiOutlineClose size={32} /> : <RxHamburgerMenu size={32} />}
      </button>
      {isOpen && (
        <div
          className='outline-brown absolute right-0 w-48 rounded-md bg-white p-2 shadow-xl outline outline-2'
          ref={ref}
        >
          <ul className='flex flex-col gap-4'>
            {LINKS.map(({ href, label }) => (
              <UnderlineLink
                href={href}
                key={`${href}${label}`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <li>{label} </li>
              </UnderlineLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mobile;
