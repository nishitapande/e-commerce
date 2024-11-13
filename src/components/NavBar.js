import React, { useState } from "react";
import {
  ProductOutlined,
  HomeOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Avatar, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const items = [
  {
    label: "Home",
    key: "",
    icon: <HomeOutlined />,
  },
  {
    label: "Products",
    key: "products",
    icon: <ProductOutlined />,
  },
  {
    label: "Categories",
    key: "categories",
    icon: <MenuOutlined />,
    children: [
      {
        label: "Electronics",
        key: "electronics",
      },
      {
        label: "Men's Clothing",
        key: "men's clothing",
      },
      {
        label: "Women's Clothing",
        key: "women's clothing",
      },
      {
        label: "Jewelery",
        key: "jewelery",
      },
    ],
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const count = cartItems.length;

  // Safely access token from user state
  const loggedIn = useSelector((state) => state.user?.token);

  const onClick = (e) => {
    setCurrent(e.keyPath[0]);
    if (e.keyPath[1] === "categories") {
      navigate(`/categories/${e.keyPath[0]}`);
    } else {
      navigate(`/${e.keyPath[0]}`);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          height: "50px",
          alignItems: "center",
          margin: "0 20px",
        }}
      >
        <div>E-Commerce</div>
        <div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#333",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <Badge
                  count={count === 0 ? 0 : count}
                  offset={[-5, 5]} // Adjust offset to control badge position
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <Avatar
                    shape="square"
                    icon={<ShoppingCartOutlined />}
                    style={{
                      backgroundColor: "transparent",
                      color: "#333",
                    }}
                  />
                </Badge>
              </div>
              <span style={{ marginLeft: "8px" }}>Cart</span>
            </button>
          </Link>
          {loggedIn ? (
            <Link to="/logout">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#333",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#333",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
