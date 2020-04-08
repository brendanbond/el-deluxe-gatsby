import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../images/logo.png";

import { useCartContext } from "../hooks/useCartContext";

const Checkout = ({ className, children }) => {
  const { cartContents, cartQuantity, cartGrandTotal } = useCartContext();

  const onToken = async (token, addresses) => {
    const items = cartContents.map((item) => ({
      sku: item.sku,
      quantity: item.quantity,
    }));

    try {
      let response = await fetch("/.netlify/functions/orderCreate", {
        method: "POST",
        body: JSON.stringify({
          token,
          order: {
            currency: "usd",
            items,
            shipping: {
              name: addresses.shipping_name,
              address: {
                line1: addresses.shipping_address_line1,
                line2: addresses.shipping_address_line2 || "",
                city: addresses.shipping_address_city,
                state: addresses.shipping_address_state,
                postal_code: addresses.shipping_address_zip,
                country: addresses.shipping_address_country_code,
              },
            },
          },
        }),
      });

      return response.json();
    } catch (err) {
      alert(err.message);
    }

    localStorage.setItem("el-deluxe-cart", "{}");

    // Redirect to order confirmation page
    // navigate(`/order?id=${response.data.id}`)
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      name="Electric Deluxe Recorders" // the pop-in header title
      description={`${cartQuantity} Items`} // the pop-in header subtitle
      image={Logo} // the pop-in header image (default none)
      panelLabel="Pay" // prepended to the amount in the bottom pay button
      amount={cartGrandTotal} // cents
      currency="USD"
      locale="en"
      shippingAddress
      billingAddress
      zipCode
      allowRememberMe
    >
      <button className={className}>{children}</button>
    </StripeCheckout>
  );
};

export default Checkout;

// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("process.env.STRIPE_PUBLISHABLE_KEY");

// const redirectToCheckout = async (event, items) => {
//   event.preventDefault();
//   const stripe = await stripePromise;
//   const { error } = await stripe.redirectToCheckout({
//     items: items,
//     successUrl: process.env.URL + `?success=true`,
//     cancelUrl: process.env.URL,
//     billingAddressCollection: "auto",
//     shippingAddressCollection: {
//       allowedCountries: ["US"],
//     },
//   });
//   if (error) {
//     console.warn("Error:", error);
//   }
// };

// function Checkout({ className, children, items }) {
//   return (
//     <button
//       className={className}
//       onClick={(event) => {
//         redirectToCheckout(event, items);
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default Checkout;
