import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MainNav from "./components/MainNav";

import Home from "./components/Home";
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

import { useSelector } from "react-redux";
import AuthProvider from "./utils/AuthProvider";

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
  const user = useSelector((state) => state.user);

  return (
    <>
      <MainNav />
      <Routes>
        <Route
          path="/"
          element={
            !user.authenticated ? <Home /> : <Navigate to={"/dashboard"} />
          }
          exact
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price-plans" element={<PricePlans />} />

        {PriRoutes.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
      </Routes>
    </>
  );
}

export default App;
