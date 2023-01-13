import React, { useEffect, useState } from "react";

import { Routes, Route, Navigate, RouteObject } from "react-router-dom";

import MainNav from "./components/MainNav";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import PricePlans from "./components/PricePlans";
import ViewInvoices from "./components/ViewInvoices";
import GenerateInvoice from "./components/GenerateInvoice";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStock from "./components/AddStock";
import ManageStock from "./components/ManageStock";

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price-plans" element={<PricePlans />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/account-settings" element={<Settings />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/account-profile" element={<Profile />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/view-invoices" element={<ViewInvoices />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/generate-invoice" element={<GenerateInvoice />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/manage-stock" element={<ManageStock />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/add-stock" element={<AddStock />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
