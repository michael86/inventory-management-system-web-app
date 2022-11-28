import React, { useState } from "react";

import { Form } from "react-bootstrap";

const ItemDetails = (props) => {
  const { onInput, errors, priceDisabled, prefill, skuValid } = props;

  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  const [sku, setSku] = useState(prefill?.sku?.value || "");
  const [qty, setQty] = useState(prefill?.qty?.value || 0);
  const [price, setPrice] = useState(prefill?.qty?.value || 0);

  return (
    <>
      {/*start of sku*/}
      <Form.Group className="mb-3" controlId="sku">
        <Form.Label>Sku</Form.Label>
        <Form.Control
          type="text"
          placeholder="SKU"
          onInput={(e) => {
            setSku(e.target.value);
            onInput && onInput(e);
            prefill?.sku?.onInput && prefill?.sku?.onInput(e);
          }}
          name="sku"
          value={sku}
          required
        />

        <Form.Text className="text-muted">
          {errors?.sku ? (
            <span className="text-danger">
              Sku can not contain special characters
            </span>
          ) : !skuValid ? (
            <span className="text-danger">Sku has already been used</span>
          ) : (
            "Unique identifier for your company"
          )}
        </Form.Text>
      </Form.Group>

      {/*start of qty*/}
      <Form.Group className="mb-3" controlId="qty">
        <Form.Label>starting qty</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="starting quantity"
          name="qty"
          onInput={(e) => {
            setQty(e.target.value);
            onInput && onInput(e);
            prefill?.qty?.onInput && prefill?.qty?.onInput(e);
          }}
          onKeyDown={(e) => onKeyDown(e)}
          value={qty}
          required
        />

        {!errors?.qty ? (
          <Form.Text className="text-muted">
            How much stock do you currently have. Can be 0
          </Form.Text>
        ) : (
          <Form.Text className="text-danger">
            Quantity must be equal to or greater than 0
          </Form.Text>
        )}
      </Form.Group>

      {/*start of price*/}
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>cost per item</Form.Label>
        <Form.Control
          type="number"
          min="0.01"
          step="0.01"
          placeholder="cost per item"
          disabled={priceDisabled}
          name="price"
          onInput={(e) => {
            setPrice(e.target.value);
            onInput && onInput(e);
            prefill?.price?.onInput && prefill?.price?.onInput(e);
          }}
          onKeyDown={(e) => onKeyDown(e)}
          value={price}
          required
        />

        {!errors?.price ? (
          <Form.Text className="text-muted">
            cost per individual component
          </Form.Text>
        ) : (
          <Form.Text className="text-danger">
            Quantity must be greater than 0
          </Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default ItemDetails;
