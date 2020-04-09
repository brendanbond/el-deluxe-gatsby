/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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
