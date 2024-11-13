import { Flex, Card, Typography, Select, Button, Row, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const { Title } = Typography;

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  // console.log("cart: ", cart);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalQuantity, totalPrice };
  };

  return (
    <>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            // paddingTop: "20px",
          }}
        >
          <Title level={3}>Your cart is empty</Title>
          <p>
            To add items to the cart, please visit the product page and select
            the desired quantity.
          </p>
        </div>
      ) : (
        <Row
          style={{
            margin: "0 20px",
          }}
        >
          <Col span={18}>
            <div
              style={{
                // backgroundColor: "red",
                width: "100%",
              }}
            >
              <Flex vertical>
                {cart?.map((item) => {
                  return (
                    <div
                      style={{
                        // width: "70%",
                        border: "1px solid transparent",
                        backgroundColor: "white",
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                        // height: "auto",
                        marginBottom: "20px",
                        // backgroundColor: "red",
                      }}
                    >
                      <CartItem product={item} key={item.id} />
                    </div>
                  );
                })}
              </Flex>
              {/* <h2> hello </h2> */}
            </div>
          </Col>
          <Col span={6}>
            <div
              style={
                {
                  // width: "30%",
                  // backgroundColor: "blue",
                }
              }
            >
              <Flex justify="center">
                <Card
                  title="Cart Total"
                  bordered={false}
                  style={{
                    width: 300,
                    border: "1px solid transparent",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Flex align="center" gap="large">
                    <p> Total Products: {getTotalQuantity().totalQuantity}</p>
                  </Flex>

                  <p>Total: ${getTotalQuantity().totalPrice} </p>

                  <Button
                    type="primary"
                    style={{
                      width: "100%",
                    }}
                  >
                    {" "}
                    Checkout{" "}
                  </Button>
                </Card>
              </Flex>

              {/* <h2>hi</h2> */}
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CartPage;
