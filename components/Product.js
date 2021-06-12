import React, { useContext } from "react";
import Image from "next/image";
import { ProductsContext } from "./ProductsContext";
import styles from "../styles/Product.module.css";
const Product = ({ imgSrc, title, price, cartToggler, quantity }) => {
  const [cart, setCart] = useContext(ProductsContext).cartContext;
  const product = { title: title, price: price, img: imgSrc };
  const addToCart = () => {
    setCart((curr) => [...curr, product]);
  };
  const removeFromCart = (product) => {
    const indexOfItemToRemove = cart.findIndex(
      (item) => item.title === product.title
    );
    console.log(product);
    console.log(cart.lastIndexOf(product));
    cart.splice(indexOfItemToRemove, 1);
    setCart((curr) => [...curr]);
    cart.sort();
  };
  return cartToggler ? (
    <div className={styles.cartCard}>
      <div>
        <h5>{title} </h5>
        <Image layout="fixed" src={imgSrc} width={250} height={120} />
        <p> {price}$</p>
      </div>
      <div>
        <h5>Quantity {quantity}</h5>
        <a onClick={addToCart} className="btn">
          +1
        </a>
        <a onClick={() => removeFromCart(product)} className="btn">
          -1
        </a>
      </div>
    </div>
  ) : (
    <div className={styles.product}>
      <h5>{title} </h5>
      <Image layout="fixed" src={imgSrc} width={250} height={120} />
      <p> {price}$</p>
      <a onClick={addToCart} className="btn">
        Add To cart
      </a>
    </div>
  );
};

export default Product;
