import React from 'react';
import Layout from '../components/Layout';

export default function PageNotFound() {
  return (
    <Layout title='Sayfa bulunamadı'>
      <div className='flex justify-center items-center'>
        <h1 className='my-6 text-2xl font-bold text-secondary sm:my-12 sm:text-3xl'>
          Sayfa bulunamadı...
        </h1>
      </div>
    </Layout>
  );
}
