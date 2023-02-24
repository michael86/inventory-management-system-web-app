import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Form } from "react-bootstrap";

import Optional from "./components/Optional";
import Location from "./components/Location";
import ItemDetails from "./components/ItemDetails";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = (props) => {
  /**
   * Shared component for adding stock and editing stock.
   *
   * @Required
   * @param {props.errors} Object. Joi error handling.
   * @param {onInput} Elevated onInput handler, primarily for form validation and setting props.errors
   * @param {props.locations} Object containing locations object {name, value} and three functions: submitLocation, deleteLocation, locationsValid
   * @param {title} String Title of the card. I.e Update Stock || Add stock
   *
   * @Optional
   * @param {props.priceDisabled} Object containing elevated state: boolean, setState
   * @param {props.prefill} Object containing values for prefilling, sent by manage stock
   * @param {props.quantity} Object contains two booleans showEditQty && disableQty. Used to show extra input on manage stock call and disable default qty input
   *
   * @return {component} React Component: item Card for adding/updating stock items
   */
  const {
    errors, // error handling
    locations,
    priceDisabled,
    title,
    prefill,
    onInput,
    quantity,
  } = props;

  const [showOptional, setShowOptional] = useState(false);

  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">{title}</Card.Title>

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
          prefill={prefill}
          onInput={onInput}
          showEditQty={quantity.showEditQty}
          disableQty={quantity.disableQty}
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
            priceDisabled={priceDisabled.value}
            setPriceDisabled={priceDisabled.set}
          />
        )}

        <Location
          locations={locations}
          submitLocation={locations.submitLocation}
          deleteLocation={locations.deleteLocation}
          locationsValid={locations.locationsValid}
        />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
