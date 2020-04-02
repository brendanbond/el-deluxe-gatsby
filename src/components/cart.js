import React, { useContext } from "react";
import styled from "styled-components";

import CartItem from "./cartItem";
import CartCheckout from "./cartCheckout";
import { useCartContext } from "../hooks/useCartContext";
import { useProductsContext } from "../hooks/useProductsContext";

const CartContainer = styled.div`
  position: fixed;
  background: black;
  z-index: 1000;
  top: 0;
  right: ${props => (props.isShown ? "0" : "-115vw")};
  height: 100%;
  overflow-y: auto;
  padding: 12px;
  -webkit-overflow-scrolling: touch;
  transition: right 0.3s;
`;

const CartHeadingContainer = styled.div`
  font-family: "have_nothing_to_do_withRg";
  font-size: 14pt;
  font-style: normal;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 23px - 1em);
`;

const CartCloseButton = styled.div`
  margin-left: 8px;
  opacity: 0.4;
  cursor: pointer;
  width: 23px;
  height: 23px;
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 23px;
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

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
  border-top: 1px solid white;
`;

function Cart() {
  const { products } = useProductsContext();
  const {
    cartContents,
    removeFromCart,
    cartIsShown,
    toggleCart,
    getCartSubtotal,
    getCartSalesTax,
    getCartGrandTotal,
    getCartQuantity
  } = useCartContext();

  return (
    <CartContainer isShown={cartIsShown}>
      <CartHeadingContainer>
        <CartCloseButton onClick={() => toggleCart()} />
        Your Cart ({getCartQuantity()})
      </CartHeadingContainer>
      <CartContentContainer>
        <CartItemsContainer>
          {cartContents.length > 0 ? (
            cartContents.map(item => {
              let currentProduct = products.find(
                product => item.productId === product.id
              );
              return (
                <CartItem
                  key={item.sku}
                  name={currentProduct.name}
                  image={currentProduct.image}
                  variant={
                    currentProduct.variants.find(
                      variant => item.sku === variant.sku
                    ).name
                  }
                  quantity={item.quantity}
                  price={
                    currentProduct.variants.find(
                      variant => item.sku === variant.sku
                    ).price
                  }
                  onClick={() => removeFromCart(item.sku)}
                />
              );
            })
          ) : (
            <CartMessageContainer>
              There are currently no items in your cart.
            </CartMessageContainer>
          )}
        </CartItemsContainer>
        <CartCheckout
          subtotal={getCartSubtotal().toFixed(2)}
          salesTax={getCartSalesTax().toFixed(2)}
          grandTotal={getCartGrandTotal().toFixed(2)}
          disabled={getCartQuantity() <= 0}
        />
      </CartContentContainer>
    </CartContainer>
  );
}

export default Cart;
