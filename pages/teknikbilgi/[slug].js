import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../../components/Layout';
import { API_URL } from '../../config/index';

const replace = require('str-replace');

export default function BlogPost({ post }) {
  let styledContent = post.content;

  styledContent = replace
    .all('<p>')
    .from(styledContent)
    .with('<p style="margin-bottom:0.75rem; margin-top: 0.75rem;">');
  styledContent = replace
    .all('<p style="text-align:justify;">')
    .from(styledContent)
    .with(
      '<p style="text-align:justify; margin-bottom:0.75rem; margin-top: 0.75rem;">'
    );
  styledContent = replace
    .all('<p style="text-align:center;">')
    .from(styledContent)
    .with(
      '<p style="text-align:center; margin-bottom:0.75rem; margin-top: 0.75rem;">'
    );
  styledContent = replace
    .all('<p style="text-align:right;">')
    .from(styledContent)
    .with(
      '<p style="text-align:right; margin-bottom:0.75rem; margin-top: 0.75rem;">'
    );
  styledContent = replace
    .all('<h2>')
    .from(styledContent)
    .with(
      '<h2 style="text-align:justify; font-size:1.25rem; font-weight: 600;">'
    );
  styledContent = replace
    .all('<h2 style="text-align:justify;">')
    .from(styledContent)
    .with(
      '<h2 style="text-align:justify; font-size:1.25rem; font-weight: 600;">'
    );
  styledContent = replace
    .all('<h2 style="text-align:center;">')
    .from(styledContent)
    .with(
      '<h2 style="text-align:center; font-size:1.25rem; font-weight: 600;">'
    );
  styledContent = replace
    .all('<h2 style="text-align:right;">')
    .from(styledContent)
    .with(
      '<h2 style="text-align:right; font-size:1.25rem; font-weight: 600;">'
    );
  styledContent = replace
    .all('<h3>')
    .from(styledContent)
    .with('<h3 style="font-size:1rem; font-weight: 600;">');
  styledContent = replace
    .all('<h3 style="text-align:justify;">')
    .from(styledContent)
    .with('<h3 style="text-align:justify; font-size:1rem; font-weight: 600;">');
  styledContent = replace
    .all('<h3 style="text-align:center;">')
    .from(styledContent)
    .with('<h3 style="text-align:center; font-size:1rem; font-weight: 600;">');
  styledContent = replace
    .all('<h3 style="text-align:right;">')
    .from(styledContent)
    .with('<h3 style="text-align:right; font-size:1rem; font-weight: 600;">');
  styledContent = replace
    .all('<ul>')
    .from(styledContent)
    .with('<ul style="list-style: inside;">');

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
        {ReactHtmlParser(styledContent)}
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
