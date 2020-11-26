import { Link } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Link to={"/"}>
          <Navbar.Brand>IqsBucket </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {this.props.user_id ? (
            <>
              <Link to={"/home"}>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link to={"/quiz"}>
                <Nav.Link>Quiz</Nav.Link>
              </Link>
            </>
          ) : null}
        </Nav>
        <Nav.Link href="/sign-in" className="mr-sm-1">
          Sign In
        </Nav.Link>
      </Navbar>
    );
  }
}
