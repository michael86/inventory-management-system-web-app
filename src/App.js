import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import MainNav from "./components/MainNav";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import PricePlans from "./components/PricePlans";
import Home from "./components/Home";
import ViewInvoices from "./components/ViewInvoices";
import GenerateInvoice from "./components/GenerateInvoice";
import AddStock from "./components/AddStock";
import ManageStock from "./components/ManageStock";

//Reducers
import { setUser } from "./reducers/userSlice";
import { setDateObject } from "./reducers/dateObjectSlice";

//local storage
import { getStore } from "./localStorage";

//Utils
import { createDateObject } from "./utils";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  dispatch(
    setDateObject(
      createDateObject(
        JSON.parse(JSON.stringify(useSelector((state) => state.stock.stock)))
      )
    )
  );

  //Once rendered, if we have local storage, set user state to current local state
  useEffect(() => {
    const data = getStore("user");
    data && data.authenticated && dispatch(setUser(data));
  }, [dispatch]);

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
          <Route path="/account-profile" element={<Profile />} />
          <Route
            path="/view-invoices"
            element={authenticated ? <ViewInvoices /> : <Navigate to="/" />}
          />
          <Route
            path="/generate-invoice"
            element={authenticated ? <GenerateInvoice /> : <Navigate to="/" />}
          />
          <Route
            path="/manage-stock"
            element={authenticated ? <ManageStock /> : <Navigate to="/" />}
          />
          <Route
            path="/view-stock"
            element={authenticated ? <GenerateInvoice /> : <Navigate to="/" />}
          />
          <Route
            path="/add-stock"
            element={authenticated ? <AddStock /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
