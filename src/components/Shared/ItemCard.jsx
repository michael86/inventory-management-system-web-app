import React, { useState } from "react";

import { Card, Form } from "react-bootstrap";

import CardTitle from "./components/CardTitle";
import ItemOptional from "./components/ItemOptional";
import Location from "./components/Location";
import ItemSku from "./components/ItemSku";
import ItemQty from "./components/ItemQty";
import ItemPrice from "./components/ItemPrice";

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
  const { title, subtitle, errors, sku, qty, price, locations } = props;

  const [showOptional, setShowOptional] = useState(false);

  return (
    <Card className="shadow">
      <CardTitle title={title} subtitle={subtitle} />

      <Card.Body className="bg-light">
        <ItemSku errors={errors} price={price} sku={sku} />
        <ItemQty errors={errors} qty={qty} />
        <ItemPrice errors={errors} price={price} />

        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show optional"
            onClick={() => setShowOptional(!showOptional)}
          />
        </Form.Group>

        {showOptional && <ItemOptional price={price} />}

        <Location locations={locations} />
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
