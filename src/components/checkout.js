import React from "react";
import { loadStripe } from "@stripe/stripe-js";

import { useCartContext } from "../hooks/useCartContext";

const stripePromise = loadStripe("pk_test_jp4SrrZ6wcUPfb08hweCZ7Tx00AvqX2hH6");

const redirectToCheckout = async (event, items) => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: items,
    successUrl: `https://www.electricdeluxerecorders.com/?success=true`,
    cancelUrl: `https://www.electricdeluxerecorders.com`,
    billingAddressCollection: "auto",
    shippingAddressCollection: {
      allowedCountries: ["US"],
    },
  });
  if (error) {
    console.warn("Error:", error);
  }
};

function Checkout({ className, children }) {
  const { cartContents } = useCartContext();
  const items = cartContents.map((item) => ({
    sku: item.sku,
    quantity: item.quantity,
  }));
  return (
    <button
      className={className}
      onClick={(event) => {
        redirectToCheckout(event, items);
      }}
    >
      {children}
    </button>
  );
}

export default Checkout;
