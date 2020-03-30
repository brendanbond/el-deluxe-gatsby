import React, { useState, useContext, createContext } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  const cart = useCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

function useCartContext() {
  return useContext(cartContext);
}

function useCart() {
  const [contents, setContents] = useState([]); // TODO: Save cart to local storage.

  const addToCart = (sku, productId, quantity = 1) => {
    setContents(prevState => {
      let newState = [...prevState];
      const currIndex = newState.findIndex(obj => obj.sku === sku);
      if (currIndex !== -1) {
        newState[currIndex] = {
          ...prevState[currIndex],
          quantity: prevState[currIndex].quantity + quantity
        };
      } else {
        newState.push({ sku, productId, quantity });
      }
      return newState;
    });
  };

  const removeFromCart = sku => {
    setContents(prevState => {
      const newState = prevState.filter(obj => obj.sku !== sku);
      return newState;
    });
  };

  const cart = contents;

  return { cart, addToCart, removeFromCart };
}

export { CartProvider, useCartContext };
