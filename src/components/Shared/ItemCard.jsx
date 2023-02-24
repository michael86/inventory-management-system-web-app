import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Form } from "react-bootstrap";

import Optional from "./components/ItemDetailsOptional";
import Location from "./components/Location";
import ItemDetails from "./components/ItemDetails";
import ItemDetailsSku from "./components/ItemDetailsSku";
import ItemDetailsQty from "./components/ItemDetailsQty";
import ItemDetailsPrice from "./components/ItemDetailsPrice";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = (props) => {
  /**
   * Shared component for adding stock and editing stock.
   *
   * @Required
   * @param {props.errors} Object. Joi error handling.
   * @param {onInput} Elevated onInput handler, primarily for form validation and setting props.errors
   * @param {props.locations} Object containing locations.value object {name, value} and three functions: submitLocation, deleteLocation, locationsValid
   * @param {title} String Title of the card. I.e Update Stock || Add stock
   *
   * @Optional
   * @param {props.price} Object containing elevated state: boolean, setState
   * @param {props.prefill} Object containing values for prefilling, sent by manage stock
   * @param {props.quantity} Object contains two booleans showEditQty && disableQty. Used to show extra input on manage stock call and disable default qty input
   *
   * @return {component} React Component: item Card for adding/updating stock items
   */
  const {
    title,
    subtitle,
    errors,
    locations,
    price,
    prefill,
    onInput,
    quantity,
  } = props;

  const [showOptional, setShowOptional] = useState(false);
  console.log("subtitle", price);
  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">{title}</Card.Title>

      {subtitle && (
        <Card.Subtitle className="px-2">
          {subtitle.text}
          {subtitle.link && (
            <Link to={subtitle.link.to}>{subtitle.link.text}</Link>
          )}
        </Card.Subtitle>
      )}

      <Card.Body className="bg-light">
        <ItemDetailsSku
          errors={errors}
          price={price}
          prefill={prefill}
          onInput={onInput}
          quantity={quantity && quantity.showEditQty}
        />
        <ItemDetailsQty
          errors={errors}
          price={price}
          prefill={prefill}
          onInput={onInput}
          quantity={quantity && quantity.showEditQty}
        />
        <ItemDetailsPrice
          errors={errors}
          price={price}
          prefill={prefill}
          onInput={onInput}
          quantity={quantity && quantity.showEditQty}
        />
        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show optional"
            onClick={() => setShowOptional(!showOptional)}
          />
        </Form.Group>

        {showOptional && <Optional price={price} />}

        <Location
          locations={locations.values}
          submitLocation={locations.submitLocation}
          deleteLocation={locations.deleteLocation}
          locationsValid={locations.locationsValid}
        />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
