import axios from "axios";
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
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3040/u")
      .then((res) =>
        this.setState({
          user: res.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="container">
        <Navbar user={this.state.user} />
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
