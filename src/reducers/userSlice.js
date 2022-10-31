import { createSlice } from "@reduxjs/toolkit";
import { setStore, updateStore } from "../localStorage";

const initialState = {
  id: "",
  email: "",
  company: "",
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUserAuthenticated: (state) => {
      state.authenticated = !state.authenticated;

      updateStore({
        key: "user",
        data: { authenticated: state.authenticated },
      });
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

      console.log(payload);
      state.id = payload.id;
      state.authenticated = payload.id || true;
      state.email = payload.email;
      state.password = payload.password;
      state.company = payload.company;
      state.companyStreet = payload.companyStreet;
      state.companyCity = payload.City;
      state.companyCounty = payload.County;
      state.companyCountry = payload.Country;
      state.companyPostcode = payload.postcode;
      state.darkMode = false;

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
} = userSlice.actions;

export default userSlice.reducer;
