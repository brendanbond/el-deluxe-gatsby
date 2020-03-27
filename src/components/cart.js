import React from "react";
import { useCartContext } from "../hooks/useCartContext";
import { useProductsContext } from "../hooks/useProductContext";

function Cart() {
  const { products } = useProductsContext();
  const { cart } = useCartContext();

  return (
    <div>
      <ul>
        {cart.map(item => {
          return (
            <li key={item.sku}>
              {products[item.productId].name} -{" "}
              {
                products[item.productId].variants.find(
                  variant => variant.sku === item.sku
                ).name
              }{" "}
              x {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
