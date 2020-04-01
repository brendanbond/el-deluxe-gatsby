import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import Discography from "../sections/discography";
import Gear from "../sections/gear";
import Gallery from "../sections/gallery";
import Store from "../sections/store";
import Contact from "../sections/contact";
import { ProductsProvider } from "../hooks/useProductsContext";
import { CartProvider } from "../hooks/useCartContext";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsProvider>
      <CartProvider>
        <About name="about" />
        <Discography name="discography" />
        <Gear name="gear" />
        <Gallery name="gallery" />
        <Store name="store" />
        <Contact name="contact" />
      </CartProvider>
    </ProductsProvider>
  </Layout>
);

export default IndexPage;
