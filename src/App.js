import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainNav from "./components/MainNav";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import AccountProfile from "./components/AccountProfile";
import About from "./components/About";
import Contact from "./components/Contact";
import PricePlans from "./components/PricePlans";
import Home from "./components/Home";
import ViewInvoices from "./components/ViewInvoices";
import GenerateInvoice from "./components/GenerateInvoice";

//local storage
import { getStore } from "./localStorage";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { setUser } from "./reducers/userSlice";

function App() {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Once rendered, if we have local storage, set user state to current local state
  useEffect(() => {
    const data = getStore("user");
    data && data.authenticated && dispatch(setUser(data));
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
          <Route path="/account-settings" element={<Settings />} />
          <Route path="/account-profile" element={<AccountProfile />} />
          <Route
            path="/view-invoices"
            element={authenticated ? <ViewInvoices /> : <Navigate to="/" />}
          />
          <Route
            path="/generate-invoice"
            element={authenticated ? <GenerateInvoice /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
