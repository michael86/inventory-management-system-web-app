import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainNav from "./components/MainNav";
import Dashboard from "./components/Dashboard";
import AccountSettings from "./components/AccountSettings";
import AccountProfile from "./components/AccountProfile";
import About from "./components/About";
import Contact from "./components/Contact";
import PricePlans from "./components/PricePlans";
import Home from "./components/Home";

//local storage
import { getStore } from "./localStorage";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { registerUser } from "./reducers/userSlice";

function App() {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Once rendered, if we have local storage, set user state to current local state
  useEffect(() => {
    // const data = getStore();
    // data && data.authenticated && dispatch(registerUser(data));
  }, []);

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
