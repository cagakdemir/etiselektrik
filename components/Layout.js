import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({
  title,
  hreflangUrl,
  keywords,
  description,
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='alternate' hreflang='tr-TR' href={hreflangUrl} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60bb5650dd60a20abbe4b843/1f7dsib4d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`,
          }}
        />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'ETİS ELEKTRİK - AG/OG Elektrik Çözüm Partneriniz',
  hreflangUrl: 'https://www.etiselektrik.com.tr',
  description:
    'Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik bakım konularında ihtiyaçlarınıza uygun çözümler',
  keywords:
    'Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik Bakım',
};
