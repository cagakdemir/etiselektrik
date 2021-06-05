import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

import tawkTo from 'tawkto-react';

export default function Layout({ title, keywords, description, children }) {
  const tawkToPropertyId = '60bb5650dd60a20abbe4b843';
  const tawkToKey = '710cfa9bf0a0507bbe378278e101605005699f88';

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Etis Elektrik - Schneider Elektrik Alçak Gerilim Pano Partneri',
  description:
    'Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik bakım konularında ihtiyaçlarınıza uygun çözümler',
  keywords:
    'Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik Bakım',
};
