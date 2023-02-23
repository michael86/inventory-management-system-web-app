import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MainNav from "./components/MainNav";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
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

import AddStock from "./components/Stock/AddStock";
import ManageStock from "./components/Stock/ManageStock";

import { useSelector } from "react-redux";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

//Private routes are all routes that a user needs to be logged in for.
//When the user navigates to a private route for the first time, a token is expected to be sent to the auth route in the backend.
//If they fail auth, then they're redirected to the homepage (/)
//If they pass, then a token is not sent whilst navigating to any pri route.
//If they navigate to a pub route, then attempt to renter a pri route, a token will be sent again. Repeat process
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
