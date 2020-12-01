import React, { Component, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Header";
import SignUp from "./Components/Auth/SignUp";
import UserContext from "./context/UserContext";
import Axios from "axios";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:3030/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:3030/users/", {
          headers: { "x-auth-token": token },
        });
        console.log(tokenRes.data);
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <div>
      <UserContext.Provider value={(userData, setUserData)}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={(Landing, Navbar)}>
            <Landing />
          </Route>
          <Route path={"/sign-in"} component={SignIn}></Route>
          <Route path={"/sign-up"} component={SignUp}></Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}
