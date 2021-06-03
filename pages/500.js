import React from 'react';
import Layout from '../components/Layout';

export default function Custom500() {
    return (
        <Layout title='Sayfa hatası'>
            <div className='flex justify-center items-center'>
                <h1 className='my-6 text-xl font-bold text-secondary sm:my-12 sm:text-2xl'>
                    Sayfada bir hata oluştu. Sayfayı kapatıp birkaç saniye sonra bir daha siteye girişi deneyin lütfen...
                </h1>
            </div>
        </Layout>
    );
}
