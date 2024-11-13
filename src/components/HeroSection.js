import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import HeroCard from "./HeroCard";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background: "#364d79",
};

const HeroSection = () => {
  const [products, setProducts] = useState([]); // Store 3 random products

  const random = Math.floor(Math.random() * 6);

  // Function to fetch products sequentially and select random products
  const getRandomProducts = async () => {
    try {
      // Fetch the electronics products
      const electronicsRes = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const randomElectronics = electronicsRes.data[random];

      // Fetch the clothing products
      const clothingRes = await axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const randomClothing = clothingRes.data[random];

      // Fetch the jewelry products
      const jeweleryRes = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const randomJewelery = jeweleryRes.data[random];

      // Set the products state with the 3 random products
      setProducts([randomElectronics, randomClothing, randomJewelery]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  console.log("products", products);

  return (
    <Carousel
      autoplay
      style={{
        width: "100vw",
        margin: "0 auto",
        height: "60vh",
        marginBottom: "30px",
        padding: "0 20px",
      }}
      speed={0.8}
    >
      {products?.map((product, index) => (
        <div key={index}>
          <HeroCard product={product} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSection;
