import React from 'react';
import Layout from '../../components/Layout';

export default function Kompanzasyon() {
  return (
    <Layout
      title='Kompanzasyon Çözümleri, Kompanzasyon Bakım, Reaktif Ceza Önlem'
      description='Reaktif ceza önlemleri. Kompanzasyon panoları. Kompanzasyon bakım.'
      keywords='Reaktif ceza, Endüktif ceza, Kapasitif ceza, Kompanzasyon, Kompanzasyon bakım'
    >
      <div className='flex justify-center items-center'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          KOMPANZASYON
        </h1>
      </div>

      <div className='px-4 flex flex-col justify-start items-start simpleContainer'>
        <p className='text-justify mb-3'>
          Elektrikle beslenen yüklerin çoğu şebekeden aktif güç çekerken aynı
          zamanda reaktif güç de çekerler. Bu çekilen reaktif enerji belli
          sınırların üzerinde olursa, elektrik faturamıza reaktif ceza olarak
          yansır. Reaktif ceza, endüktif reaktif enerjiden kaynaklanabileceği
          gibi kapasitif reaktif enerjiden de kaynaklanabilir.
        </p>

        <p className='text-justify'>50kVA altında olan tüketiciler için:</p>
        <ul className='list-disc ml-8 mb-3'>
          <li>(endüktif reaktif enerji) / (aktif enerji) > %33</li>
          <li>(kapasitif reaktif enerji) / (aktif enerji) > %20</li>
        </ul>

        <p>50kVA üstünde olan tüketiciler için:</p>
        <ul className='list-disc ml-8 mb-3'>
          <li>(endüktif reaktif enerji) / (aktif enerji) > %20</li>
          <li>(kapasitif reaktif enerji) / (aktif enerji) > %15</li>
        </ul>

        <p className='text-justify mb-3'>
          olması durumunda, tüketicinin fatura tutarına reaktif ceza bedeli
          eklenecektir. Bu cezalardan sakınmak için tesiste kompanzasyon panosu
          yapılması ve reaktif enerji tüketiminin takip edilmesi gerekir. Ayrıca
          kompanzasyon panosunda yaşanabilecek arızaların önüne geçebilmek için
          minimum 2 yılda bir panonun bakım ve kontrolü yapılmalıdır.
        </p>

        <p className='text-justify'>Bu konuda sunduğumuz hizmetler:</p>
        <ul className='list-disc ml-8 mb-3'>
          <li>
            Yapılacak bakım sözleşmesi ile sorumluluğun bizim tarafımızdan
            üstlenilmesi. Olası cezanın bizim tarafımızdan ödenmesi.
          </li>
          <li>Kompanzasyon panolarının kontrolü ve bakımı.</li>
          <li>
            Reaktif enerji tüketiminin internet üzerinden izlenerek ceza
            sınırları aşılmadan hızlıca müdahale olanağı.
          </li>
          <li>
            SVC kompanzasyon çözümleriyle hem endüktif, hem de kapasitif
            kompanzasyon yapılması.
          </li>
          <li>
            Harmonik oranı yüksek tesislerde yapılacak ölçümlerle harmonik
            filtreli kompanzasyon.
          </li>
        </ul>

        <p className='text-justify mb-3'>
          Bir daha reaktif ceza ile karşılaşmak istemiyorsanız bizle iletişime
          geçebilirsiniz.
        </p>
      </div>
    </Layout>
  );
}
