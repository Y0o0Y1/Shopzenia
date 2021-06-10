import React, { useContext } from "react";
import Product from "./Product";
import { ProductsContext } from "../components/ProductsContext";
import styles from "../styles/ProductList.module.css";
const ProductsList = () => {
  const data = useContext(ProductsContext);
  return (
    <div>
      <h1>Products</h1>
      <div className={styles.products}>
        {data.products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              imgSrc={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
