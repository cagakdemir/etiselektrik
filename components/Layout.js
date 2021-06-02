import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

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