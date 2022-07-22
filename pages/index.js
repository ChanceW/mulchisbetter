import MainHero from "../components/main-hero";
import Layout from "../components/layout";
import { ProductsView } from "../components/productsView";
import { WhatToExpect } from "../components/whatToExpect";

export default function Home() {
  return (
    <Layout>
      <MainHero />
      <ProductsView />
      <WhatToExpect />
    </Layout>
  );
}
