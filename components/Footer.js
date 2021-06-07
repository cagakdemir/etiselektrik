import React from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16'>
        <div className='grid gap-10 row-gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='sm:col-span-2 lg:col-span-1'>
            <div className='inline-flex items-center'>
              <Link href='/'>
                <img
                  className='h-12 cursor-pointer'
                  src='../images/logo.jpg'
                  alt='Logo'
                />
              </Link>
            </div>

            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-secondary'>
                25 yılı aşkın süre deneyime sahip kadrosuyla Etis Elektrik her
                zaman yanınızda.
              </p>
              <p className='mt-4 text-sm text-secondary'>
                Telefon ya da email ile 7/24 iletişim kurabilirsiniz.
              </p>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <div className='flex'>
              <FaPhoneAlt className='mr-1 w-5 h-5 text-secondary' />
              <span>(0212)5493725</span>
            </div>
            <div className='flex'>
              <FaMobileAlt className='mr-1 w-5 h-5 text-secondary' />
              <span>(0530)5754381</span>
            </div>
            <div className='flex'>
              <FaEnvelope className='mr-1 w-5 h-5 text-secondary' />
              <span>etis@etiselektrik.com.tr</span>
            </div>
            <div className='flex'>
              <div>
                <FaMapMarkerAlt className='mr-1 w-5 h-5 text-secondary' />
              </div>
              <span>
                İkitelli Organize Sanayi Bölgesi İPKAS Sanayi Sitesi 2. Blok
                No:33-34-35-36 Başakşehir İstanbul
              </span>
            </div>
          </div>
          <div className='flex just'>
            <ul>
              <li>
                <Link href='/'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Anasayfa
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/hakkimizda'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Hakkımızda
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/urunler'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Ürünler
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/belgeler'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Belgeler
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/referanslar'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Referanslar
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/iletisim'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    İletişim
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/kataloglar'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Kataloglar
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/teknikbilgi'>
                  <a className='text-primary font-semibold cursor-pointer hover:text-primaryDark'>
                    Teknik Bilgi
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
          <p className='text-sm text-gray-600'>
            © Copyright 2021 Etis Elektrik All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
