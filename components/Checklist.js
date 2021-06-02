import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Checklist({ items = [] }) {
  return items.map((item, index) => {
    return (
      <div key={index} className='block'>
        <div className='flex mb-2'>
          <div>
            <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
          </div>
          <span className='text-secondary'>{item}</span>
        </div>
      </div>
    );
  });
}
