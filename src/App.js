import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Header";
import SignUp from "./Components/Auth/SignUp";

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
        <Navbar user_id={this.state.user_id} />
        <Switch>
          <Route exact path="/" component={(Landing, Navbar)}>
            <Landing />
          </Route>
          <Route path={"/sign-in"} component={SignIn}></Route>
          <Route path={"/sign-up"} component={SignUp}></Route>
        </Switch>
      </div>
    );
  }
}
