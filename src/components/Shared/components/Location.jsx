import React from "react";
import { Form, Row, Col, Badge, Button } from "react-bootstrap";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/Locations.css";
import { useState } from "react";

const Location = (props) => {
  const { values, submitLocation, deleteLocation, locationsValid } =
    props.locations;

  const genId = () => {
    return Math.floor(Math.random() * 999999999 + Date.now());
  };

  const id = genId();

  const [locationName, setLocationName] = useState("");
  const [locationValue, setLocationValue] = useState("");

  return (
    <Form.Group className="mb-3 " id="stockLocation">
      <p className="fs-4 mb-0 pb-0 text-center">location</p>
      <Row className="justify-content-between">
        {values.map((location) => {
          return (
            <Col key={location.id} xs={2} className="me-2 mt-2">
              <Badge pill bg="primary">
                {location.name && location.value && (
                  <>
                    <span className="text-warning"> {location.name}:</span>
                    {location.value}
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      onClick={() => deleteLocation(location.id)}
                      className="ms-2 delete-location"
                    />
                  </>
                )}
              </Badge>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col xs={12} className="mb-2">
          <Input
            type="text"
            controlId="location-name"
            label="Name"
            value={locationName}
            onInput={(e) => setLocationName(e.target.value)}
          />
          <Input
            type="text"
            controlId="location-value"
            label="Value"
            value={locationValue}
            onInput={(e) => setLocationValue(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="d-flex flex-column text-center">
          <Form.Text>Enter the aisle name and number</Form.Text>

          {!locationsValid && (
            <Form.Text className="text-danger">
              Location must contain at least 1 entry
            </Form.Text>
          )}

          <Button
            className="mt-3 w-50 mx-auto"
            onClick={() => {
              submitLocation(id);
              setLocationName("");
              setLocationValue("");
            }}
          >
            Add Location
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default Location;
