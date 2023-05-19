import React from "react";

import "../../styles/Home.css";
import Landing from "./Landing";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
