import React from "react";
import styled from "styled-components";

import { useCartContext } from "../hooks/useCartContext";
import CartIcon from "../images/cart.svg";

const CartButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  opacity: 0.8;
  transition: all 300ms ease-out 0;

  &:hover {
    opacity: 1;
  }
`;

const CartIndicator = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  top: -3px;
  right: -5px;
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background-color: red;
  text-align: center;
  font-size: 9pt;
  font-weight: 400;
`;

const CartImage = styled.img`
  width: 40px;
  height: 33.5px;
  margin-left: 15px;
`;

function CartButton({ className, onClick }) {
  const { cartQuantity, toggleCart } = useCartContext();

  return (
    <CartButtonContainer className={className} onClick={() => toggleCart()}>
      <CartIndicator active={cartQuantity > 0}>{cartQuantity}</CartIndicator>
      <CartImage src={CartIcon} />
    </CartButtonContainer>
  );
}

export default CartButton;
