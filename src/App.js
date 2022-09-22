import React from "react";

import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/MainNav";

function App() {
  const user = useSelector((state) => state.user);

  return <Nav />;
}

export default App;
