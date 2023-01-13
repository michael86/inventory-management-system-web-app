import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStore, setStore } from "../localStorage";
import { store } from "../app/store";
import { setUserAuthenticated, setUserToken } from "../reducers/userSlice";
import App from "../App";

axios.interceptors.request.use(
  (config) => {
    config.headers["token"] = getStore("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Authenticate = () => {
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/auth`);

      if (res.status !== 200 || res.data.status === -1) {
        store.dispatch(setUserAuthenticated(false));
        setAuthenticated(false);
      }

      if (res.data.token) {
        store.dispatch(setUserToken(res.data.token));
        store.dispatch(setUserAuthenticated(true));
        setStore({ key: "token", data: res.data.token });
        setAuthenticated(true);
      }
    })();
  });

  if (authenticated === undefined) {
    return; //App init component
  }

  return <App />;
};

export default Authenticate;
