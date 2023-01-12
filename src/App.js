import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

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

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddStock from "./components/AddStock";
import ManageStock from "./components/ManageStock";
import { isAuthenticated } from "./utils";

function App() {
  const [authenticated, setAuthenticated] = useState(); // Make function that returns if authenticated

  useEffect(() => {
    (async () => setAuthenticated(await isAuthenticated()))();
  }, []);

  return (
    <>
      <MainNav authenticated={authenticated} />
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Dashboard /> : <Home />}
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
          state={"autheticated"}
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
    </>
  );
}

export default App;
