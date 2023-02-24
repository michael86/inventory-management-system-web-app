import { useState } from "react";

import { Form } from "react-bootstrap";

const ItemSku = ({ onInput, prefill, errors }) => {
  const [sku, setSku] = useState(prefill?.sku?.value || "");
  return (
    <>
      <Form.Group className="mb-3" controlId="sku">
        <Form.Label>Sku</Form.Label>
        <Form.Control
          type="text"
          placeholder="SKU"
          onInput={(e) => {
            setSku(e.target.value);
            onInput && onInput(e);
            // prefill?.sku?.onInput && prefill?.sku?.onInput(e);
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
          ) : (
            "Unique identifier for your company"
          )}
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default ItemSku;
