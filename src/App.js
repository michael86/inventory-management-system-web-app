import React from "react";

import { Routes, Route } from "react-router-dom";

import MainNav from "./components/MainNav";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
// import About from "./components/About";
import Contact from "./components/Contact";
import PricePlans from "./components/PricePlans";
import ViewInvoices from "./components/ViewInvoices";
import GenerateInvoice from "./components/GenerateInvoice";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStock from "./components/AddStock";
import ManageStock from "./components/ManageStock";

const PriRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/account-settings", element: <Settings /> },
  { path: "/account-profile", element: <Profile /> },
  { path: "/view-invoices", element: <ViewInvoices /> },
  { path: "/generate-invoice", element: <GenerateInvoice /> },
  { path: "/manage-stock", element: <ManageStock /> },
  { path: "/add-stock", element: <AddStock /> },
];

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price-plans" element={<PricePlans />} />

        {PriRoutes.map((route) => {
          return (
            <Route element={<PrivateRoutes />}>
              <Route path={route.path} element={route.element} />
            </Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
