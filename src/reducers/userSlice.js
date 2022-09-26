import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  companyName: "",
  stock: [],
  sales: [],
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setAuthenticated: (state) => {
      state.authenticated = !state.authenticated;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.setPassword = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.stock;
    },
    setSales: (state, action) => {
      state.sales = action.sales;
    },
    registerUser: (state, action) => {
      state.id = action.payload.id;
      state.authenticated = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.companyName = action.payload.company;
      state.stock = action.payload.stock || [];
      state.sales = action.payload.sales || [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setId,
  setAuthenticated,
  setEmail,
  setPassword,
  setCompanyName,
  setStock,
  setSales,
  registerUser,
} = userSlice.actions;

export default userSlice.reducer;
