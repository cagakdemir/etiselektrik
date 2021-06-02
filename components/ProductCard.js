import React from 'react';
import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function ProductCard() {
  return (
    <div className='mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:pt-20'>
      <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        {/* Card1 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/alcak-gerilim-pano.jpg'
            className='object-contain w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/agPano'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  Alçak Gerilim Pano
                </a>
              </Link>
            </div>
            <p className='text-secondary text-justify mb-2'>
              Projelerinizdeki ihtiyacınıza göre aşağıdaki markalarla çözümler
              üretiyoruz:
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Yetkili partneri olduğumuz SCHEIDER PRISMA.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Kendi markamız tip testli ETİSPAN.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                EAE, YAVUZ, ÇETİNKAYA gibi yerli üretim markalar.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/agPano'>
                <a className='btnSecondary'>Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card1 End */}

        {/* Card2 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/orta-gerilim-taahhut.jpg'
            className='object-contain w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/ogTaahhut'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  Orta Gerilim Taahhüt
                </a>
              </Link>
            </div>
            <p className='mb-2 text-secondary text-justify'>
              Yeni yatırımlarınızda orta gerilimden enerji temini için projenin
              başından sonuna kadar sizleyiz:
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Enerji izninin alınması.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Tesisin projelendirilip, onaylı projelerin çıkarılması.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Trafo merkezleri tesis ve montajı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Şalt tesisleri teis ve montajı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Enerji nakil hatları.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Orta gerilim kablo tranşe, muf ve başlık yapımı.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/ogTaahhut'>
                <a className='btnSecondary'>Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card2 End */}

        {/* Card 3 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/og-trafo-bakim.jpg'
            className='object-contain w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/ogBakim'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  OG Trafo & Hücre Bakım
                </a>
              </Link>
            </div>
            <p className='mb-2 text-secondary text-justify'>
              Trafo merkezinizde enerji sürekliliğini sağlamak ve kesintilerin
              önüne geçmek için rutin bakımlar yapmak gerekir:
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Güç trafosu test ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Hücrelerin test ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Kesici testleri.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Röle testleri ve ayarların yapılması.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                BAR24 ünitesinin kontrölü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Buşing ve başlıkların kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Güvenlik ekipmanın kontrolü.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/ogBakim'>
                <a className='btnSecondary'>Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card3 End */}

        {/* Card 4 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/alcak-gerilim-bakim.jpg'
            className='object-cover w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/agBakim'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  AG Servis & Bakım
                </a>
              </Link>
            </div>
            <p className='mb-2 text-secondary text-justify'>
              Alçak gerilim tesislerinizde cana ve mala gelecek zararlardan ve
              kesintilerden sakınmak için rutin olarak bakım yaptırmak gerekir.
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Dokunmaya, ark flashına ve yangına karşı alınan güvenlik
                önlemlerinin kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Termal kamera ile tesinin kontrol edilip raporlanması.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Elektrik panolarının ve şalt malzemenin kontrolü ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Elektrik motorlarının kontrolü ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                UPS'lerin kontrolü ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Topraklama ölçümü ve topraklama tesisatının kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Dış ve iç yıldırımlıkların kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Kaçak akımların kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Aydınlık seviyesinin ve armatürlerin genel kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Elektrik tesisat uygunluk raporu.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/agBakim'>
                <a className='btnSecondary'> Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card4 End */}

        {/* Card5 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/enerji-kalite.jpg'
            className='object-cover w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/enerjiKalitesi'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  Enerji Kalitesi Çözümleri
                </a>
              </Link>
            </div>
            <p className='mb-2 text-secondary text-justify'>
              Elektrik tesisinin verimli ve düzgün çalışması için, hassas
              elektronik cihazların arıza görmeden çalışabilmesi için tesiste
              enerji kalitesi kontrol edilmelidir:
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Topraklamanın ölçümü ve kontrolü.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Frekans kaynaklı problemlere çözümler (Sags, Swells, Flickers)
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Kısa süreli gerilim darbelerine karşı önlemler.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Harmoniklerin ölçümü ve çözüm önerileri.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Statik elektriğe karşı çözüm önerileri.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Elektromanyetik girişime karşı çözüm önerileri.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/enerjiKalitesi'>
                <a className='btnSecondary'>Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card5 End */}

        {/* Card6 */}
        <div className='overflow-hidden bg-white rounded shadow-sm border'>
          <img
            src='images/kompanzasyon.jpg'
            className='object-contain w-full h-64'
            alt=''
          />
          <div className='p-5'>
            <div className='flex justify-center'>
              <Link href='/urun/kompanzasyon'>
                <a className='inline-block mb-3 text-2xl font-bold text-primary hover:text-primaryDark text-center'>
                  Kompanzasyon Çözümleri
                </a>
              </Link>
            </div>
            <p className='mb-2 text-secondary text-justify'>
              Fazla reaktif enerji tüketiminde dolayı cezalardan sakınmak için
              tesisin kompanzasyon panolarının rutin bakımlarının yapılması
              gerekir.
            </p>
            <ul className='mb-3'>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Yapılacak bakım sözleşmesi ile sorumluluğun bizim tarafımızdan
                üstlenilmesi. Olası cezanın bizim tarafımızdan ödenmesi.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Kompanzasyon panolarının kontrolü ve bakımı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Reaktif enerji tüketiminin internten üzerinden izlenerek ceza
                sınırları aşılmadan hızlıca müdahale olanağı.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                SVC kompanzasyon çözümleriyle hem endüktif, hem de kapasitif
                kompanzasyon yapılması.
              </li>
              <li className='flex'>
                <div>
                  <FaRegCheckCircle className='mr-1 w-5 h-6 text-primary' />
                </div>
                Harmonik oranı yüksek tesislerde yapılacak ölçümlerle harmonik
                filtreli kompanzasyon.
              </li>
            </ul>
            <div className='flex justify-center'>
              <Link href='/urun/kompanzasyon'>
                <a className='btnSecondary'>Daha Fazla Bilgi</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Card6 End */}
      </div>
    </div>
  );
}
