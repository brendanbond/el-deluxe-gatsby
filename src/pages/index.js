import React, { useState, useEffect } from "react";
import queryString from "query-string";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import Discography from "../sections/discography";
import Gear from "../sections/gear";
import Contact from "../sections/contact";
import OrderNotification from "../components/orderNotification";
import FormNotification from "../components/formNotification";

const IndexPage = ({ location }) => {
  const [showFormNotification, setShowFormNotification] = useState(
    queryString.parse(location.search).contact
  );

  useEffect(() => {
    if (showFormNotification) {
      setTimeout(() => {
        setShowFormNotification(false);
      }, 2000);
    }
  }, [showFormNotification]);

  return (
    <Layout>
      <SEO />
      <FormNotification isShown={showFormNotification} />
      <About name="about" />
      <Discography name="discography" />
      <Gear name="gear" />
      {/* <Gallery name="gallery" /> */}
      {/* <Store name="store" /> */}
      <Contact name="contact" />
    </Layout>
  );
};

export default IndexPage;
