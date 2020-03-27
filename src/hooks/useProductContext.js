import React, { useContext, createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const products = useProducts();
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
}

function useProductsContext() {
  return useContext(productsContext);
}

function useProducts() {
  const data = useStaticQuery(graphql`
    query SKUQuery {
      allStripeSku {
        nodes {
          id
          attributes {
            name
          }
          price
          image
          currency
          product {
            id
            name
          }
        }
      }
    }
  `);
  const products = getProductsWithSkus(data);

  return { products };
}

const getProductsWithSkus = data => {
  const products = data.allStripeSku.nodes.reduce((obj, node) => {
    if (!obj[node.product.id]) {
      obj[node.product.id] = {
        name: node.product.name,
        variants: [{ sku: node.id, name: node.attributes.name }],
        image: node.image
      };
    } else {
      obj[node.product.id].variants.push({
        sku: node.id,
        name: node.attributes.name
      });
    }
    return obj;
  }, {});

  return products;
};

export { ProductsProvider, useProductsContext };

/*
{
  [productId]: {
    name: "dkf;ak",
    skus: [
      {
        sku: ;dkasdklfjafa,
        name: "dkjaf;"
      }
    ]
  }
}
*/
