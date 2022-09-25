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
  },
});

// Action creators are generated for each case reducer function
export const { setId, setAuthenticated } = userSlice.actions;

export default userSlice.reducer;
