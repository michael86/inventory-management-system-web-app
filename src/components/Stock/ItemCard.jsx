import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Form } from "react-bootstrap";

import Optional from "./Optional";
import Location from "./Location";
import ItemDetails from "./ItemDetails";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = (props) => {
  const { onInput, errors, locations, submitLocation, deleteLocation } = props;
  const [showOptional, setShowOptional] = useState(false);
  const [priceDisabled, setPriceDisabled] = useState(false);

  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">
        Item Details
      </Card.Title>
      <Card.Subtitle className="px-2">
        To update a SKU currently registered, visit the{" "}
        <Link to="/manage-stock">manage page</Link>
      </Card.Subtitle>

      <Card.Body className="bg-light">
        <ItemDetails
          onInput={onInput}
          errors={errors}
          priceDisabled={priceDisabled}
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
        />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
