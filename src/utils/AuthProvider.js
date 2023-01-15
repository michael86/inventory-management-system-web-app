import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUserAuthenticated, setUserToken } from "../reducers/userSlice";
import { setStore } from "../localStorage";

import { getStore } from "../localStorage";
import axios from "./axiosInstance";

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

      resolve(res.data);
    });
  });
};

export default ({ children }) => {
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async () => await isAuthenticated();

    isAuth().then((res) => {
      if (!res.status) {
        dispatch(setUserAuthenticated(false));
        setLoader(false);
        return; //404 not found or what ever
      }

      dispatch(setUserAuthenticated(true));
      dispatch(setUserToken(res.token));
      setStore({ key: "token", data: res.token });
      setLoader(false);
    });
  }, [window.location.href]);

  if (loader) return <h1>Loadign</h1>; //loader here;

  return children;
};
