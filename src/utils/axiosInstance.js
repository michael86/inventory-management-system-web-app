import axios from "axios";
import { store } from "../app/store";
import { getStore, setStore } from "../localStorage";
import { setUserToken } from "../reducers/userSlice";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const token = getStore("token");
  config.headers.token = token;

  return config;
});

instance.interceptors.response.use(
  function (response) {
    if (response?.data?.token) {
      store.dispatch(setUserToken(response.data.token));
      setStore({ key: "token", data: response.data.token });
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// "Qb3gg^y")p8!iJ8Zm3xgWg5ApE7q_KM3R"b_MGO^5g4j)JcEiq_1674587267353"

export default instance;
