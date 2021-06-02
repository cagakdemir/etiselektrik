import React from 'react';
import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';
import { API_URL } from '../config/index';

export default function CatalogList({ catalogs }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {catalogs.map((catalog, index) => {
        const docLink = catalog?.link
          ? catalog?.link
          : catalog?.file[0]?.url

        return (
          <Link key={index} href={docLink}>
            <a target='_blank'>
              <div className=' mt-2 cursor-pointer'>
                <div className='flex'>
                  <div>
                    <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                  </div>
                  <span className='text-secondary'>{catalog?.title}</span>
                </div>
                <span className='text-secondary text-sm pl-7'>
                  {catalog?.date}
                </span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );

  return catalogs.map((catalog, index) => {
    return (
      <Link href={`${catalog?.link}`} key={index}>
        <a target='_blank'>
          <div className='block mt-2 cursor-pointer'>
            <div className='flex'>
              <div>
                <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
              </div>
              <span className='text-secondary'>{catalog?.title}</span>
            </div>
            <span className='text-secondary text-sm pl-7'>{catalog?.date}</span>
          </div>
        </a>
      </Link>
    );
  });
}
