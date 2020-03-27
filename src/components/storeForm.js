import React from "react";
import styled from "styled-components";

import { useProductsContext } from "../hooks/useProductContext";

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
`;

const ShirtFormButton = styled.button`
  margin: 10px 5px;
  flex-shrink: 1;
`;

function StoreForm({ formInput, onFormInputChange, onClick }) {
  const { products } = useProductsContext();
  console.log("formInput", formInput);
  return (
    <Container>
      <RowContainer>
        <ShirtFormSelect
          name="product"
          value={formInput.product}
          onChange={onFormInputChange}
        >
          {Object.entries(products).map(([productId, product]) => {
            return (
              <option key={productId} value={productId}>
                {product.name}
              </option>
            );
          })}
        </ShirtFormSelect>
      </RowContainer>
      <RowContainer>
        <ShirtFormSelect
          name="variant"
          value={formInput.variant}
          onChange={onFormInputChange}
        >
          {products[formInput.product].variants.map(variant => {
            return (
              <option key={variant.sku} value={variant.sku}>
                {variant.name}
              </option>
            );
          })}
        </ShirtFormSelect>
        <ShirtFormSelect
          name="quantity"
          value={formInput.quantity}
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
