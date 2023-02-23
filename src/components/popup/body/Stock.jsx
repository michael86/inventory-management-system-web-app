import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../Shared/ItemCard";
import { validateInput } from "../../../validation/Utils";
import { Button, Form } from "react-bootstrap";
import { togglePopup } from "../../../reducers/popupSlice";
import axios from "../../../utils/axiosInstance";

const Stock = () => {
  const dispatch = useDispatch();
  const [locationsUpdated, setLocationsUpdated] = useState(false);

  const item = useSelector((state) => state.popup.stock);

  const [skuValid, setSkuValid] = useState(true);
  const [locations, setLocations] = useState(item.locations);
  const [locationsValid, setLocationsValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(item.price ? false : true);
  const [errors, setErrors] = useState();

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
    !locationsUpdated && setLocationsUpdated(true);
  };

  const deleteLocation = (id) => {
    const copy = JSON.parse(JSON.stringify(locations));
    const index = copy.findIndex((location) => location.id === id);
    if (index === -1) return;
    delete copy[index].name;
    delete copy[index].value;

    setLocations(copy);
  };

  const onInput = (e) => {
    const res = validateInput(e, errors);
    res && setErrors(res);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((errors && Object.keys(errors).length > 0) || !skuValid) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }

    const data = Object.fromEntries(new FormData(e.target));
    delete data["location-name"]; //clean up inputs not required
    delete data["location-value"];
    data.location = [...locations];
    data.id = item.id;
    const res = await axios.patch(
      `stock/update/?locations=${locationsUpdated}`,
      {
        data,
        history: item,
      }
    );
    console.log("res", res);
    // dispatch(togglePopup());
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
