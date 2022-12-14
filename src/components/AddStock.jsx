import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import ItemCard from "./Generic/ItemCard";
import CompanyCard from "./Stock/CompanyCard";
import { useState } from "react";
import { validateInput } from "../validation/Utils";
import { useDispatch, useSelector } from "react-redux";
import { setStock } from "../reducers/stockSlice";

const AddStock = () => {
  const [errors, setErrors] = useState();
  const [locations, setLocations] = useState([]);
  const [locationsValid, setLocationsValid] = useState(true);
  const [skuValid, setSkuValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(false);

  const stock = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();

  const validateSku = (e) => {
    const valid = stock.some((item) => item.sku === e.target.value);
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

  const resetState = (e) => {
    e.target.reset();
    setErrors();
    setLocations([]);
    setLocationsValid(true);
    setSkuValid(true);
    setPriceDisabled(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((errors && Object.keys(errors).length > 0) || !skuValid) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }

    const copy = [...stock];

    const data = Object.fromEntries(new FormData(e.target));
    data.dateCreated = Date.now();

    delete data["location-name"]; //clean up inputs not required
    delete data["location-value"];

    data.locations = locations;
    data.history = [
      {
        date: Date.now(),
        qty: data.qty,
        price: data.price,
        locations: data.locations,
      },
    ];

    copy.push(data);
    dispatch(setStock(copy));
    resetState(e);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} lg={6}>
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
              title={"Add a new item"}
              subtitle={"To update a SKU currently registered, visit the "}
              subtitleLink={{ to: "/manage-stock", text: "manage stock" }}
            />
          </Col>
          <Col xs={12} lg={6}>
            <CompanyCard onInput={onInput} errors={errors} />
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

//  {
//     "id": "sku_54437857",
//     "min_required": 220,
//     "current_stock": 4563453156,
//     "picture": "path/to/img",
//     "cost_per_unit": 9990,
//     "free_issue": false,
//     "location": {
//       "aisle": "B",
//       "shelf": 2
//     },
//     "history": [
//       {
//         "date_checked_in": 13151234541,
//         "staff_member": "Paul Lewington",
//         "staff_id": "SD342",
//         "qty_checked_in": 1548
//       },
//       {
//         "date_checked_in": 13151234541,
//         "staff_member": "Paul Lewington",
//         "staff_id": "SD342",
//         "qty_checked_in": 1548
//       }
//     ],

//     "supplier_info": {
//       "company": "Some company",
//       "address": "123 fake street"
//     }
//   },
