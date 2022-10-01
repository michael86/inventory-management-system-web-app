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

    setUser: (state, action) => {
      //This would call an api to register the user
      state.id = action.payload.id;
      state.authenticated = action.payload.id || true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.company = action.payload.company;

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
