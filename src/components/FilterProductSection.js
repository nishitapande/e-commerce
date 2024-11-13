import { Tabs } from "antd";
import React from "react";

import Cards from "./Cards";

const items = [
  {
    key: "1",
    label: "All",
    children: <Cards apiEndPoint="https://fakestoreapi.com/products" />,
  },
  {
    key: "2",
    label: "Electronics",
    children: (
      <Cards apiEndPoint="https://fakestoreapi.com/products/category/electronics" />
    ),
  },
  {
    key: "3",
    label: "Jewelery",
    children: (
      <Cards apiEndPoint="https://fakestoreapi.com/products/category/jewelery" />
    ),
  },
  {
    key: "4",
    label: "Men's Clothings",
    children: (
      <Cards apiEndPoint="https://fakestoreapi.com/products/category/men's clothing" />
    ),
  },
  {
    key: "5",
    label: "Women's Clothing",
    children: (
      <Cards apiEndPoint="https://fakestoreapi.com/products/category/women's clothing" />
    ),
  },
];

const FilterProductSection = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Tabs
            defaultActiveKey="1"
            items={items}
            style={{
              width: "100%",
              // margin: "20px",
              overflow: "hidden",
              alignContent: "center",
            }}
            centered={true}
          />
        </div>
        {/* <div>Div2</div> */}
      </div>
    </div>
  );
};

export default FilterProductSection;
