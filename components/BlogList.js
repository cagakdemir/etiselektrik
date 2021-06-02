import React from 'react';
import Link from 'next/link';

export default function BlogList({ blogPosts }) {
  return (
    <div className='px-4 flex flex-col justify-start items-start simpleContainer'>
      {/* Wrapper Start */}
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* Blog Post Start */}
        {blogPosts.map((blogPost) => {
          return (
            <div
              key={blogPost.id}
              className='p-4 mb-4 lg:p-4 lg:m-4 rounded shadow-md border text-secondary'
            >
              <h3 className='font-bold text-sm pb-4'>
                {blogPost.category.toUpperCase()}
              </h3>
              <Link href={`/teknikbilgi/${blogPost.slug}`}>
                <h2 className='font-semibold text-2xl pb-4 text-primary cursor-pointer'>
                  {blogPost.title}
                </h2>
              </Link>
              <div className='pb-4 text-justify'>
                {blogPost.prevFi.substring(0, 200)}...
              </div>
              <div className='flex justify-left'>
                <Link href={`/teknikbilgi/${blogPost.slug}`}>
                  <a className='font-semibold text-primary border cursor-pointer border-primary rounded-xl px-4 py-2 hover:text-primaryDark hover:border-primaryDark'>
                    Devamını Oku
                  </a>
                </Link>
              </div>
            </div>
          );
        })}

        {/* Blog Post End */}
      </div>
      {/* Wrapper End */}
    </div>
  );
}
