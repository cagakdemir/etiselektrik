import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export default function Urunler() {
  return (
    <Layout
      title='Etis Elektrik Ürünler ve Servisler'
      description=''
      keywords=''
    >
      {/* Text start */}
      <div className='flex justify-center items-center'>
        <h2 className='my-6 text-3xl font-bold text-secondary sm:my-12 sm:text-4xl'>
          ÜRÜNLER VE SERVİSLER
        </h2>
      </div>

      <div className='px-4 flex flex-col justify-start items-start simpleContainer'>
        <p className='text-secondary text-justify mb-4'>
          Alçak gerilim ve orta gerilimle ilgili ihtiyaçlarınıza cevap
          verebilmek için 25 yıllık deneyim ve bilgi birikimine sahip kadromuzla
          çalışmaya devam ediyoruz. Bilgi veya teklif almak istediğiniz ürün ve
          servislerimizle ilgili bizle istediğiniz zaman iletişim
          kurabilirsiniz.
        </p>
      </div>
      {/* Text end */}

      <ProductCard />

      <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
        <h3 className='mb-6 text-2xl font-bold text-primary sm:text-3xl'>
          %100 güvenilirlikle Etis Elektrik her zaman yanınızda!
        </h3>
        <div className='flex items-start'>
          <div>
            <Link href='/iletisim'>
              <a className='btnPrimary'>TEKLİF AL</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
