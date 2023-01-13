import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Home = () => {
  console.log("in home");
  const user = useSelector((state) => state.user);

  console.log(user);

  return user.authenticated ? <Navigate to={"/dashboard"} /> : <h1>home</h1>;
};

export default Home;
