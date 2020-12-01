import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import React, { Component, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

export default function Header() {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Link to={"/"}>
          <Navbar.Brand>IqsBucket </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {userData ? (
            <>
              <Link to={"/home"}>Home</Link>
              <Link to={"/quiz"}>Quiz</Link>
            </>
          ) : null}
        </Nav>
        {userData ? (
          <Link onClick={() => localStorage.clear()} to={"/"}>
            Sign Out
          </Link>
        ) : (
          <Link to={"/sign-in"}>Sign In</Link>
        )}
      </Navbar>
    </div>
  );
}
