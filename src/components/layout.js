import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

import { ProductsProvider } from "../hooks/useProductContext";
import { CartProvider } from "../hooks/useCartContext";
import { devices } from "../utilities/breakpoints";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
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
  margin-top: 30px;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <GlobalStyle />
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()}</Footer>
      </CartProvider>
    </ProductsProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
