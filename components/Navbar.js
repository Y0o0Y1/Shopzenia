import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { ProductsContext } from "../components/ProductsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const cartData = useContext(ProductsContext).cartContext[0];
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1>Shopzenia</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products List</a>
      </Link>
      <Link href="/cart">
        <a>
          Cart
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartData.length}
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
