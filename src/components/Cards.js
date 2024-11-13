import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import axios from "axios";
import ProductCard from "./ProductCard";
const Cards = ({ apiEndPoint }) => {
  const [products, setProducts] = useState([]);
  // Fetching products
  const fetchProducts = async () => {
    const fetchedProducts = await axios.get(
      apiEndPoint // Replace with your API endpoint
    );
    setProducts(fetchedProducts.data);
    console.log(fetchedProducts.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        marginTop: "20px",
        overflowY: "hidden",
      }}
    >
      <Flex gap="large" wrap align="center" justify="space-evenly">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Flex>
    </div>
  );
};

export default Cards;
