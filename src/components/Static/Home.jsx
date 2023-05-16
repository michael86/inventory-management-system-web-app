import React from "react";

import "../../styles/Home.css";
import Landing from "./Landing";
import About from "./About";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Faq />
    </>
  );
};

export default Home;
