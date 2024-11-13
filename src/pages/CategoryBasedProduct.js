import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { Flex } from "antd";

const CategoryBasedProduct = () => {
  const { categoryName } = useParams();
  const apiEndPoint = `https://fakestoreapi.com/products/category/${categoryName}`;
  return (
    <Flex justify="flex-start">
      <Cards apiEndPoint={apiEndPoint} />
    </Flex>
  );
};

export default CategoryBasedProduct;
