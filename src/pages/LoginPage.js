import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Input, Flex, Button } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { login, setUser } from "../store/slices/user/userSlice";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username,
          password,
        },
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      const token = response.data.token;
      console.log(token);

      // Dispatch the login action with the token as the payload
      dispatch(setUser(token));
    } catch (error) {
      setError("Some error occurred!");
    }
  };

  return (
    <>
      <Flex
        vertical
        style={{
          width: "500px",
          margin: "20vh auto",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          border: "1px solid transparent",
          borderRadius: "10px",
        }}
        gap="middle"
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Login
        </h2>
        <Input
          size="large"
          placeholder="Username"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="primary" onClick={handleLogin}>
          {" "}
          Login{" "}
        </Button>
      </Flex>
    </>
  );
};

export default LoginPage;
