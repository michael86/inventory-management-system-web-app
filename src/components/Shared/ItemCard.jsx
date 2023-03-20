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
  const { title, subtitle, errors, sku, qty, price, locations } = props;

  const [showOptional, setShowOptional] = useState(false);

  return (
    <Card className="shadow">
      <CardTitle title={title} subtitle={subtitle} />

      <Card.Body className="bg-light">
        <ItemSku errors={errors} sku={sku} />
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
