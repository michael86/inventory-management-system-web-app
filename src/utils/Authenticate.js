import React, { useEffect, useState } from "react";

import { getStore, setStore } from "../localStorage";
import { store } from "../app/store";
import { setUserAuthenticated, setUserToken } from "../reducers/userSlice";
import App from "../App";
import { default as axios } from "./axiosInstance";

const Authenticate = () => {
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    (async () => {
      const headers = {
        token: getStore("token"),
      };

      const res = await axios.get("/auth", { headers });

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
