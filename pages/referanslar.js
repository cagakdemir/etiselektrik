import React from 'react';
import Layout from '../components/Layout';
import References from '../components/References';
import Statistics from '../components/Statistics';
import { API_URL } from '../config/index';

export default function Referanslar({ references }) {
  return (
    <Layout
      title='Etis Elektrik Referanslar'
      description='Etis Elektrik AG dağıtım panoları, OG Taahhüt, OG/AG Bakım, Kompanzasyon Referanslar'
      keywords='Elektrik Pano, Referans'
    >
      <References references={references} />
      <Statistics />
    </Layout>
  );
}

export async function getServerSideProps() {
  const referencesRes = await fetch(`${API_URL}/referanslars?_sort=year:DESC`);
  const references = await referencesRes.json();

  return {
    props: { references },
  };
}
