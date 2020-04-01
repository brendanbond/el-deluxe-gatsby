import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import StoreForm from "../components/storeForm";
import { useProductsContext } from "../hooks/useProductsContext";
import { useCartContext } from "../hooks/useCartContext";
import storeMobileBackground from "../images/store-mobile-background.jpg";
import storeDesktopBackground from "../images/store-desktop-background.jpg";
import { breakpoint } from "../utilities/breakpoints";

const StoreSection = styled.section`
  background-image: url(${storeMobileBackground});
  background-size: cover;
  padding: 70px 0 70px 0;

  @media ${breakpoint.medium} {
    background-image: url(${storeDesktopBackground});
    background-size: cover;
    background-position: center center;
  }
`;

const StoreContainer = styled.div`
  margin: 3rem 0;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.medium} {
    flex-direction: row;
    flex-shrink: 0;
  }
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  flex-basis: 50%;
  width: 70%;
  margin: auto;
`;

const ProductImage = styled(Img)`
  width: 100%;

  @media ${breakpoint.medium} {
    flex-basis: 50%;
    width: 100%;
  }
`;

const ImageIndicatorContainer = styled.div`
  display: inline;
`;

const LeftArrow = styled.i`
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  margin: 10px;
  cursor: pointer;

  @media ${breakpoint.medium} {
    padding: 12px;
    border-width: 0 7px 7px 0;
    margin: 20px;
  }
`;

const RightArrow = styled.i`
  border: solid white;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-45deg);
  margin: 10px;
  cursor: pointer;

  @media ${breakpoint.medium} {
    padding: 12px;
    border-width: 0 7px 7px 0;
    margin: 20px;
  }
`;

const StoreFormContainer = styled.div`
  width: 275px;
  @media ${breakpoint.medium} {
    flex-basis: 50%;
    width: 60%;
  }
`;

function Store({ name }) {
  const { products } = useProductsContext();
  const { addToCart } = useCartContext();
  const [productIndex, setProductIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleFormInputChange = event => {
    console.log("Form handler fired.");
    const formInput = event.target.name;
    const value = event.target.value;

    if (formInput === "product") {
      setProductIndex(parseInt(value));
      console.log("Product index changed to", value);
    } else if (formInput === "variant") {
      setVariantIndex(parseInt(value));
      console.log("Variant index changed to", variantIndex);
    } else {
      setQuantity(parseInt(value));
      console.log("Quantity set to", quantity);
    }
  };

  const incrementProduct = () => {
    if (productIndex === products.length - 1) {
      setProductIndex(0);
    } else {
      setProductIndex(productIndex + 1);
    }
  };

  const decrementProduct = () => {
    if (productIndex === 0) {
      setProductIndex(products.length - 1);
    } else {
      setProductIndex(productIndex - 1);
    }
  };

  return products ? (
    <StoreSection name={name}>
      <StoreContainer>
        <ProductImageContainer>
          <ProductImage fluid={products[productIndex].image} />
          <ImageIndicatorContainer>
            <LeftArrow onClick={decrementProduct} />
            <RightArrow onClick={incrementProduct} />
          </ImageIndicatorContainer>
        </ProductImageContainer>
        <StoreFormContainer>
          <StoreForm
            productIndex={productIndex}
            variantIndex={variantIndex}
            quantity={quantity}
            onFormInputChange={handleFormInputChange}
            onClick={() =>
              addToCart(
                products[productIndex].variants[variantIndex].sku,
                products[productIndex].id,
                quantity
              )
            }
          />
        </StoreFormContainer>
      </StoreContainer>
    </StoreSection>
  ) : (
    <div>
      <h3>There are currently no products in the store.</h3>
    </div>
  );
}

export default Store;
