import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  authenticated: false,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const { email, authenticated, token } = payload;
      state.email = email;
      state.authenticated = authenticated;
      state.token = token;
    },
    setUserAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    setUserToken: (state, { payload }) => {
      state.token = payload;
    },
    setUserEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserId,
  setUserAuthenticated,
  setUserEmail,
  setUserPassword,
  setUser,
  setUserToken,
} = userSlice.actions;

export default userSlice.reducer;
