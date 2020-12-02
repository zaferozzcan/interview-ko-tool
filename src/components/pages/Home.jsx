import React, { Component, useContext } from "react";
import Subject from "../Subject/Subject";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);
  return <div>{userData.user && userData.user.id ? <Subject /> : null}</div>;
}
