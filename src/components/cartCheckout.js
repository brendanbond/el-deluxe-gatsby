import React from "react";
import styled from "styled-components";

import Checkout from "./checkout";
import { useCartContext } from "../hooks/useCartContext";

const CartCheckoutButton = styled(Checkout)`
  height: 33px;
  font-size: 14pt;
  border-radius: 6px;
  font-family: inherit;
  font-style: italic;
  background-color: #f7c036;
  border: 0;
  box-shadow: 0;
  cursor: pointer;
  margin: 4px 0;
`;

const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  padding: 1em;
`;

const CartCheckoutRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CartCheckout({ subtotal, salesTax, grandTotal, disabled }) {
  const { cartContents } = useCartContext();
  const items = cartContents.map(item => ({
    sku: item.sku,
    quantity: item.quantity
  }));

  return (
    <CartCheckoutContainer>
      <CartCheckoutRow>
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </CartCheckoutRow>
      <CartCheckoutRow>
        <span>Tax:</span>
        <span>${salesTax}</span>
      </CartCheckoutRow>
      <CartCheckoutRow>
        <strong>Grand Total:</strong>
        <strong>${grandTotal}</strong>
      </CartCheckoutRow>
      <CartCheckoutButton disabled={disabled} items={items}>
        Checkout →
      </CartCheckoutButton>
    </CartCheckoutContainer>
  );
}

export default CartCheckout;
