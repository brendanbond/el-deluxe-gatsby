import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about";
import Discography from "../sections/discography";
import Gear from "../sections/gear";
import Gallery from "../sections/gallery";
import Store from "../sections/store";
import Contact from "../sections/contact";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <About name="about" />
    <Discography name="discography" />
    <Gear name="gear" />
    <Gallery name="gallery" />
    <Store name="store" />
    <Contact name="contact" />
  </Layout>
);

export default IndexPage;
