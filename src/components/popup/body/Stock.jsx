import React, { useState } from "react";
import { Row, Col, Badge, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setStock } from "../../../reducers/stockSlice";

const Stock = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.popup.stock);
  const stock = useSelector((state) => state.stock.stock);
  const stockIndex = stock.findIndex((i) => i.sku === item.sku);

  //Set to local state to allow controlled input
  const [qty, setQty] = useState(item.qty);
  const [price, setPrice] = useState(item.price || "free issue");

  const deleteLocation = (locationId) => {
    const locIndex = stock[stockIndex].locations.findIndex(
      (loc) => loc.id === locationId
    );

    if (locIndex === -1) return; //If this happens, then something really realllly bad has happened. Add some sort of catch for it?

    const copy = JSON.parse(JSON.stringify(stock));

    copy[stockIndex].locations.splice(locIndex, 1);

    dispatch(setStock(copy));
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateQty = (e) => {
    setQty(e.target.value);
  };

  console.log("stock from popupo", stock);

  return (
    <>
      <h1 className="text-center">{stock[stockIndex].sku}</h1>

      <Form className="d-flex flex-column w-75 mx-auto my-3">
        <Form.Group className="mb-3" controlId="qty">
          <Form.Label>QTY:</Form.Label>

          <Form.Control type="number" value={qty} onInput={updateQty} />
          <Form.Text className="text-muted">Add or subtract stock</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="qty">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" value={price} onInput={updatePrice} />

          <Form.Text className="text-muted">Adjust price</Form.Text>
        </Form.Group>

        <Row>
          {stock[stockIndex].locations.map((location) => {
            return (
              <Col key={location.id} xs={2} className="me-2 mt-2">
                <Badge pill bg="primary">
                  <span className="text-warning"> {location.name}:</span>{" "}
                  {location.value}
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={() => deleteLocation(location.id)}
                    className="ms-2 delete-location"
                  />
                </Badge>
              </Col>
            );
          })}
        </Row>

        <Button type="submit">Save</Button>
      </Form>
    </>
  );
};

export default Stock;
