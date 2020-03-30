import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import Discography from "../sections/discography";
import Gear from "../sections/gear";
import Gallery from "../sections/gallery";
import Store from "../sections/store";
import { ProductsProvider } from "../hooks/useProductContext";
import { CartProvider } from "../hooks/useCartContext";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsProvider>
      <CartProvider>
        <About />
        <Discography />
        <Gear />
        <Gallery />
        <Store />
      </CartProvider>
    </ProductsProvider>
  </Layout>
);

export default IndexPage;
