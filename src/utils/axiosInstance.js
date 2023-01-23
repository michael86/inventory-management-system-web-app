import axios from "axios";
import { store } from "../app/store";
import { setStore } from "../localStorage";
import { setUserToken } from "../reducers/userSlice";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    console.log("response ", response);
    if (response?.data?.token) {
      console.log("setting user token");
      store.dispatch(setUserToken(response.data.token));
      setStore({ key: "token", data: response.data.token });
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
