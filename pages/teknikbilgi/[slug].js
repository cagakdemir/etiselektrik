import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../../components/Layout';
import { API_URL } from '../../config/index';

export default function BlogPost({ post }) {
  return (
    <Layout
      title={post.title}
      description={post.metaDescription}
      keywords={post.metaKeywords}
    >
      <h1 className='px-4 py-4 md: my-4 simpleContainer font-semibold text-2xl text-secondary text-left'>
        {post.title}
      </h1>
      <div className='px-4 simpleContainer text-secondary'>
        {ReactHtmlParser(post.content)}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/teknikbilgis/${slug}`);
  const post = await res.json();

  return {
    props: {
      post: post,
    },
  };
}
