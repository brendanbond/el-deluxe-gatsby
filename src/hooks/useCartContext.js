import React, { useState, useEffect, useContext, createContext } from "react";

import { useProductsContext } from "./useProductsContext";

const cartContext = createContext();

function CartProvider({ children }) {
  const cart = useCart();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

function useCartContext() {
  return useContext(cartContext);
}

function useCart() {
  const { products } = useProductsContext();
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartContents, setCartContents] = useState(() => {
    let localCart;
    try {
      localCart = JSON.parse(localStorage.getItem("el-deluxe-cart"));
    } catch (err) {
      console.error(err.message);
    }
    if (!localCart || !Array.isArray(localCart)) return [];
    return localCart;
  });

  const clearCart = () => {
    console.log("Clear cart fired");
    localStorage.removeItem("el-deluxe-cart");
    setCartContents([]);
  };

  const getCartQuantity = () => {
    return cartContents.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const getCartSubtotal = () => {
    return cartContents.reduce((acc, curr) => {
      let currentProduct = products.find(
        product => curr.productId === product.id
      );
      let currentSku = currentProduct.variants.find(
        variant => curr.sku === variant.sku
      );

      return acc + currentSku.price * curr.quantity;
    }, 0);
  };

  const getCartSalesTax = () => {
    return getCartSubtotal() * 0.0825;
  };

  const getCartGrandTotal = () => {
    return getCartSubtotal() + getCartSalesTax();
  };

  useEffect(() => {
    try {
      localStorage.setItem("el-deluxe-cart", JSON.stringify(cartContents));
    } catch (err) {
      console.error(err);
    }
  }, [cartContents]);

  const addToCart = (sku, productId, quantity = 1) => {
    setCartContents(prevState => {
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
      console.log("Cart has new state:", newState);
      return newState;
    });
  };

  const removeFromCart = sku => {
    setCartContents(prevState => {
      const newState = prevState.filter(obj => obj.sku !== sku);
      return newState;
    });
  };

  const toggleCart = forcedState => {
    console.log("toggleCart fired");
    setCartIsShown(prevState => forcedState || !prevState);
  };

  return {
    cartContents,
    addToCart,
    removeFromCart,
    cartIsShown,
    getCartQuantity,
    getCartSubtotal,
    getCartSalesTax,
    getCartGrandTotal,
    toggleCart,
    clearCart
  };
}

export { CartProvider, useCartContext };
