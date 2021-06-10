import React, { createContext, useState, useEffect } from "react";
import { GetStaticProps } from "next";
export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products: products,
        cartContext: [cart, setCart],
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
