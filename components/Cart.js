import React, { useContext } from "react";
import styles from "../styles/Cart.module.css";
import { ProductsContext } from "../components/ProductsContext";

import Product from "./../components/Product";

const Cart = () => {
  const [cart, setCart] = useContext(ProductsContext).cartContext;
  let productsToRender = [];
  if (cart.length <= 0)
    return (
      <div className={styles.contianer}>
        <h1>Your Cart Is empty</h1>
      </div>
    );
  else {
    const totalPrice = Math.ceil(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
    let counter = {};
    cart.forEach((obj) => {
      let title = obj.title;
      var key = title;
      counter[key] = (counter[key] || 0) + 1;
    });
    cart.map((product) => {
      product.quantity = counter[product.title];
    });
    console.log(cart);
    return (
      <div className="cartContainer">
        <h1>Total Items {cart.length}</h1>
        <div className={styles.cart}>
          <div className={styles.products}>
            {cart.map((product) => {
              if (!productsToRender.includes(product.title)) {
                productsToRender.push(product.title);
                return (
                  <Product
                    key={Math.random()}
                    cartToggler={true}
                    title={product.title}
                    imgSrc={product.img}
                    price={product.price}
                    quantity={product.quantity}
                  />
                );
              } else null;
            })}
          </div>
          <div
            style={{
              display: "grid",
              alignSelf: "start",
              justifyContent: "center",
            }}
          >
            <h2>Total Price = {totalPrice}$</h2>
            <a style={{ alignSelf: "center" }} className="btn">
              Place Order
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
