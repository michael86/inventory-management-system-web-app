import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../../Generic/ItemCard";
import { validateInput } from "../../../validation/Utils";

import { setStock } from "../../../reducers/stockSlice";

import { Form } from "react-bootstrap";

//Need to set up the ItemCard props

const Stock = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.popup.stock);
  const stock = useSelector((state) => state.stock.stock);
  const stockIndex = stock.findIndex((i) => i.sku === item.sku);
  const [errors, setErrors] = useState();
  const [locations, setLocations] = useState([]);
  const [locationsValid, setLocationsValid] = useState(true);
  const [skuValid, setSkuValid] = useState(true);
  const [priceDisabled, setPriceDisabled] = useState(false);

  // const stock = useSelector((state) => state.stock.stock);
  // const dispatch = useDispatch();

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

    if (Object.keys(errors).length > 0 || !skuValid) return;

    if (!locations.length) {
      setLocationsValid(false);
      return;
    }

    const copy = [...stock];

    const data = Object.fromEntries(new FormData(e.target));

    delete data["location-name"]; //clean up inputs not required
    delete data["location-value"];

    data.locations = locations;
    copy.push(data);
    dispatch(setStock(copy));
    resetState(e);
  };

  //Set to local state to allow controlled input
  // const [qty, setQty] = useState(item.qty);
  // const [price, setPrice] = useState(item.price || "free issue");
  // const [locationName, setLocationName] = useState("");
  // const [locationValue, setLocationValue] = useState("");
  // const [locationsValid, setLocationsValid] = useState(true);

  // const deleteLocation = (locationId) => {
  //   const locIndex = stock[stockIndex].locations.findIndex(
  //     (loc) => loc.id === locationId
  //   );

  //   if (locIndex === -1) return; //If this happens, then something really realllly bad has happened. Add some sort of catch for it?

  //   const copy = JSON.parse(JSON.stringify(stock));

  //   copy[stockIndex].locations.splice(locIndex, 1);

  //   !copy[stockIndex].locations.length
  //     ? setLocationsValid(false)
  //     : setLocationsValid(true);

  //   dispatch(setStock(copy));
  // };

  // const updatePrice = (e) => {
  //   setPrice(e.target.value);
  // };
  // const updateQty = (e) => {
  //   setQty(e.target.value);
  // };

  return (
    <Form>
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
        title={`editing ${item.sku}`}
        preLoadLocations
      />
    </Form>
  );
  // <>
  //   <h1 className="text-center">{stock[stockIndex].sku}</h1>

  //   <Form className="d-flex flex-column w-75 mx-auto my-3">
  //     <Form.Group className="mb-3" controlId="qty">
  //       <Form.Label>QTY:</Form.Label>

  //       <Form.Control type="number" value={qty} onInput={updateQty} />
  //       <Form.Text className="text-muted">Add or subtract stock</Form.Text>
  //     </Form.Group>

  //     <Form.Group className="mb-3" controlId="qty">
  //       <Form.Label>Price:</Form.Label>
  //       <Form.Control type="number" value={price} onInput={updatePrice} />

  //       <Form.Text className="text-muted">Adjust price</Form.Text>
  //     </Form.Group>

  //     <Row>
  //       {stock[stockIndex].locations.map((location) => {
  //         return (
  //           <Col key={location.id} xs={2} className="me-2 mt-2">
  //             <Badge pill bg="primary">
  //               <span className="text-warning"> {location.name}:</span>{" "}
  //               {location.value}
  //               <FontAwesomeIcon
  //                 icon={faCircleXmark}
  //                 onClick={() => deleteLocation(location.id)}
  //                 className="ms-2 delete-location"
  //               />
  //             </Badge>
  //           </Col>
  //         );
  //       })}
  //     </Row>

  //     <Form.Group className="mb-3" id="stockLocation">
  //       <p className="fs-4 mb-0 pb-0">location</p>

  //       <Row>
  //         <Col xs={12} className="mb-2">
  //           <Input
  //             type="text"
  //             controlId="location-name"
  //             label="Name"
  //             value={locationName}
  //             onInput={(e) => setLocationName(e.target.value)}
  //           />
  //           <Input
  //             type="text"
  //             controlId="location-value"
  //             label="Value"
  //             value={locationValue}
  //             onInput={(e) => setLocationValue(e.target.value)}
  //           />
  //         </Col>
  //       </Row>

  //       <Row>
  //         <Col xs={12} className="d-flex flex-column text-center">
  //           <Form.Text>Enter the aisle name and number</Form.Text>

  //           {!locationsValid && (
  //             <Form.Text className="text-danger">
  //               Location must contain at least 1 entry
  //             </Form.Text>
  //           )}

  //           <Button className="mt-3 w-50 mx-auto">Add Location</Button>
  //         </Col>
  //       </Row>
  //     </Form.Group>

  //     <Button type="submit">Save</Button>
  //   </Form>
  // </>
};

export default Stock;
