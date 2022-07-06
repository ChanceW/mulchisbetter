import MainHero from "../components/main-hero";
import Layout from "../components/layout";
import { ProductsView } from "../components/productsView";

export default function Home() {
  return (
    <Layout>
      <MainHero />
      <ProductsView />
    </Layout>
  );
}
