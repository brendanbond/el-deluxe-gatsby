import React, { useState, useEffect } from "react";
import queryString from "query-string";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import Discography from "../sections/discography";
import Gear from "../sections/gear";
import Gallery from "../sections/gallery";
import Store from "../sections/store";
import Contact from "../sections/contact";
import OrderNotification from "../components/orderNotification";
import { useCartContext } from "../hooks/useCartContext";

const IndexPage = ({ location }) => {
  const [showOrderNotification, setShowOrderNotification] = useState(
    queryString.parse(location.search).success
  );
  const { clearCart } = useCartContext();

  useEffect(() => {
    if (showOrderNotification) {
      clearCart();
      setTimeout(() => {
        setShowOrderNotification(false);
      }, 2000);
    }
  }, [showOrderNotification, clearCart]);

  return (
    <Layout>
      <SEO title="Home" />
      <OrderNotification isShown={showOrderNotification} />
      <About name="about" />
      <Discography name="discography" />
      <Gear name="gear" />
      <Gallery name="gallery" />
      <Store name="store" />
      <Contact name="contact" />
    </Layout>
  );
};

export default IndexPage;
