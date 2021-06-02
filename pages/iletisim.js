import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function Iletisim() {
  return (
    <Layout
      title='Etis Elektrik - İletişim ve Adres'
      description='Etis Elektrik iletişim, adres ve konum bilgileri.'
      keywords='Etis Elektrik adres, Etis Elektrik konum'
    >
      <Contact />
    </Layout>
  );
}
