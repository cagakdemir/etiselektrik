import React from 'react';

export default function Statistics() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid grid-cols-2 row-gap-8 md:grid-cols-4'>
        <div className='text-center'>
          <h6 className='text-3xl font-bold text-primary'>8</h6>
          <p className='font-bold text-secondary'>Ülke</p>
        </div>
        <div className='text-center'>
          <h6 className='text-3xl font-bold text-primary'>100+</h6>
          <p className='font-bold text-secondary'>Müşteri</p>
        </div>
        <div className='text-center'>
          <h6 className='text-3xl font-bold text-primary'>1000+</h6>
          <p className='font-bold text-secondary'>Bitirilmiş İş</p>
        </div>
        <div className='text-center'>
          <h6 className='text-3xl font-bold text-primary'>25 Yıl</h6>
          <p className='font-bold text-secondary'>Deneyim</p>
        </div>
      </div>
    </div>
  );
}
