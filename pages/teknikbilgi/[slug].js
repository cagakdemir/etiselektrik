import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../../components/Layout';
import { API_URL } from '../../config/index';

export default function BlogPost({ post }) {
  // <p> styling
  let styledContent = post.content?.replaceAll(
    '<p>',
    '<p style="margin-bottom:0.75rem; margin-top: 0.75rem;">'
  );
  styledContent = styledContent?.replaceAll(
    '<p style="text-align:justify;">',
    '<p style="text-align:justify; margin-bottom:0.75rem; margin-top: 0.75rem;">'
  );
  styledContent = styledContent?.replaceAll(
    '<p style="text-align:center;">',
    '<p style="text-align:center; margin-bottom:0.75rem; margin-top: 0.75rem;">'
  );
  styledContent = styledContent?.replaceAll(
    '<p style="text-align:right;">',
    '<p style="text-align:right; margin-bottom:0.75rem; margin-top: 0.75rem;">'
  );

  // <h2> styling
  styledContent = styledContent?.replaceAll(
    '<h2>',
    '<h2 style="font-size:1.25rem; font-weight: 600;">'
  );

  styledContent = styledContent?.replaceAll(
    '<h2 style="text-align:justify;">',
    '<h2 style="text-align:justify; font-size:1.25rem; font-weight: 600;">'
  );

  styledContent = styledContent?.replaceAll(
    '<h2 style="text-align:center;">',
    '<h2 style="text-align:center; font-size:1.25rem; font-weight: 600;">'
  );

  styledContent = styledContent?.replaceAll(
    '<h2 style="text-align:right;">',
    '<h2 style="text-align:right; font-size:1.25rem; font-weight: 600;">'
  );

    // <h3> styling
    styledContent = styledContent?.replaceAll(
      '<h3>',
      '<h3 style="font-size:1rem; font-weight: 600;">'
    );
  
    styledContent = styledContent?.replaceAll(
      '<h3 style="text-align:justify;">',
      '<h3 style="text-align:justify; font-size:1rem; font-weight: 600;">'
    );
  
    styledContent = styledContent?.replaceAll(
      '<h3 style="text-align:center;">',
      '<h3 style="text-align:center; font-size:1rem; font-weight: 600;">'
    );
  
    styledContent = styledContent?.replaceAll(
      '<h3 style="text-align:right;">',
      '<h3 style="text-align:right; font-size:1rem; font-weight: 600;">'
    );

    // <ul> styling
  styledContent = styledContent?.replaceAll(
    '<ul>',
    '<ul style="list-style: inside;">'
  );

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
        {/* {styledContent} */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  try {
    const res = await fetch(`${API_URL}/teknikbilgis/${slug}`);
    const post = await res.json();

    return {
      props: {
        post: post,
      },
    };
  } catch {
    return {
      props: {
        post: {},
      },
    };
  }
}
