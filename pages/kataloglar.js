import React from 'react';
import Layout from '../components/Layout';
import CatalogList from '../components/CatalogList';
import { API_URL } from '../config/index';

export default function Kataloglar({ catalogs }) {
  return (
    <Layout
      title='Schneider Fiyat Listeleri ve Kataloglar'
      hreflangUrl='https://www.etiselektrik.com.tr/kataloglar'
      description='Sık kullanılan Schneider güncel fiyat listeleri ve kataloglara buradan ulabilirsiniz.'
      keywords='Schneider Fiyat Listesi, Schneider Katalog'
    >
      <div className='simpleContainer my-6 sm:my-12'>
        <CatalogList catalogs={catalogs} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const catalogRes = await fetch(`${API_URL}/kataloglars`);
  const catalogs = await catalogRes.json();
  return {
    props: { catalogs },
  };
}
