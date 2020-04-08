import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_jp4SrrZ6wcUPfb08hweCZ7Tx00AvqX2hH6");

const redirectToCheckout = async (event, items) => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: items,
    successUrl: `http://localhost:8000/?success=true`,
    cancelUrl: `http://localhost:8000/?success=false`,
    billingAddressCollection: "auto",
    shippingAddressCollection: {
      allowedCountries: ["US"],
    },
  });
  if (error) {
    console.warn("Error:", error);
  }
};

function Checkout({ className, children, items }) {
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
