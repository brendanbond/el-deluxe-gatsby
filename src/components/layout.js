import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";

import StickyNav from "./stickyNav";
import Cart from "./cart";
import { ProductsProvider } from "../hooks/useProductsContext";
import { CartProvider } from "../hooks/useCartContext";
import Logo from "../images/logo.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: big-caslon-fb, serif;
    font-weight: 400;
    font-style: normal;
    background-color: black;
    color: white;
    margin: 0;
  }

  h1 {
    font-weight: 400;
    font-style: italic;
  }
`;

const Footer = styled.footer`
  margin: 20px;
  text-align: center;
`;

const OuterLink = styled.a`
  color: white;
`;

const FooterImage = styled.div`
  cursor: pointer;
`;

const Layout = ({ children, location }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <GlobalStyle />
        <main>
          <StickyNav />
          <Cart />
          {children}
        </main>
        <Footer>
          <FooterImage>
            <Link to="about" smooth={true} offset={-75} duration={500}>
              <img src={Logo} width="100px" alt="Electric Deluxe Logo" />
            </Link>
          </FooterImage>
          © {new Date().getFullYear()} Electric Deluxe Recorders. All rights
          reserved.
          <br />
          All photos by Cristian Sigler.
          <br />
          Site by{" "}
          <OuterLink href="http://brendanbond.dev">Brendan Bond</OuterLink>.
        </Footer>
      </CartProvider>
    </ProductsProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
