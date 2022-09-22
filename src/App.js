import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Home</h1>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <h1>About</h1>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <h1>Contatc</h1>
              </>
            }
          />
          <Route
            path="/price-plan"
            element={
              <>
                <h1>Price Plan</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
