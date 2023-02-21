import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../Generic/ItemCard";
import { validateInput } from "../../../validation/Utils";

import { setStock } from "../../../reducers/stockSlice";

import { Button, Form } from "react-bootstrap";
import { setPopupStock, togglePopup } from "../../../reducers/popupSlice";

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

    stockCopy[stockIndex].history = stockCopy[stockIndex].history || [];

    stockCopy[stockIndex].history.push({
      date: Date.now(),
      qty: itemCopy.qty,
      price: itemCopy.price,
      locations: itemCopy.locations,
    });

    dispatch(setPopupStock(itemCopy));
    dispatch(setStock(stockCopy));
    dispatch(togglePopup());
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
        showEditQty={true}
        disableQty={true}
        prefill={{
          title: `editing ${item.sku}`,
          subtitle: {
            text: "To add a new item, navigate to ",
            link: { to: "/add-stock", text: "add stock" },
          },
          sku: { value: item.sku },
          price: { value: item.price },
          qty: { value: item.quantity },
          freeIssue: item.price ? false : true,
        }}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default Stock;

// [
//   {
//     sku: "Nappies again",
//     qty: "120",
//     price: "125.64",
//     company: "creekview",
//     companyStreet: "27 Wickhay",
//     companyCity: "Basildon",
//     companyCounty: "essex",
//     companyCountry: "United Kingdom",
//     companyPostcode: "ss15 5ae",
//     locations: [
//       { name: "1", value: "3", id: 1669798629239 },
//       { name: "789", value: "858", id: 1669788018532 },
//     ],
//     history: [
//       {
//         date: 1669758155222,
//         qty: "12356545564",
//         price: "12356545564",
//         locations: [
//           { name: "1", value: "3", id: 1669798629239 },
//           { name: "789", value: "858", id: 1669788018532 },
//         ],
//       },
//       {
//         date: 1669758526035,
//         qty: "125",
//         price: "45.99",
//         locations: [
//           { name: "1", value: "3", id: 1669798629239 },
//           { name: "789", value: "858", id: 1669788018532 },
//           { name: "new location", value: "stuff", id: 1670741049751 },
//         ],
//       },
//     ],
//   },
//   {
//     sku: "new sku",
//     qty: "125",
//     price: "12548",
//     company: "creekview",
//     companyStreet: "27 Wickhay",
//     companyCity: "Basildon",
//     companyCounty: "essex",
//     companyCountry: "United Kingdom",
//     companyPostcode: "ss15 5ae",
//     locations: [
//       { name: "aisle", value: "a", id: 1670721742043 },
//       { name: "shelf", value: "3", id: 1670100716515 },
//     ],
//     history: [
//       {
//         date: 1669758571518,
//         qty: "12548",
//         price: "11.54",
//         locations: [
//           { name: "aisle", value: "a", id: 1670721742043 },
//           { name: "shelf", value: "3", id: 1670100716515 },
//         ],
//       },
//     ],
//   },
// ];
