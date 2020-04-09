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
import FormNotification from "../components/formNotification";
import { useCartContext } from "../hooks/useCartContext";

const IndexPage = ({ location }) => {
  const [showOrderNotification, setShowOrderNotification] = useState(
    queryString.parse(location.search).success
  );
  const [showFormNotification, setShowFormNotification] = useState(
    queryString.parse(location.search).contact
  );
  const { clearCart } = useCartContext();

  useEffect(() => {
    if (showOrderNotification) {
      clearCart();
      setTimeout(() => {
        setShowOrderNotification(false);
      }, 2000);
    }

    if (showFormNotification) {
      clearCart();
      setTimeout(() => {
        setShowFormNotification(false);
      }, 2000);
    }
  }, [showOrderNotification, showFormNotification, clearCart]);

  return (
    <Layout>
      <SEO title="Home" />
      <OrderNotification isShown={showOrderNotification} />
      <FormNotification isShown={showFormNotification} />
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
