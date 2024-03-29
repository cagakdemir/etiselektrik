import Layout from '../components/Layout';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import WhyUs from '../components/WhyUs';
import References from '../components/References';
import { API_URL } from '../config/index';

export default function Home({ references }) {
  return (
    <Layout>
      <Header />
      <ProductCard />
      <WhyUs />
      <References references={references} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const referencesRes = await fetch(`${API_URL}/referanslars?_sort=year:DESC`);
  const references = await referencesRes.json();

  return {
    props: { references },
  };
}
