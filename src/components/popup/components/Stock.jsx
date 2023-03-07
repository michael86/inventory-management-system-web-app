import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../Shared/ItemCard";
import { Button, Form } from "react-bootstrap";

import axios from "../../../utils/axios";
import { setPopupStock, togglePopup } from "../../../reducers/popupSlice";
import { ToastContainer, toast } from "react-toastify";

//another cluster fuck, needs refactoring
const Stock = () => {
  const [locationsUpdated, setLocationsUpdated] = useState(0);

  const item = useSelector((state) => state.popup.stock);

  const [locations, setLocations] = useState(item.locations);
  const [locationsValid, setLocationsValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(item.price ? false : true);
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();

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
    !locationsUpdated && setLocationsUpdated(1);
  };

  const deleteLocation = (id) => {
    let copy = [...locations];
    const index = copy.findIndex((location) => location.id === id);

    if (index === -1) return;

    copy.splice(index, 1);
    setLocations(copy);

    !locationsUpdated && setLocationsUpdated(1);
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

    switch (res.data.status) {
      case 1:
        res.data.status && dispatch(setPopupStock(data));
        dispatch(togglePopup());
        break;

      case 3:
        toast.warning("Sku already in use, please try update and try again");
        break;

      default:
        toast.error(
          "Something went wrong our end. Please try again, if the problem persists, please contact us"
        );
        break;
    }

    // dispatch(togglePopup());
  };

  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default Stock;
