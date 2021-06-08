import React from 'react';
import Layout from '../../components/Layout';

export default function AgBakim() {
  return (
    <Layout
      title='Alçak Gerilim Servis ve Bakım'
      hreflangUrl='https://www.etiselektrik.com.tr/agBakim'
      description='Alçak gerilim servis ve bakım. Dokunmaya, arka, yangına karşı önlemler. Termal kamera raporu. Pano, motor, genel tesisat kontrol ve bakımı'
      keywords='Elektrik bakım, termal kamera, Ark flash, Ark, Topraklama'
    >
      <div className='flex justify-center items-center simpleContainer'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          ALÇAK GERİLİM SERVİS VE BAKIM
        </h1>
      </div>

      <div className='flex flex-col justify-start items-start simpleContainer'>
        <p className='text-justify mb-3'>
          Alçak gerilim tesislerinizde cana ve mala gelecek zararlardan ve
          kesintilerden sakınmak için rutin olarak bakım yaptırmak gerekir.
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>
            Dokunmaya, ark flashına ve yangına karşı alınan güvenlik
            önlemlerinin kontrolü.
          </li>
          <li>Termal kamera ile tesinin kontrol edilip raporlanması.</li>
          <li>Elektrik panolarının ve şalt malzemenin kontrolü ve bakımı.</li>
          <li>Elektrik motorlarının kontrolü ve bakımı.</li>
          <li>UPS'lerin kontrolü ve bakımı.</li>
          <li>Topraklama ölçümü ve topraklama tesisatının kontrolü.</li>
          <li>Dış ve iç yıldırımlıkların kontrolü.</li>
          <li>Kaçak akımların kontrolü.</li>
          <li>Aydınlık seviyesinin ve armatürlerin genel kontrolü.</li>
          <li>Elektrik tesisat uygunluk raporu.</li>
        </ul>

        <p className='text-justify mb-3'>
          Alçak gerilim bakım ve arıza müdahale konusunda bizle iletişime
          geçebilirsiniz.
        </p>
      </div>
    </Layout>
  );
}
