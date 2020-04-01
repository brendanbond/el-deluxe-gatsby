import React from "react";
import styled from "styled-components";

import { useCartContext } from "../hooks/useCartContext";
import { useProductsContext } from "../hooks/useProductsContext";

const CartContainer = styled.div`
  position: fixed;
  background: black;
  z-index: 1000;
  top: 0;
  right: ${props => (props.isShown ? "0" : "-100%")};
  height: 100%;
  width: 25%;
  overflow-y: auto;
  padding: 12px;
  -webkit-overflow-scrolling: touch;
  transition: right 0.3s;
`;

const CartHeading = styled.h1`
  font-family: "have_nothing_to_do_withRg";
  font-size: 14pt;
  font-style: normal;
`;

const CartCloseButton = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  opacity: 0.4;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;

const CartItem = styled.div`
  padding: 1em 0;
  border-top: 1px solid white;
  position: relative;
`;

const CartItemRemoveButton = styled.div`
  position: absolute;
  top: 50%;
  left: 80%;
  opacity: 0.4;
  cursor: pointer;
  width: 15px;
  height: 15px;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 15px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`;

function Cart() {
  const { products } = useProductsContext();
  const {
    cartContents,
    removeFromCart,
    cartIsShown,
    toggleCart,
    cartTotalCost,
    cartTotalQuantity
  } = useCartContext();

  return (
    <CartContainer isShown={cartIsShown}>
      <CartCloseButton onClick={() => toggleCart()} />
      <CartHeading>Your Cart ({cartTotalQuantity()})</CartHeading>

      {cartContents.length > 0 ? (
        cartContents.map(item => {
          let currentProduct = products.find(
            product => item.productId === product.id
          );
          return (
            <CartItem key={item.sku}>
              {item.quantity}x{" "}
              {
                currentProduct.variants.find(
                  variant => variant.sku === item.sku
                ).name
              }{" "}
              {currentProduct.name}
              <CartItemRemoveButton onClick={() => removeFromCart(item.sku)} />
            </CartItem>
          );
        })
      ) : (
        <CartItem>There are currently no items in your cart.</CartItem>
      )}
    </CartContainer>
  );
}

export default Cart;
