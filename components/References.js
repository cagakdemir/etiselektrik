import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
// From Has Navigation Demo
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation, Pagination]);

export default function References({ references }) {
  // console.log(references.length);
  // console.log(references);

  const items = [];
  for (let i = 0; i < references.length; i++) {
    if (i % 10 === 0) {
      items.push(
        <SwiperSlide key={references[i]?.id} className='px-10 sm:px-16 pb-8'>
          {/* Item1 */}
          <div className='flex mb-2'>
            <div>
              {references[i] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i]?.title} {references[i]?.year}
            </div>
          </div>
          {/* Item2 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 1] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 1]?.title} {references[i + 1]?.year}
            </div>
          </div>
          {/* Item3 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 2] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 2]?.title} {references[i + 2]?.year}
            </div>
          </div>
          {/* Item4 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 3] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 3]?.title} {references[i + 3]?.year}
            </div>
          </div>
          {/* Item5 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 4] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 4]?.title} {references[i + 4]?.year}
            </div>
          </div>
          {/* Item6 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 5] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 5]?.title} {references[i + 5]?.year}
            </div>
          </div>
          {/* Item7 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 6] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 6]?.title} {references[i + 6]?.year}
            </div>
          </div>
          {/* Item8 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 7] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 7]?.title} {references[i + 7]?.year}
            </div>
          </div>
          {/* Item9 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 8] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 8]?.title} {references[i + 8]?.year}
            </div>
          </div>
          {/* Item10 */}
          <div className='flex mb-2'>
            <div>
              {references[i + 9] && (
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              )}
            </div>
            <div className='text-justify'>
              {references[i + 9]?.title} {references[i + 9]?.year}
            </div>
          </div>
        </SwiperSlide>
      );
    }
  }

  return (
    <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
      <div className='flex justify-center'>
        <h2 className='inline-block mb-8 text-2xl font-bold text-secondary text-center'>
          REFERANSLAR
        </h2>
      </div>

      <Swiper
        cssMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        style={{
          '--swiper-navigation-color': '#00923F',
          '--swiper-pagination-color': '#00923F',
        }}
      >
        {items}
      </Swiper>
    </div>
  );
}
