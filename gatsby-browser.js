/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ProductsProvider } from "./src/hooks/useProductsContext";
import { CartProvider } from "./src/hooks/useCartContext";

export const wrapRootElement = ({ element }) => (
  <ProductsProvider>
    <CartProvider>{element}</CartProvider>
  </ProductsProvider>
);

require("./src/fonts/fonts.css");

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};