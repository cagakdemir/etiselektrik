import React from 'react';
import Layout from '../components/Layout';
import DocumentGallery from '../components/DocumentGallery';
import { API_URL } from '../config/index';

export default function Belgeler({ documents }) {
  return (
    <Layout
      title='Etis Elektrik Belgeler ve Sertifikalar'
      hreflangUrl='https://www.etiselektrik.com.tr/belgeler'
      description='Etis Elektrik Sertifikaları: Etispan IEC61439-1 Tip Test, Schneider Yetkili Pano Partnerliği, ISO9001, Yüksek Gerilim İşletme Sorumluluğu, Topraklama Yetki Belgesi.'
      keywords='Etispan, Tip test, ISO9001, SMM, Yüksek Gerilim İşletme Sorumluluğu, Topraklama'
    >
      <div className='flex justify-center items-center'>
        <h1 className='mt-6 text-3xl font-bold text-secondary sm:mt-12 sm:text-4xl'>
          BELGELER
        </h1>
      </div>
      <DocumentGallery documents={documents} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const documentsRes = await fetch(`${API_URL}/belgelers`);
  const documents = await documentsRes.json();

  return {
    props: { documents },
  };
}
