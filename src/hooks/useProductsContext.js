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
          currency
          product {
            id
            name
          }
          localFiles {
            id
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const products = getProductsWithSkus(data);

  return { products };
}

const getProductsWithSkus = data => {
  const products = data.allStripeSku.nodes.reduce((result, node) => {
    let index = result.findIndex(el => node.product.id === el.id);
    if (index === -1) {
      result.push({
        id: node.product.id,
        name: node.product.name,
        variants: [{ sku: node.id, name: node.attributes.name }],
        image: node.localFiles[0].childImageSharp.fluid,
      });
    } else {
      result[index].variants.push({
        sku: node.id,
        name: node.attributes.name,
        price: node.price / 100
      });
    }
    return result;
  }, []);

  return products;
};

export { ProductsProvider, useProductsContext };
