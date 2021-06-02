import React from 'react';
import Link from 'next/link';
import { API_URL } from '../config/index';

export default function DocumentGallery({ documents }) {
  return (
    <div className='mx-auto pt-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pt-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* Card start*/}
        {documents.map((document) => {
          return (
            <div
              key={document?.id}
              className='mx-16 mb-16 flex flex-col items-center'
            >
              <h3 className='inline-block text-primary text-2xl mb-4'>
                {document?.title}
              </h3>
              <div>
                <Link href={document?.image[0]?.formats?.medium?.url || '#'}>
                  <a target='_blank'>
                    <img
                      className='w-96 cursor-pointer'
                      src={document?.image[0]?.formats?.medium?.url}
                    />
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
        {/* Card end*/}
      </div>
    </div>
  );
}
