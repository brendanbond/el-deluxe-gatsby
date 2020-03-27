import React, { useState } from "react";
import styled from "styled-components";

import Cart from "../components/cart";
import StoreForm from "../components/storeForm";
import { useProductsContext } from "../hooks/useProductContext";
import { useCartContext } from "../hooks/useCartContext";

const Container = styled.div`
  margin: 3rem 0;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 300px;
  flex-basis: 600px;
`;

function Store() {
  const { products } = useProductsContext();
  const { addToCart } = useCartContext();
  const [formInput, setFormInput] = useState({
    product: Object.keys(products)[0],
    variant: products[Object.keys(products)[0]].variants[0].sku,
    quantity: 1
  });

  const handleFormInputChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setFormInput(() => {
      if (key === "product") {
        return {
          ...formInput,
          product: value,
          variant: products[value].variants[0].sku
        };
      } else {
        return { ...formInput, [key]: value };
      }
    });
  };

  const handleClick = event => {
    event.preventDefault();
    addToCart(
      formInput.variant,
      formInput.product,
      parseInt(formInput.quantity)
    );
  };

  return products ? (
    <>
      <Container>
        <ProductImage src={products[formInput.product].image} />
        <StoreForm
          formInput={formInput}
          onFormInputChange={handleFormInputChange}
          onClick={handleClick}
        />
      </Container>
      <Container>
        <Cart />
      </Container>
    </>
  ) : (
    <div>
      <h3>There are currently no products in the store.</h3>
    </div>
  );
}

export default Store;
