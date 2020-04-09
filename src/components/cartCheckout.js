import React from "react";
import styled from "styled-components";

import Checkout from "./checkout";

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

function CartCheckout({ subtotal, disabled }) {
  return (
    <CartCheckoutContainer>
      <CartCheckoutRow>
        <span>Total:</span>
        <span>{subtotal}</span>
      </CartCheckoutRow>
      <CartCheckoutButton disabled={disabled}>
        Checkout →
      </CartCheckoutButton>
    </CartCheckoutContainer>
  );
}

export default CartCheckout;
