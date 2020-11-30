import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3040/u/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        technology: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: "",
          lastName: "",
          email: "",
          password: "",
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="sign-in-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={this.name}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={this.lastName}
              type="text"
              placeholder="Lastname"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={this.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={this.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
