import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { setStore } from "../localStorage";
import { useEffect, useState } from "react";
import { setUserToken } from "../reducers/userSlice";

import { store } from "../app/store";

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(); // initially undefined

  //Had to use useEffect, bcause making this function async and awaiting caused react to moan about route children being objects.
  useEffect(() => {
    axios.put(`${process.env.REACT_APP_API_URL}/auth`).then((res) => {
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
  }, []);

  if (isAuth === undefined) return;

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
