import React from "react";
import Cards from "../components/Cards";

const ProductsPage = () => {
  const apiEndPoint = "https://fakestoreapi.com/products";
  return (
    <>
      <Cards apiEndPoint={apiEndPoint} />
    </>
  );
};

export default ProductsPage;
