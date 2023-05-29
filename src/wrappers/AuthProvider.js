import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUserAuthenticated, setUserEmail, setUserToken } from "../reducers/userSlice";
import { setCompany } from "../reducers/companySlice";
import { getStore } from "../localStorage";
import axios from "../utils/axios";

const isAuthenticated = async () => {
  return new Promise((resolve, reject) => {
    const headers = {
      token: getStore("token"),
    };

    axios.get("/auth", { headers }).then((res) => {
      if (res.status !== 200) {
        reject(false);
      }

      resolve(res);
    });
  });
};

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = async () => await isAuthenticated();

    const setUserState = ({ token, email }) => {
      dispatch(setUserAuthenticated(true));
      dispatch(setUserToken(token));
      dispatch(setUserEmail(email));
      dispatch(setCompany(getStore("company") || {}));
    };

    isAuth().then((res) => {
      if (!res.data?.status) {
        dispatch(setUserAuthenticated(false));
        setLoader(false);
        return; //404 not found or what ever
      }

      setUserState(res.data);
      setLoader(false);
    });
  }, [dispatch]);

  if (loader) return <h1>Loadign</h1>; //loader here;

  return children;
};

export default AuthProvider;
