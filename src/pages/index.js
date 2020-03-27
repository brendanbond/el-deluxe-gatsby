import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import { ProductsProvider } from "../hooks/useProductContext";
import { CartProvider } from "../hooks/useCartContext";
import Discography from "../sections/discography";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsProvider>
      <CartProvider>
        <About />
        <Discography />
      </CartProvider>
    </ProductsProvider>
  </Layout>
);

export default IndexPage;
