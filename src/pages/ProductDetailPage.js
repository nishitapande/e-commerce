import React, { useCallback, useEffect, useState } from "react";
import { Flex, Typography, Rate, Carousel, Card, Button, Select } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
const { Title, Text } = Typography;
const { Option } = Select;

const ProductDetailPage = () => {
  const { productId } = useParams();
  //   console.log(productId);
  const [quantity, setQuantity] = useState(1);
  const [details, SetDetails] = useState([]);

  const fetchProductDeatils = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    // console.log(response);
    SetDetails(response.data);
    setTotalPrice(response.data.price);
    // console.log(response.rating);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  // call the function when ever quantity changes use usecallback
  const handleQuantityChange = useCallback(() => {
    let price = details.price;
    let totalPrice = price * quantity;
    setTotalPrice(totalPrice);
    // console.log("Total Price", totalPrice);
  }, [quantity]);

  useEffect(() => {
    fetchProductDeatils();
  }, []);

  useEffect(() => {
    handleQuantityChange();
  }, [handleQuantityChange]);

  //

  return (
    <Flex
      justify="space-evenly"
      style={{
        margin: "20px",
      }}
    >
      {/* Image Div */}
      <div
        style={{
          width: "30%",
          height: "300px",
        }}
      >
        <Carousel
          arrows={true}
          style={{
            border: "1px solid transparent",
            backgroundColor: "white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <img
              src={details.image}
              style={{
                width: "90%",
                height: "300px",
                margin: "0 auto",
              }}
            />
          </div>
          <div>
            <img
              src={details.image}
              style={{
                width: "90%",
                height: "300px",
                margin: "0 auto",
              }}
            />
          </div>
        </Carousel>
      </div>
      {/* Center Div */}
      <Flex
        style={{
          width: "40%",
        }}
        vertical
      >
        <Title> {details.title} </Title>
        {/* Rating and count */}
        <Flex align="center" justify="space-between">
          {/* Rating */}
          {/* <Flex align="center" gap="small">
            <Rate disabled allowHalf value={details.rating.rate} />
            <p> ( {details.rating.rate} ) </p>
          </Flex> */}
          {/* <Text
            style={{
              color: "#808080",
            }}
          >
            {" "}
            {details.rating.count} Sold{" "}
          </Text> */}
        </Flex>
        <Title level={3}> $ {details.price} </Title>
        <Flex align="center" gap="large">
          <Text
            style={{
              color: "#808080",
              fontSize: "20px",
            }}
          >
            {" "}
            Category{" "}
          </Text>
          <Text>{details.category}</Text>
        </Flex>

        <Text
          style={{
            color: "#808080",
            fontSize: "20px",
          }}
        >
          {" "}
          Description{" "}
        </Text>
        <Text>{details.description}</Text>
      </Flex>
      {/* Add to cart card */}
      <div>
        <Card
          title="Add Product"
          bordered={false}
          style={{
            width: 300,
            border: "1px solid transparent",
            backgroundColor: "white",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p>Price: ${details.price}</p>
          <Flex align="center" gap="large">
            <p> Quantity</p>
            <Select
              default="1"
              onChange={(e) => {
                setQuantity(parseInt(e));
              }}
              value={quantity}
              style={{
                width: 120,
              }}
            >
              {[...Array(10).keys()].map((num) => (
                <Option key={num + 1} value={num + 1}>
                  {num + 1}
                </Option>
              ))}
            </Select>
          </Flex>

          <p>Total: ${totalPrice} </p>

          <Button
            type="primary"
            style={{
              width: "100%",
            }}
          >
            {" "}
            Add to cart{" "}
          </Button>
        </Card>
      </div>
    </Flex>
  );
};

export default ProductDetailPage;
