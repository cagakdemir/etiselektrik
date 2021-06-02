import React from 'react';

export default function WhyUs() {
  return (
    <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-40 lg:px-8 lg:pt-20'>
      <div className='flex justify-center'>
        <h2 className='inline-block mb-8 text-2xl font-bold text-secondary text-center'>
          NEDEN BİZİ SEÇMELİSİNİZ?
        </h2>
      </div>

      <div className='grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Block-1 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/manufacturingIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            Hızlı ve kaliteli imalat
          </h6>
          {/* <p className='mb-3 text-sm text-secondary'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium rem aperiam.
          </p> */}
        </div>
        {/* Block-1 end */}
        {/* Block-2 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/customerSupportIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            Satış sonrası destek
          </h6>
        </div>
        {/* Block-2 end */}
        {/* Block-3 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/fastIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            Hızlı geri dönüş
          </h6>
        </div>
        {/* Block-3 end */}
        {/* Block-4 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/experienceIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            25 yıllık deneyim
          </h6>
        </div>
        {/* Block-4 end */}
        {/* Block-5 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/flexibleIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            İhtiyaçlarınıza uygun esnek çözümler
          </h6>
        </div>
        {/* Block-5 end */}

        {/* Block-6 */}
        <div>
          <div className='flex items-center justify-center w-10 h-10 mb-4 rounded-full'>
            <img
              className='w-8 h-8 text-deep-purple-accent-400'
              src='icons/partnershipIcon.svg'
              alt='İmalat'
            />
          </div>
          <h6 className='mb-2 font-bold leading-5 text-primary'>
            15 yıllık Schneider partnerliği
          </h6>
        </div>
        {/* Block-6 end */}
      </div>
    </div>
  );
}
