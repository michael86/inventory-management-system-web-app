import React from "react";

import { Form } from "react-bootstrap";

const ItemDetails = (props) => {
  const { onInput, errors, priceDisabled, skuValid, validateSku } = props;

  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  return (
    <>
      <Form.Group className="mb-3" controlId="sku">
        <Form.Label>Sku</Form.Label>
        <Form.Control
          type="text"
          placeholder="SKU"
          onInput={(e) => {
            onInput(e);
            validateSku(e);
          }}
          name="sku"
          required
        />
        <Form.Text className="text-muted">
          {skuValid ? (
            "Unique identifier for your company"
          ) : (
            <span className="text-danger">'Sku has already been used'</span>
          )}
        </Form.Text>

        {errors?.sku && (
          <>
            <br />
            <Form.Text className="text-danger">
              Sku can not contain special characters
            </Form.Text>
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="intake">
        <Form.Label>starting qty</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="starting quantity"
          name="intake"
          onInput={onInput}
          onKeyDown={(e) => onKeyDown(e)}
          required
        />
        <Form.Text className="text-muted">
          How much stock do you currently have. Can be 0
        </Form.Text>
        {errors?.intake && (
          <>
            <br />
            <Form.Text className="text-danger">
              Quantity must be equal to or greater than 0
            </Form.Text>
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>cost per item</Form.Label>
        <Form.Control
          type="number"
          min="0.01"
          placeholder="cost per item"
          disabled={priceDisabled}
          name="price"
          onInput={onInput}
          onKeyDown={(e) => onKeyDown(e)}
          required
        />
        <Form.Text className="text-muted">
          cost per individual component
        </Form.Text>
        {errors?.price && (
          <>
            <br />
            <Form.Text className="text-danger">
              Quantity must be greater than 0
            </Form.Text>
          </>
        )}
      </Form.Group>
    </>
  );
};

export default ItemDetails;
