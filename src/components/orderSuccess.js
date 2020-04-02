import React from "react";
import styled from "styled-components";

const OrderSuccessNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d4edda;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  color: #498056;
  text-align: center;
  z-index: 100;
`;

function OrderSucess() {
  return (
    <OrderSuccessNotification>
      Thank you for your order!
    </OrderSuccessNotification>
  );
}

export default OrderSucess;
