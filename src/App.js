import React from "react";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";

import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Static/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Account/Settings";
import Profile from "./components/Account/Profile";

import Contact from "./components/Static/Contact";
import PricePlans from "./components/Static/PricePlans";
import Register from "./components/Static/Register";
import ViewInvoices from "./components/Invoices/ViewInvoices";
import GenerateInvoice from "./components/Invoices/GenerateInvoice";
import AddStock from "./components/Stock/AddStock";
import ManageStock from "./components/Stock/ManageStock";
import ForgotPassword from "./components/Account/ForgotPassword";
import ResetPassword from "./components/Account/ResetPassword";
import AddUser from "./components/Users/AddUser";
import ManageUsers from "./components/Users/ManageUsers";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-lightbox/style.css";
import "./App.css";

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
  { path: "/add-user", element: <AddUser /> },
  { path: "/manage-users", element: <ManageUsers /> },
];

function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route
            path="/"
            element={!user.authenticated ? <Home /> : <Navigate to={"/dashboard"} />}
            exact
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price-plans" element={<PricePlans />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />

          {PriRoutes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                element={user.authenticated ? route.element : <Navigate to={"/"} />}
              />
            );
          })}
        </Routes>
      </main>
    </>
  );
}

export default App;
