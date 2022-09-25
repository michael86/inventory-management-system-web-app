import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

//components are heavily state based.
import MainNav from "./components/MainNav";
import Dashboard from "./components/Dashboard";
import AccountSettings from "./components/AccountSettings";
import AccountProfile from "./components/AccountProfile";

//Pages are pretty much static and don't utilize state
import About from "./pages/About";
import Contact from "./pages/Contact";
import PricePlans from "./pages/PricePlans";
import Home from "./pages/Home";

//css
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { authenticated } = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route
            path="/"
            element={authenticated ? <Navigate to="/dashboard" /> : <Home />}
          ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price-plans" element={<PricePlans />} />
          <Route
            path="/dashboard"
            element={!authenticated ? <Navigate to="/" /> : <Dashboard />}
          />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/account-profile" element={<AccountProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
