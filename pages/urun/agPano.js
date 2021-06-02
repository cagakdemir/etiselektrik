import React from 'react';
import Layout from '../../components/Layout';

export default function AgPano() {
  return (
    <Layout
      title='Alçak Gerilim Dağıtım Panoları - Etispan, Prisma, EAE'
      description='Alçak gerilim panoları imalatı. Ana dağıtım - Tali dağıtım, MCC - DDC, Kompanzasyon Panoları. ETİSPAN, SCHNEIDER, LOKAL çözümler.'
      keywords='Etispan, Etis Pano, Schneider, Prisma, Eae, Ekabin'
    >
      <div className='flex justify-center items-center'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          ALÇAK GERİLİM PANO
        </h1>
      </div>

      <div className='flex flex-col justify-start items-start simpleContainer'>
        {/* ETİSPAN PANO START */}
        <div className='flex justify-center items-center'>
          <h2 className='mb-2 text-xl font-bold text-secondary sm:mb-4 sm:text-2xl'>
            ETİSPAN
          </h2>
        </div>

        <p className='text-justify mb-3'>
          Etispan, müşterilerimizin her segmentteki alçak gerilim pano
          ihtiyacını karşılamak için çıkarıp geliştirmeye devam ettiği pano
          serisidir. 6300A’e kadar IEC 61439-1&2 standartlarına uyumlu tip
          testli panolardır. Belgelendirme işlemleri TÜRKAK tarafından akredite
          edilmiş labaratuvar ve belgelendirme kuruluşu tarafından yapılmıştır.
        </p>

        <p className='text-justify mb-3'>
          Etispan panoların elektromontajları, tip teste gönderilen panoların
          tasarım ve uygulama kurallarına uygun şekilde yapılır. Sevkiyat
          öncesi, test ekibi tarafından gerekli rutin test prosedürleri
          uygulanır.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>
            6300A’e kadar IEC 61439-1&2 standartlarına uyumlu tip testli dikili
            tip ve duvar tipi panolar
          </li>
          <li>Icw 100kA rms/1s kısa devre dayanımı.</li>
          <li>Form2b-Form3b-Form4b bölümlendirme seçenekleri</li>
          <li>IP41-IP55 koruma sınıfı, IK10 darbe dayanımı</li>
        </ul>
        {/* ETİSPAN PANO END */}

        {/* SCHNEIDER PANO START */}

        <div className='flex justify-center items-center'>
          <h2 className='mt-4 mb-2 text-xl font-bold text-secondary sm:mt-8 sm:mb-4 sm:text-2xl'>
            SCHNEIDER PRISMA
          </h2>
        </div>

        <p className='text-justify mb-3'>
          Prisma, Schneider’ın müşterilerinin birçok segmentteki alçak gerilim
          pano ihtiyacını karşılamak için çıkarıp geliştirmeye devam ettiği pano
          serisidir. 4000A’e kadar IEC 61439-1&2 standartlarına uyumlu tip
          testli panolardır.{' '}
        </p>

        <p className='text-justify mb-3'>
          Schneider Prisma panolar sadece Etis Elektrik gibi yetkili Schneider
          pano partnerleri tarafından yapılabilir. Panoların elektromontajları,
          Schneider Prisma tasarım ve uygulama kurallarına uygun şekilde
          yapılır. Sevkiyat öncesi, test ekibi tarafından Schneider tarafından
          tavsiye edilen rutin test prosedürü uygulanır.
        </p>

        <p className='text-justify mb-3'>
          Schneider Prisma panolarda, panoyu yapan partnerle birlikte üretici
          Schneider’ın da desteği ve onayı alınmış olur. Projelendirme
          aşamasından teklif sürecine, imalattan satış sonrası desteğe kadar hem
          Etis Elektrik’in hem de Schneider’ın desteğini istediğiniz zaman
          alabilirsiniz.
        </p>

        <p>Prisma ürün grubu ikiye ayrılır:</p>

        <div className='flex justify-center items-center'>
          <h3 className='mt-4 mb-2 text-lg font-bold text-secondary sm:mt-8 sm:mb-4 sm:text-xl'>
            Prisma P
          </h3>
        </div>

        <p className='text-justify mb-3'>
          Prisma P, Schneider Prisma’nın 4000A’e kadar dikili tip pano
          çözümüdür. 300-400-650-800mm genişlik ve 400-600-800-1000mm derinlik
          seçenekleri ile her türlü projeye uygun olarak çözümler
          üretilebilmektedir.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>
            4000A’e kadar IEC 61439-1&2 standartlarına uyumlu tip testli dikili
            tip panolar
          </li>
          <li>Icw 100kA rms/1s kısa devre dayanımı.</li>
          <li>Form2b-Form3b-Form4b bölümlendirme seçenekleri</li>
          <li>IP30-IP31-IP55 koruma sınıfı, IK08-IK10 darbe dayanımı</li>
          <li>
            IEC60068-3-3 standardına göre 2.5g’ye kadar yapılmış sismik testler
          </li>
        </ul>

        <div className='flex justify-center items-center'>
          <h3 className='mt-4 mb-2 text-lg font-bold text-secondary sm:mt-8 sm:mb-4 sm:text-xl'>
            Prisma G
          </h3>
        </div>

        <p className='text-justify mb-3'>
          Prisma G, Schneider Prisma’nın 630A’e kadar dikili ve duvar tipi pano
          çözümüdür. 330-480-630-780-930-1080-1230-1380-1530-1680-1830 yükseklik
          seçenekleri ile 630A kadar her türlü projeye uygun olarak çözümler
          üretilebilmektedir.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>
            630A’e kadar IEC 61439-1&2 standartlarına uyumlu tip testli dikili
            tip ve duvar tipi panolar
          </li>
          <li>Isc 50kA kısa devre dayanımı.</li>
          <li>IP30-IP41-IP43-IP55 koruma sınıfı, IK08-IK10 darbe dayanımı</li>
          <li>
            IEC60068-3-3 standardına göre 2.5g’ye kadar yapılmış sismik testler
          </li>
        </ul>
        {/* SCHNEIDER PANO END */}

        {/* LOKAL PANO START */}
        <div className='flex justify-center items-center'>
          <h2 className='mt-4 mb-2 text-xl font-bold text-secondary sm:mt-8 sm:mb-4 sm:text-2xl'>
            LOKAL ÇÖZÜMLER
          </h2>
        </div>

        <p className='text-justify mb-3'>
          25 yıldır alçak gerilim panoları sektörünün içindeyiz. Bu süreç
          içerisinde EAE, TEMPA, ÇETİNKAYA, YAVUZ gibi bir çok yerli sac
          üreticisi ile çalıştık. Projelerde ve marka listelerinde özel istenen
          markalar olur ise bunlar ile de çözümler üretebiliriz. İmalatlarımızı
          bu markaların tasarım kurallarına göre yapıyoruz.
        </p>

        <p className='text-justify mb-3'>
          Hızlı imalat yapabilmek adına EAE gibi bazı markalar ile standart
          ölçüler için stok da bulunduruyoruz. Projelerinizde marka bağımsız,
          hızlı ve esnek çözümler için bizlerle iletişime geçebilirsiniz.
        </p>
        {/* LOKAL PANO END */}
      </div>
    </Layout>
  );
}
