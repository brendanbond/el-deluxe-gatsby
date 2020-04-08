import React, { useState, useEffect, useContext, createContext } from "react";
import queryString from "query-string";

const CheckoutContext = createContext();

function CheckoutProvider({ children, location }) {
  const checkout = useCheckout(location);
  return (
    <CheckoutContext.Provider value={checkout}>
      {children}
    </CheckoutContext.Provider>
  );
}

function useCheckoutContext() {
  return useContext(CheckoutContext);
}

function useCheckout(location) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (!hasCheckedOut && query.success && isCheckingOut) {
      setIsCheckingOut(false);
      setHasCheckedOut(true);
    }

    if (hasCheckedOut) {
      setTimeout(() => setHasCheckedOut(false), 3000);
    }
  }, [location, hasCheckedOut, isCheckingOut])

  return {isCheckingOut, setIsCheckingOut, hasCheckedOut};
}

export { CheckoutProvider, useCheckoutContext };
