import React from "react";
import { useSelector } from "react-redux";
// import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";

const Invoice = () => {
  const { invoice } = useSelector((state) => state.popup);

  return (
    <>
      <h1>
        This is an invoice, will be genrated once backend is implemented{" "}
        {invoice.id}
      </h1>
    </>
  );
};

export default Invoice;
