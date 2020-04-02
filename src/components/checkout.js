import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCartContext } from "../hooks/useCartContext";

const stripePromise = loadStripe("pk_test_3YC1wULDvJhGMryXNN1JllJJ");

const redirectToCheckout = async (event, items) => {
  event.preventDefault();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    items: items,
    successUrl: `http://localhost:8000/?success=true`,
    cancelUrl: `http://localhost:8000/?success=false`,
    billingAddressCollection: "auto",
    shippingAddressCollection: {
      allowedCountries: ["US"]
    }
  });
  if (error) {
    console.warn("Error:", error);
  }
};

function Checkout({ className, children, items }) {
  const { clearCart } = useCartContext();

  return (
    <button
      className={className}
      onClick={event => {
        clearCart();
        redirectToCheckout(event, items);
      }}
    >
      {children}
    </button>
  );
}

export default Checkout;
