import React from "react";
import { useState } from "react";
import { Form, Row, Col, Badge, Button } from "react-bootstrap";
import Input from "../Generic/Input";

const Location = () => {
  const genId = () => {
    return Math.floor(Math.random() * 999999999 + Date.now());
  };

  const [locations, setLocations] = useState([
    {
      name: "aisle",
      location: "5",
      id: genId(),
    },
  ]);

  return (
    <Form.Group className="mb-3" id="stockLocation">
      <p className="fs-4 mb-0 pb-0">location</p>
      <Form.Text>Enter the aisle name and number</Form.Text>
      <Row>
        {locations.map((location, index) => {
          return (
            <Col key={location.id} xs={6} className="d-flex">
              <Badge pill bg="primary">
                <span className="text-warning"> {location.name}:</span>{" "}
                {location.location}
              </Badge>
            </Col>
          );
        })}
      </Row>
      <div className="text-center">
        <Button className="mt-2 w-50">Add Additional Location</Button>
      </div>
    </Form.Group>
  );
};

export default Location;
