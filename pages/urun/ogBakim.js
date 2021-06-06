import React from 'react';
import Layout from '../../components/Layout';

export default function OgBakim() {
  return (
    <Layout
      title='Orta Gerilim Trafo Merkezi Servis ve Bakım'
      description='Orta Gerilim tesislerinizde servis ve bakım. Güç trafosu, hücre, kesici, röle servis, test ve bakımları.'
      keywords='Trafo bakım, Trafo servis, Trafo merkezi, Trafo merkezi bakım, Trafo merkezi servis'
    >
      <div className='flex justify-center items-center simpleContainer'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          ORTA GERİLİM TRAFO VE HÜCRE BAKIM
        </h1>
      </div>

      <div className='flex flex-col justify-start items-start simpleContainer'>
        <p className='text-justify mb-3'>
          Elektrik enerjisi, bir sanayi tesisinin veya ticari bir işletmenin can
          damarıdır. Elektrik enerjisinde yaşanacak kısa süreli kesintiler bile
          tesiste büyük maliyet kayıplarına, termin sürelerinde gecikmelere,
          müşterilerde memnuniyetsizliğe neden olmaktadır. Dolayısıyla elektrik
          enerjisinin sürekliliği bir tesis için çok kritiktir.
        </p>

        <p className='text-justify mb-3'>
          Trafo merkezleri bir tesisin enerji temini merkezidir. Buradaki
          ekipmanlarda yaşanabilecek arızalar uzun süreli enerji kesintilerine
          ve işletme için ciddi zararlara neden olabilir. Bu arızaların önüne
          geçmek için minimum 2 yıl aralıklarla önleyici bakımlarının yapılması
          gerekir. Aynı zamanda yapılan bakımlara rağmen, istemdışı bir arıza
          yaşanması halinde duruma hızlıca müdahele edebilecek güvenli bir
          partnere sahip olmak çok önemlidir.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>Güç trafosu test ve bakımı.</li>
          <li>Hücrelerin test ve bakımı.</li>
          <li>Kesici testleri.</li>
          <li>Röle testleri ve ayarların yapılması.</li>
          <li>BAR24 ünitesinin kontrölü.</li>
          <li>Buşing ve başlıkların kontrolü.</li>
          <li>Güvenlik ekipmanın kontrolü.</li>
        </ul>

        <p className='text-justify mb-3'>
          Orta gerilim bakım ve arıza müdahale konusunda bizle iletişime
          geçebilirsiniz.
        </p>
      </div>
    </Layout>
  );
}
