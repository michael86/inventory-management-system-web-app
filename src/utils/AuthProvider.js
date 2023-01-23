import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setUserAuthenticated,
  setUserEmail,
  setUserToken,
} from "../reducers/userSlice";
import { getStore } from "../localStorage";
import axios from "./axiosInstance";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = async () => {
  return new Promise((resolve, reject) => {
    const headers = {
      token: getStore("token"),
    };

    axios.get("/auth", { headers }).then((res) => {
      if (res.status !== 200) {
        console.error(res);
        reject(false);
      }

      resolve(res);
    });
  });
};

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async () => await isAuthenticated();

    isAuth().then((res) => {
      if (!res.data?.status) {
        dispatch(setUserAuthenticated(false));
        setLoader(false);
        return; //404 not found or what ever
      }

      dispatch(setUserAuthenticated(true));
      !user.email && dispatch(setUserEmail(res.data.email));
      setLoader(false);
    });
  }, [window.location.href]);

  if (loader) return <h1>Loadign</h1>; //loader here;

  return children;
};

export default AuthProvider;
