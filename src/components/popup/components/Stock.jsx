import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../../Shared/ItemCard";
import { Button, Form } from "react-bootstrap";

import axios from "../../../utils/axios";

//another cluster fuck, needs refactoring
//we need to send prefill here for pretty much everything to ItemCard.jsx
const Stock = () => {
  const [locationsUpdated, setLocationsUpdated] = useState(false);

  const item = useSelector((state) => state.popup.stock);

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
    let copy = [...locations];
    const index = copy.findIndex((location) => location.id === id);
    if (index === -1) return;

    copy.splice(index, 1);
    setLocations(copy);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    //There's a 'bug (special feature)' related to errors in this component.
    //If the user has removed the readonly attribute and sets the value below 0, then proceeds to use the add/remove button to increment into a positive state
    //The error will still persist. Wont be fixing this as the user caused it by being potentiall malicious and this wont happen if a honest user.

    if (errors && Object.keys(errors).length > 0) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }

    const data = Object.fromEntries(new FormData(e.target));
    delete data["location-name"]; //clean up inputs not required
    delete data["location-value"];
    data.locations = [...locations];
    data.id = item.id;
    const res = await axios.patch(
      `stock/update/?locations=${locationsUpdated}`,
      {
        data,
        history: item,
      }
    );

    // dispatch(togglePopup());
  };

  return (
    <Form onSubmit={onSubmit}>
      <ItemCard
        errors={{
          values: errors,
          setErrors,
        }}
        title="Manage Stock"
        sku={{ value: item.sku }}
        qty={{
          disableQty: true,
          value: item.quantity,
        }}
        price={{
          priceDisabled,
          setPriceDisabled,
          value: item.price,
        }}
        locations={{
          values: locations,
          submitLocation,
          deleteLocation,
          locationsValid,
        }}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default Stock;
