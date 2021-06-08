import React from 'react';
import Layout from '../../components/Layout';

export default function EnerjiKalitesi() {
  return (
    <Layout
      title='Enerji Kalitesi Çözümleri - Harmonik, Gerilim Darbesi, Topraklama'
      hreflangUrl='https://www.etiselektrik.com.tr/enerjiKalitesi'
      description='Enerji kalitesi sorunlarınıza çözümler. Frekans kaynaklı gerilim problemleri, gerilim darbeleri, aşırı harmonik, topraklama, faz dengesizliği, statik elektrik kaynaklı problemler.'
      keywords='Aşırı yüksek gerilim, Aşırı düşük gerilim, Gerilim Darbesi, Transient, Harmonik, Topraklama, Statik elektrik, elektromanyetik girişim'
    >
      <div className='flex justify-center items-center simpleContainer'>
        <h1 className='my-4 text-2xl font-bold text-secondary sm:my-8 sm:text-3xl'>
          ENERJİ KALİTESİ ÇÖZÜMLERİ
        </h1>
      </div>

      <div className='flex flex-col justify-start items-start simpleContainer'>
        <p className='text-justify mb-3'>
          Elektrik tesisinin verimli ve düzgün çalışması için, hassas elektronik
          cihazların arıza görmeden çalışabilmesi için tesiste enerji kalitesi
          kontrol edilmelidir:
        </p>

        <ul className='list-disc ml-8 mb-3'>
          <li>Frekans kaynaklı problemler</li>
          <li>Kısa süreli gerilim darbeleri (Transient)</li>
          <li>Harmonik</li>
          <li>Topraklama & Dengeleme kaynaklı problemler</li>
          <li>Reaktif güç tüketimi kaynaklı problemler</li>
          <li>Faz dengesizliği</li>
          <li>Statik elektrik kaynaklı problemler</li>
          <li>Elektromanyetik girişim kaynaklı problemler</li>
        </ul>

        <p className='text-justify mb-3'>
          Elektronik cihazlarınızda problemlerle karşılaşıyor, makinelerinizin
          elektrik kartları devamlı yanıyor, bilgisayarlarınızın birçoğu ertesi
          gün geldiğinizde açılmıyor, topraklama tesisatınızda problem olduğunu
          düşünüyor olabilirsiniz. Eğer bu ve benzeri konulardan şikayetçi
          iseniz tesisinizin enerji kalitesinde problem olabilir.
        </p>

        <p className='text-justify mb-3'>
          Bu konuda yardım almak için bizle iletişime geçebilirisiniz.
        </p>
      </div>
    </Layout>
  );
}
