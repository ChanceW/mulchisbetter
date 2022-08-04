import MainHero from "../components/main-hero";
import Layout from "../components/layout";
import { ProductsView } from "../components/Sections/productsView";
import { WhatToExpect } from "../components/Sections/whatToExpect";
import { ServingCites } from "../components/Sections/servingCities";
import { MulchCalculator } from "../components/Sections/mulchCalculator";

export default function Home() {
  return (
    <Layout>
      <MainHero />
      <ProductsView />
      <WhatToExpect />
      <MulchCalculator />
      <ServingCites />
    </Layout>
  );
}
