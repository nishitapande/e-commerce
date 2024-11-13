import React from "react";
import { useDispatch } from "react-redux";
import { Card, Typography, Select, Button, Flex } from "antd";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../store/slices/cart/cartSlice";

const { Title } = Typography;
const { Option } = Select;

function CartItem({ product }) {
  const { title, image, price, quantity, id } = product;
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "100%" }}>
      <Flex gap="large">
        <div style={{ width: "30%" }}>
          <img
            src={image}
            alt={title}
            style={{
              border: "1px solid #c0c0c0",
              borderRadius: "10px",
              width: "100%",
              height: "50%",
              padding: "5px",
            }}
          />
        </div>
        <Flex
          vertical
          style={{
            // width: "50%",
            margin: "0 20px",
          }}
        >
          <Title level={2}>{title}</Title>
          <Flex align="center" gap="large">
            <p>Quantity</p>
            <Select
              defaultValue={quantity}
              onChange={(e) => {
                const selectedQuantity = parseInt(e);
                if (selectedQuantity > quantity) {
                  dispatch(incrementQuantity({ id }));
                } else {
                  dispatch(decrementQuantity({ id }));
                }
              }}
              value={quantity}
              style={{ width: 120 }}
            >
              {[...Array(10).keys()].map((num) => (
                <Option key={num + 1} value={num + 1}>
                  {num + 1}
                </Option>
              ))}
            </Select>
            <Button
              type="primary"
              danger
              onClick={() => dispatch(removeItem(id))}
            >
              Remove
            </Button>
          </Flex>
        </Flex>
        <Title
          level={4}
          style={{
            width: "20%",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "#888",
            }}
          >
            Price:
          </span>{" "}
          ${price * quantity}
        </Title>
      </Flex>
    </Card>
  );
}

export default CartItem;
