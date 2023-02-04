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
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

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

  console.log("userAuth", user.authenticated);

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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {PriRoutes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                user.authenticated ? route.element : <Navigate to={"/"} />
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
