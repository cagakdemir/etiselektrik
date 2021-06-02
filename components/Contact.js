import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='text-secondary body-font relative'>
      <div className='container px-5 py-20 max-w-screen-xl mx-auto'>
        <div className='w-full h-96 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            frameBorder='0'
            title='map'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2126.7502490558736!2d28.796373488246825!3d41.07600781369001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa58ec90d4889%3A0xa6380577858a0ba9!2sEtis%20Elektrik!5e0!3m2!1sen!2str!4v1620459652968!5m2!1sen!2str'
          ></iframe>
        </div>

        <div className='bg-white relative flex flex-wrap py-6 mt-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-6'>
            <h2 className='font-semibold text-secondary tracking-widest text-xs'>
              ADRES
            </h2>
            <p className='mt-1 text-secondary font-semibold'>
              İkitelli Organize Sanayi Bölgesi İPKAS Sanayi Sitesi 2. Blok
              No:33-34-35-36 Başakşehir İstanbul
            </p>
          </div>

          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <h2 className='font-semibold text-secondary tracking-widest text-xs'>
              EMAIL
            </h2>
            <a className='text-secondary font-semibold leading-relaxed'>
              etis@etiselektrik.com.tr
            </a>
            <h2 className='font-semibold text-secondary tracking-widest text-xs mt-4'>
              TELEFON
            </h2>
            <p className='leading-relaxed text-secondary font-semibold'>
              (0212)5493725
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
