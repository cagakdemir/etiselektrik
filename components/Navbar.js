import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOn, setIsMenuOn] = useState(false);

  const handleToggle = () => {
    setIsMenuOn(!isMenuOn);
  };

  return (
    <div className='max-w-screen-xl mt-2 mx-auto'>
      {/* First row */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='ml-2'>
          <Link href='/'>
            <img
              className='h-12 cursor-pointer'
              src='../images/logo.jpg'
              alt='Logo'
            />
          </Link>
        </div>
        {/* Logo End */}

        {/* First row right section */}
        <div className='flex md:mr-2'>
          {/* Phone-Email */}
          <div className='hidden md:flex items-center'>
            <FaPhoneAlt className='mr-1 w-5 h-5 text-secondary' />
            <span className='text-sm font-semibold'>(0212)5493725</span>
          </div>
          <div className='hidden md:flex items-center ml-4 md:ml-16'>
            <FaEnvelope className='mr-1 w-5 h-5 text-secondary' />
            <span className='text-sm font-semibold'>
              etis@etiselektrik.com.tr
            </span>
          </div>
          {/* Phone-Email End */}

          {/* Teklif Al*/}
          <div>
            <Link href='/iletisim'>
              <a className='btnPrimary ml-4 md:ml-16'>TEKLİF AL</a>
            </Link>
          </div>
          {/* Teklif Al End*/}
        </div>
        {/* First row right section end */}

        {/* Hamburger Menu */}
        <div
          className='flex items-center md:hidden mr-2'
          onClick={handleToggle}
        >
          <span className='text-small font-semibold text-primary mr-1'>
            MENU
          </span>
          <svg
            className='w-7 h-7 text-secondary'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </div>
        {/* Hamburger Menu End */}
      </div>
      {/* First row end */}

      <hr className='mt-2 border-1 border-secondary' />

      {/* Second row */}
      <div
        className={`pr-10 bg-primary h-0 transition-all ease-in-out duration-500 md:transition-none md:h-auto md:py-2 ${
          isMenuOn ? 'h-52 py-2' : ''
        }`}
      >
        <ul
          className={`flex flex-col items-end md:flex-row md:justify-center ${
            isMenuOn ? '' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link href='/'>
              <a className='headerLink'>Anasayfa</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/hakkimizda'>
              <a className='headerLink'>Hakkımızda</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/urunler'>
              <a className='headerLink'>Ürünler</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/belgeler'>
              <a className='headerLink'>Belgeler</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/referanslar'>
              <a className='headerLink'>Referanslar</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/iletisim'>
              <a className='headerLink'>İletişim</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/kataloglar'>
              <a className='headerLink'>Kataloglar</a>
            </Link>
          </li>
          <li className='hidden md:inline-block mx-3 text-secondary'>|</li>
          <li>
            <Link href='/teknikbilgi'>
              <a className='headerLink'>Teknik Bilgi</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Second row end */}
    </div>
  );
}
