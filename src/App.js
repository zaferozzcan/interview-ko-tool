import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
    };
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/" component={(Landing, Navbar)}>
          <Navbar user_id={this.state.user_id} />
          <Landing />
        </Route>
      </div>
    );
  }
}
