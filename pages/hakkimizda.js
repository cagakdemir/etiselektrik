import React from 'react';
import Layout from '../components/Layout';
import CheckList from '../components/Checklist';

const products = [
  'Alçak Gerilim Pano',
  'Orta Gerilim Taahhüt',
  'OG Trafo & Hücre Bakım ve Servis',
  'Enerji Kalitesi Çözümleri',
  'Kompanzasyon Çözümleri',
];
const documents = [
  'Etispan IEC61439-1 Tip Test',
  'Schneider Yetkili Panocu',
  'ISO9001',
  'SMM Belgesi',
  'Yüksek Gerilim İşletme Sorumluluğu',
  'Topraklama Yetki Belgesi',
];
const whyUs = [
  'Hızlı ve kaliteli imalat',
  'Satış sonrası destek',
  'Hızlı geri dönüş',
  '25 yıllık deneyim',
  '15 yıllık Schneider partnerliği',
  'İhtiyaçlarınıza uygun esnek çözümler',
];

export default function Hakkimizda() {
  return (
    <Layout
      title='Etis Elektrik Hakkımızda'
      description='Etis Elektrik hızlı ve kaliteli imattıyla, deneyimli kadrosuyla yanınızda'
      keywords='Etispan, Tip Test, SMM, Yüksek Gerilim İşletme Sorumluluğu'
    >
      {/* Text start */}
      <div className='flex justify-center items-center'>
        <h1 className='my-6 text-3xl font-bold text-secondary sm:my-12 sm:text-4xl'>
          HAKKIMIZDA
        </h1>
      </div>

      <div className='px-4 flex flex-col justify-start items-start simpleContainer'>
        <p className='text-secondary text-justify mb-4'>
          Etis Elektrik İnşaat Taahhüt San. ve Tic. Ltd. Şti. 1995 yılında
          kurulan ETS Elektrik Makina İnşaat Taahhüt San. ve Tic. Ltd. Şti.’nin
          bilgi ve tecrübe birikimini de bünyesine katarak 25 yılı aşkın süredir
          sektörde faaliyetlerine devam etmektedir.
        </p>
        <p className='text-secondary text-justify mb-4'>
          Kısa süre içinde Schneider Elektrik gibi büyük bir dünya markasının
          çözüm ortağı olmuştur. Bununla beraber yurt içi ve yurt dışı elektrik
          pazarında saygın bir yer edinmiştir.
        </p>
        <p className='text-secondary text-justify mb-4'>
          Kurulduğu günden beri kaliteli malzeme, eksiksiz ve sürekli hizmet
          anlayışıyla müşterilerine hizmet veren firmamız, konusunda uzmanlaşmış
          mühendis ve teknisyen kadrosu ile yaptığı işlerde ekonomik olduğu
          kadar güvenilir de hizmetler sunmaktadır. Bizler uluslararası
          standartlarda malzemeler kullanarak, ürettiğimiz çözümlerle;
          KAZANIRKEN KAZANDIRAN bir kuruluş olmaktan mutluyuz. Mutluluğumuzu da
          sizlerle paylaşmak istiyoruz.
        </p>
        <h1 className='mb-4 text-xl font-bold text-secondary sm:text-2x'>
          MİSYONUMUZ
        </h1>
        <p className='text-secondary text-justify mb-4'>
          Etis Elektrik; faaliyet yürüttüğü konut, ticari ve endüstriyel
          binalar, sanayi, enerji ve altyapı pazarları için kapsamlı, yenilikçi
          ve farklı çözümler üretebilmek amacıyla her yönde sınırlarını
          zorlayarak “güç ve kontrol” alanında Türkiye’nin en önde gelen
          kuruluşu olmayı hedefliyor.
        </p>
        <h1 className='mb-4 text-xl font-bold text-secondary sm:text-2x'>
          VİZYONUMUZ
        </h1>
        <p className='text-secondary text-justify mb-4'>
          Vizyonumuz; verdiğimiz hizmetlerle ortak çalıştığımız kişi ve
          kuruluşların güvenilirliğini sürekli kılmak, kendi markasını
          oluşturmuş KAZANIRKEN KAZANDIRMAYI hedefleyen bir firma olmaktır.
        </p>
      </div>
      {/* Text end */}

      {/* Products start */}
      <div className='simpleContainer my-6 sm:my-12'>
        <h2 className='mb-4 text-2xl font-bold text-secondary sm:text-3xl'>
          ÜRÜNLER VE SERVİSLER
        </h2>
        <CheckList items={products} />
      </div>
      {/* Products end */}

      {/* Documents start */}
      <div className='simpleContainer my-6 sm:my-12'>
        <h2 className='mb-4 text-2xl font-bold text-secondary sm:text-3xl'>
          BELGELER
        </h2>
        <CheckList items={documents} />
      </div>
      {/* Documents end */}

      {/* WhyUs start */}
      <div className='simpleContainer my-6 sm:my-12'>
        <h2 className='mb-4 text-2xl font-bold text-secondary sm:text-3xl'>
          NEDEN BİZİ SEÇMELİSİNİZ?
        </h2>
        <CheckList items={whyUs} />
      </div>
      {/* WhyUs end */}
    </Layout>
  );
}
