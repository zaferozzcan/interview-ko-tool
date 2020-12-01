import React, { Component, useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";

export default function SignIn() {
  const { setData, setUserData } = useContext(UserContext);
  const { loginUser, setLoginUser } = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:3040/u/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      // err.response.data.msg && setError(err.response.data.msg);
    }
  };

  function handleChange(e) {
    setLoginUser({
      [e.target.id]: e.target.value,
    });
  }
  return (
    <div className="sign-in-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">
          Are you new around here? <Link to={"/sign-up"}>Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
}
