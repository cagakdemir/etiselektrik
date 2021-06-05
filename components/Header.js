import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6'>
            <h1 className='max-w-lg mb-6 text-3xl font-bold text-primary sm:text-4xl'>
              ETİS ELEKTRİK
              <span className='inline-block text-primary text-2xl sm:text-3xl'>
                AG/OG Elektrik Çözüm Partneriniz
              </span>
            </h1>
            <p className='text-base text-secondary md:text-lg'>
              Alçak Gerilim - Orta Gerilim pano, otomasyon, taahhüt, servis,
              bakım, kompanzasyon, enerji kalitesi konularında her türlü
              ihtiyacınızı karşılamaya hazırız.
            </p>
          </div>
          <div className='flex items-start'>
            <div>
              <Link href='/iletisim'>
                <a className='btnPrimary'>TEKLİF AL</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <img
            className='object-contain w-full h-56 rounded sm:h-96'
            src='images/prismap.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
