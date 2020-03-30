import React from "react";
import styled from "styled-components";

import { useProductsContext } from "../hooks/useProductContext";
import { breakpoint } from "../utilities/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShirtFormSelect = styled.select`
  flex-grow: 1;
  margin: 10px 5px;
  font-family: inherit;
  font-size: 9pt;
  height: 43px;

  @media ${breakpoint.medium} {
    font-size: 14pt;
  }
`;

const ShirtFormButton = styled.button`
  margin: 10px 5px;
  flex-shrink: 1;
  height: 33px;
  font-size: 9pt;
  border-radius: 10px;
  font-family: inherit;
  font-style: italic;
  background-color: #f7c036;
  border: 0;
  box-shadow: 0;
  cursor: pointer;

  @media ${breakpoint.medium} {
    font-size: 14pt;
  }
`;

function StoreForm({
  productIndex,
  variantIndex,
  quantity,
  onFormInputChange,
  onClick
}) {
  const { products } = useProductsContext();
  return (
    <Container>
      <RowContainer>
        <ShirtFormSelect
          name="product"
          value={productIndex}
          onChange={onFormInputChange}
        >
          {products.map((product, index) => {
            return (
              <option key={product.id} value={index}>
                {product.name}
              </option>
            );
          })}
        </ShirtFormSelect>
      </RowContainer>
      <RowContainer>
        <ShirtFormSelect
          name="variant"
          value={variantIndex}
          onChange={onFormInputChange}
        >
          {products[productIndex].variants.map((variant, index) => {
            return (
              <option key={variant.sku} value={index}>
                {variant.name}
              </option>
            );
          })}
        </ShirtFormSelect>
        <ShirtFormSelect
          name="quantity"
          value={quantity}
          onChange={onFormInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </ShirtFormSelect>
        <ShirtFormButton onClick={onClick}>Add To Cart</ShirtFormButton>
      </RowContainer>
    </Container>
  );
}

export default StoreForm;
