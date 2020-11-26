import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3040/u/login", this.state)
      .then((res) => localStorage.setItem("token", res.data.accessToken))
      .catch((err) => console.log(err));
    this.setState({
      email: "",
      password: "",
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="sign-in-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
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
}
