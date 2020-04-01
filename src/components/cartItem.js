import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
  border-top: 1px solid white;
`;

const CartItemImage = styled(Img)`
  width: 100px;
  margin-right: 4px;
`;

const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12pt;
  border-bottom: 1px solid white;
  margin: 0 0 4px 0;
`;

const CartItemInfo = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12pt;
  color: #d8d8d8;
`;

const CartItemRemoveButton = styled.div`
  opacity: 0.4;
  cursor: pointer;
  padding-left: 15px;
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
function CartItem({ name, image, variant, quantity, price, onClick }) {
  return (
    <CartItemContainer>
      <CartItemImage fluid={image} />
      <CartItemDescription>
        <CartItemName>{name}</CartItemName>
        <CartItemInfo>${price.toFixed(2)}</CartItemInfo>
        <CartItemInfo>Size: {variant}</CartItemInfo>
        <CartItemInfo>Quantity: {quantity}</CartItemInfo>
      </CartItemDescription>
      <CartItemRemoveButton onClick={onClick} />
    </CartItemContainer>
  );
}

export default CartItem;
