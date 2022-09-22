import React from "react";
import { useSelector } from "react-redux";

export function User() {
  const id = useSelector((state) => state.user.id);

  return <h1>User id is: {id}</h1>;
}
