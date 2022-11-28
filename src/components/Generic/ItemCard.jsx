import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Badge, Card, Form } from "react-bootstrap";

import Optional from "./ItemCard/Optional";
import Location from "./ItemCard/Location";
import ItemDetails from "./ItemCard/ItemDetails";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = (props) => {
  const {
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
    prefill,
    onInput,
  } = props;

  const [showOptional, setShowOptional] = useState(false);

  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">
        {prefill?.title || title}
      </Card.Title>

      {prefill?.subtitle && (
        <Card.Subtitle className="px-2">
          {prefill.subtitle.text}
          {prefill.subtitle.link && (
            <Link to={prefill.subtitle.link.to}>
              {prefill.subtitle.link.text}
            </Link>
          )}
        </Card.Subtitle>
      )}

      <Card.Body className="bg-light">
        <ItemDetails
          errors={errors}
          priceDisabled={priceDisabled}
          skuValid={skuValid}
          validateSku={validateSku}
          prefill={prefill}
          onInput={onInput}
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
