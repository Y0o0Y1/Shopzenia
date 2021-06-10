import React from "react";
import ProductsList from "../components/ProductsList";
import Head from "next/head";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Shopzenia | Products</title>
      </Head>

      <ProductsList />
    </div>
  );
};

export default Products;
