import { useState } from "react";
import { useProductsContext } from "./useProductContext";

function useFormInput() {
  const { products } = useProductsContext();
  const [formInput, setFormInput] = useState({
    product: Object.keys(products)[0],
    variant: products[Object.keys(products)[0]].variants[0].sku,
    quantity: "1"
  });

  const handleFormInputChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setFormInput(() => {
      if (key === "product") {
        return {
          ...formInput,
          product: value,
          variant: products[value].variants[0].sku
        };
      } else {
        return { ...formInput, [key]: value };
      }
    });
  };

  return { formInput, handleFormInputChange };
}

export default useFormInput;
