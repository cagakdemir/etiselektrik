import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import BlogList from '../../components/BlogList';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import { API_URL } from '../../config/index';

const PER_PAGE = 10;

export default function TeknikBilgi({ blogPosts, page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Layout
      title='AG/OG, Kompanzasyon, Enerji Kalitesi, Elektrik Servis ve Bakım Teknik Yazılar'
      hreflangUrl='https://www.etiselektrik.com.tr/teknikBilgi'
      description='Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik bakım konularında teknik yazılar'
      keywords='Alçak gerilim pano, Kompanzasyon, Enerji kalitesi, Orta gerilim bakım, Trafo merkezi, Elektrik Bakım'
    >
      <div className='flex justify-center items-center'>
        <h1 className='my-6 text-3xl font-bold text-secondary sm:my-12 sm:text-4xl'>
          TEKNİK BİLGİ VE YAZILAR
        </h1>
      </div>
      <BlogList blogPosts={blogPosts} />

      <div className='mt-6 flex justify-center'>
        {page > 1 && (
          <Link href={`/teknikbilgi?page=${page - 1}`}>
            <a className='mr-12 text-lg text-primary hover:text-primaryDark font-bold'>
              <div className='flex items-center'>
                <FaStepBackward className='mr-1 w-5 h-5' />
                <span>Geri</span>
              </div>
            </a>
          </Link>
        )}

        {page < lastPage && (
          <Link href={`/teknikbilgi?page=${page + 1}`}>
            <a className='text-lg text-primary hover:text-primaryDark font-bold'>
              <div className='flex items-center'>
                <span>İleri</span>
                <FaStepForward className='ml-1 w-5 h-5' />
              </div>
            </a>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/teknikbilgis/count`);
  const total = await totalRes.json();

  // Fetch posts
  const blogPostsRes = await fetch(
    `${API_URL}/teknikbilgis?_sort=id:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const blogPosts = await blogPostsRes.json();

  return {
    props: { blogPosts, page: +page, total },
  };
}
