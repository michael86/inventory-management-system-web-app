import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

import axios from "../../utils/axios";

import CompanyCard from "./components/CompanyCard";
import ItemCard from "../Shared/ItemCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStock = () => {
  const [errors, setErrors] = useState();
  const [locations, setLocations] = useState([]);
  const [locationsValid, setLocationsValid] = useState(true);
  const [skuValid, setSkuValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(false);
  const [sku, setSku] = useState("");

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

  const resetState = (e) => {
    e.target.reset();
    setErrors();
    setLocations([]);
    setLocationsValid(true);
    setSkuValid(true);

    setSku("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(errors);
    if ((errors && Object.keys(errors).length > 0) || !skuValid) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }
    try {
      const data = Object.fromEntries(new FormData(e.target));

      delete data["location-name"]; //clean up inputs not required
      delete data["location-value"];

      data.locations = locations;
      data.history = [
        {
          sku: data.sku,
          quantity: data.quantity,
          price: data.price,
          locations: data.locations,
        },
      ];

      const res = await axios.post("stock/add", { data });

      switch (res.data?.status) {
        //Item Added
        case 1:
          e.target.reset();
          resetState(e);
          toast.success(`${data.sku} Added`);
          break;
        //Sku used
        case 2:
          toast.warning(`${data.sku} has already been used, please update and try again`);
          break;
        default:
          toast.error(
            "It's not you, it's us. Something went wrong there, please try again. If the problem persists, please contact us"
          );

          break;
      }
    } catch (err) {
      toast.error(
        "It's not you, it's us. Something went wrong there, please try again. If the problem persists, please contact us"
      );
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} lg={6}>
            <ItemCard
              errors={{
                values: errors,
                setErrors,
              }}
              title="Add a new item"
              subtitle={{
                text: "To update a SKU currently registered, visit the ",
                link: {
                  to: "/manage-stock",
                  text: "manage stock page",
                },
              }}
              sku={{
                skuValid,
                state: {
                  sku,
                  setSku,
                },
              }}
              price={{
                priceDisabled,
                setPriceDisabled,
              }}
              locations={{
                values: locations,
                submitLocation,
                deleteLocation,
                locationsValid,
              }}
            />
          </Col>
          <Col xs={12} lg={6}>
            <CompanyCard setErrors={setErrors} errors={errors} />
          </Col>
        </Row>
        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddStock;
