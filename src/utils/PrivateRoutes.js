import { Navigate, Outlet } from "react-router-dom";

import { getStore, setStore } from "../localStorage";
import { useEffect, useState } from "react";
import { setUserToken } from "../reducers/userSlice";

import { store } from "../app/store";
import { default as axios } from "./axiosInstance";

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(); // initially undefined

  const getAuth = async () => {
    const headers = {
      token: getStore("token"),
    };
    const res = await axios.get("/auth", { headers }).then((res) => {
      if (res.status !== 200) {
        console.log("something broke", res);
        return;
      }

      if (res.data.token) {
        store.dispatch(setUserToken(res.data.token));
        setStore({ key: "token", data: res.data.token });
      }

      setIsAuth(res.data.status > -1 ? true : false);
    });
  };

  getAuth();

  if (isAuth === undefined) return;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
