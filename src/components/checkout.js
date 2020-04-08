import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const redirectToCheckout = async (event, items) => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: items,
    successUrl: process.env.URL + `?success=true`,
    cancelUrl: process.env.URL,
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
