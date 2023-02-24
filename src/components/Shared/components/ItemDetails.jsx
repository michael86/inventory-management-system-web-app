import React, { useState } from "react";

import { Form } from "react-bootstrap";

import ItemDetailsSku from "./ItemDetailsSku";
import ItemDetailsQty from "./ItemDetailsQty";
import ItemDetailsPrice from "./ItemDetailsPrice";

const ItemDetails = (props) => {
  const { onInput, errors, price, prefill, showEditQty, disableQty } = props;

  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  return (
    <>
      <ItemDetailsSku />

      <ItemDetailsQty />

      <ItemDetailsPrice />
    </>
  );
};

export default ItemDetails;
