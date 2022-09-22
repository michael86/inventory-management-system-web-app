import React from "react";
import { User } from "./features/user/User";
import { setId } from "./features/user/userSlice";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <User />
      <input
        type="string"
        placeholder="Enter user id"
        onInput={(e) => {
          dispatch(setId(e.target.value));
        }}
      />
      ;
    </>
  );
}

export default App;
