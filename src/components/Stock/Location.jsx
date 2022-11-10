import React from "react";
import { useState } from "react";
import { Form, Row, Col, Badge, Button } from "react-bootstrap";
import Input from "../Generic/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Locations.css";

const Location = (props) => {
  const { locations, submitLocation, deleteLocation } = props;
  const genId = () => {
    return Math.floor(Math.random() * 999999999 + Date.now());
  };

  const id = genId();

  return (
    <Form.Group className="mb-3" id="stockLocation">
      <p className="fs-4 mb-0 pb-0">location</p>
      <Row className="justify-content-between">
        {locations.map((location) => {
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

      <Row>
        <Col xs={12} className="mb-2">
          <Input type="text" controlId={`location-name`} label="Name" />
          <Input type="text" controlId={`location-value`} label="Value" />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="d-flex flex-column text-center">
          <Form.Text>Enter the aisle name and number</Form.Text>
          <Button
            className="mt-3 w-50 mx-auto"
            onClick={() => submitLocation(id)}
          >
            save
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default Location;
