import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import loginRegisterReducer from "../features/popups/LoginRegister/Login-RegisterSlice";

//create a redux store.
export const store = configureStore({
  reducer: {
    user: userReducer,
    loginRegisterPopup: loginRegisterReducer,
  },
});
