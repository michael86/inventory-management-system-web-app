import React, { useState } from "react";
import { Row, Col, Badge, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Stock = () => {
  const stock = useSelector((stock) => stock.popup.stock);

  //Set to local state to allow controlled input
  const [qty, setQty] = useState(stock.qty);
  const [price, setPrice] = useState(stock.price || "free issue");

  console.log(stock);
  return (
    <>
      <h1 className="text-center">{stock.sku}</h1>

      <Form className="d-flex flex-column w-75 mx-auto my-3">
        <Form.Group className="mb-3" controlId="qty">
          <Form.Label>QTY:</Form.Label>
          <Form.Control type="number" value={qty} />
          <Form.Text className="text-muted">Add or subtract stock</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="qty">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onInput={(e) => setPrice(e.target.value)}
          />{" "}
          {/* Set this to */}
          <Form.Text className="text-muted">Adjust price</Form.Text>
        </Form.Group>

        <Row>
          {stock.locations.map((location) => {
            return (
              <Col key={location.id} xs={2} className="me-2 mt-2">
                <Badge pill bg="primary">
                  <span className="text-warning"> {location.name}:</span>{" "}
                  {location.value}
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    // onClick={() => deleteLocation(location.id)}
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
