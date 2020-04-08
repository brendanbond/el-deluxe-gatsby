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

const OrderFailureNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff3cd;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  color: #721c24;
  text-align: center;
  z-index: 100;
`;

function OrderNotification({ isSuccess }) {
  return isSuccess ? (
    <OrderSuccessNotification>
      Thank you for your order!
    </OrderSuccessNotification>
  ) : (
    <OrderFailureNotification>
      Either you canceled or something went wrong - try again later!
    </OrderFailureNotification>
  );
}

export default OrderNotification;
