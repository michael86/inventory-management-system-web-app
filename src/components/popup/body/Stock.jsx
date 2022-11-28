import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../Generic/ItemCard";
import { validateInput } from "../../../validation/Utils";

import { setStock } from "../../../reducers/stockSlice";

import { Button, Form } from "react-bootstrap";
import { setPopupStock } from "../../../reducers/popupSlice";

const Stock = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.popup.stock);
  const stock = useSelector((state) => state.stock.stock);

  const stockIndex = stock.findIndex((i) => i.sku === item.sku);

  const [skuValid, setSkuValid] = useState(true);
  const [locations, setLocations] = useState(item.locations);
  const [locationsValid, setLocationsValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(item.price ? false : true);
  const [errors, setErrors] = useState();

  const validateSku = (e) => {
    const valid = stock.some(
      (item, index) => item.sku === e.target.value && stockIndex !== index
    );

    valid ? setSkuValid(false) : setSkuValid(true);
  };

  const submitLocation = (id) => {
    const elements = document.forms[0].elements;
    const name = elements[`location-name`].value;
    const value = elements[`location-value`].value;

    if (!name || !value) return;

    const location = {
      name,
      value,
      id,
    };

    const copy = [...locations];
    copy.push(location);
    setLocations(copy);
    setLocationsValid(true);
  };

  const deleteLocation = (id) => {
    const copy = [...locations];
    const index = copy.findIndex((location) => location.id === id);
    if (index === -1) return;
    copy.splice(index, 1);
    setLocations(copy);
  };

  const onInput = (e) => {
    const res = validateInput(e, errors);
    res && setErrors(res);
    validateSku(e);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((errors && Object.keys(errors).length > 0) || !skuValid) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }

    const itemCopy = JSON.parse(JSON.stringify(stock[stockIndex]));
    const stockCopy = [...stock];

    const data = Object.fromEntries(new FormData(e.target));
    delete data["location-name"]; //clean up inputs not required
    delete data["location-value"];

    Object.keys(itemCopy).forEach(
      (item) => (itemCopy[item] = data[item] || itemCopy[item])
    );

    itemCopy.price = data.price || undefined; //Sometimes not required if free issue is checked.
    itemCopy.locations = locations;

    stockCopy[stockIndex] = itemCopy;

    dispatch(setPopupStock(itemCopy));
    dispatch(setStock(stockCopy));
  };

  return (
    <Form onSubmit={onSubmit}>
      <ItemCard
        onInput={onInput}
        errors={errors}
        locations={locations}
        submitLocation={submitLocation}
        deleteLocation={deleteLocation}
        locationsValid={locationsValid}
        skuValid={skuValid}
        validateSku={validateSku}
        priceDisabled={priceDisabled}
        setPriceDisabled={setPriceDisabled}
        prefill={{
          title: `editing ${item.sku}`,
          subtitle: {
            text: "To add a new item, navigate to ",
            link: { to: "/add-stock", text: "add stock" },
          },
          sku: { value: item.sku },
          price: { value: item.price },
          qty: { value: item.qty },
          freeIssue: item.price ? false : true,
        }}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default Stock;
