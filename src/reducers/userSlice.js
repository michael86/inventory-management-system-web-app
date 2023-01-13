import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore, updateStore } from "../localStorage";

const initialState = {
  id: "",
  email: "",
  company: "",
  authenticated: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUserAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    setUserToken: (state, { payload }) => {
      state.token = payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserPassword: (state, action) => {
      state.setPassword = action.payload;
    },
    setUserCompany: (state, action) => {
      state.company = action.payload;
    },

    setUser: (state, { payload }) => {
      //This would call an api to register the user

      state.id = payload.id;
      state.authenticated = payload.id || true;
      state.email = payload.email;
      state.password = payload.password;
      state.company = payload.company;
      state.companyStreet = payload.companyStreet;
      state.companyCity = payload.companyCity;
      state.companyCounty = payload.companyCounty;
      state.companyCountry = payload.companyCountry;
      state.companyPostcode = payload.companyPostcode;
      state.currency = payload.currency || state.curreny || "£";
      state.darkMode = payload.darkMode || false;
      state.pricePlan = payload.pricePlan;
      setStore({ key: "user", data: state });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserId,
  setUserAuthenticated,
  setUserEmail,
  setUserPassword,
  setUserCompany,
  setUser,
  setUserToken,
} = userSlice.actions;

export default userSlice.reducer;
