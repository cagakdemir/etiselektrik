import React from 'react';
import Layout from '../../components/Layout';

export default function OgTaahhut() {
  return (
    <Layout
      title='Orta Gerilim Trafo Merkezi Taahhüt'
      description='Orta gerilim trafo merkezlerinin enerji izninin alınması, projelendirilmesi, tedarik ve montajı, kabul işlemleri. Yüksek gerilim işletme sorumluluğu.'
      keywords='Trafo merkezleri, Enerji nakil hatları, Yüksek gerilim işletme sorumluluğu, Enerji izni, enerji müsade yazısı,'
    >
      <div className='flex justify-center items-center'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          ORTA GERİLİM TAAHHÜT
        </h1>
      </div>

      <div className='flex flex-col justify-start items-start simpleContainer'>
        <p className='text-justify mb-3'>
          Belli bir gücün üzerindeki tesislerde dağıtım şirketleri enerji
          teminini alçak gerilimden sağlayamamaktadır. Bu durumlarda enerji
          temini ancak orta gerilimden yeraltı kablosu ya da havai hat ile
          sağlanmaktadır. Orta gerilim trafo merkezleri ve şalt tesislerinin
          projelendirilmesi, tesisi, montajı ve kabul işlemleri alçak gerilime
          göre oldukça kapsamlı bir süreçtir. Planladığınız yatırımların
          gerçekleşmesi için gerekli enerjinin teminini hızlı ve sorunsuz bir
          şekilde çözümlemek istiyorsanız bizle iletişim kurabilirsiniz.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>Enerji izninin alınması.</li>
          <li>Tesisin projelendirilip, onaylı projelerin çıkarılması.</li>
          <li>Trafo merkezleri tesis ve montajı.</li>
          <li>Şalt tesisleri teis ve montajı.</li>
          <li>Enerji nakil hatları.</li>
          <li>Orta gerilim kablo tranşe, muf ve başlık yapımı.</li>
          <li>Yüksek gerilim işletme sorumluluğu</li>
        </ul>
      </div>
    </Layout>
  );
}
