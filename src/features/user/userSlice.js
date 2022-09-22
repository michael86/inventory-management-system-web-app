import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state, action) => {
      console.log(action);
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setId } = userSlice.actions;

export default userSlice.reducer;
