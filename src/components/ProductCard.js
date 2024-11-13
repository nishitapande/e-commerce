import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Card, Typography, Rate, Flex, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/cart/cartSlice";
const { Text } = Typography;
const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Card
      hoverable
      style={{
        width: 300,
        // height:
      }}
      cover={
        <img
          alt=""
          src={product?.image}
          style={{
            height: 180,
            width: 240,
            margin: "0 auto",
            padding: "10px",
          }}
        />
      }
    >
      <Flex gap={10} justify="space-between" align="flex-start">
        <Text strong style={{ fontSize: 16, color: "#333", width: "60%" }}>
          {" "}
          {product?.title}
        </Text>
        <Rate
          allowHalf
          defaultValue={2.7}
          disabled
          style={{
            fontSize: "12px",
          }}
        />
      </Flex>
      <Flex
        gap={10}
        justify="space-between"
        vertical
        style={{
          marginTop: "5px",
        }}
      >
        <Text> Category: {product?.category} </Text>
        <Text> Price: {product?.price} </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        style={{
          padding: "10px",
        }}
      >
        <Link to={`/product/${product?.id}`}>
          <Button size="middle">View </Button>
        </Link>
        <Button
          type="primary"
          size="middle"
          onClick={() => {
            dispatch(
              addToCart({
                id: product?.id,
                title: product?.title,
                price: product?.price,
                image: product?.image,
              })
            );
            <Alert type="success" showIcon message="Product Added" />;
            // console.log("Product added to cartL ", cart);
          }}
        >
          Add to Cart <ShoppingCartOutlined />{" "}
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
