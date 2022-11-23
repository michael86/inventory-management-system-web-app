import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Form } from "react-bootstrap";

import Optional from "./ItemCard/Optional";
import Location from "./ItemCard/Location";
import ItemDetails from "./ItemCard/ItemDetails";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = (props) => {
  const {
    onInput,
    errors,
    locations,
    submitLocation,
    deleteLocation,
    locationsValid,
    skuValid,
    validateSku,
    priceDisabled,
    setPriceDisabled,
    title,
    subtitle,
    subtitleLink,
  } = props;

  const [showOptional, setShowOptional] = useState(false);

  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">{title}</Card.Title>

      {subtitle && (
        <Card.Subtitle className="px-2">
          {subtitle}
          {subtitleLink && (
            <Link to={subtitleLink.to}>{subtitleLink.text}</Link>
          )}
        </Card.Subtitle>
      )}

      <Card.Body className="bg-light">
        <ItemDetails
          onInput={onInput}
          errors={errors}
          priceDisabled={priceDisabled}
          skuValid={skuValid}
          validateSku={validateSku}
        />

        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show optional"
            onClick={() => setShowOptional(!showOptional)}
          />
        </Form.Group>

        {showOptional && (
          <Optional
            priceDisabled={priceDisabled}
            setPriceDisabled={setPriceDisabled}
          />
        )}

        <Location
          locations={locations}
          submitLocation={submitLocation}
          deleteLocation={deleteLocation}
          locationsValid={locationsValid}
        />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
