import { useState } from "react";
import { Form } from "react-bootstrap";
import { validateInput } from "../../../validation/Utils";

const ItemSku = ({ sku: prefill, errors }) => {
  const { values: err, setErrors } = errors;

  const onInput = (e) => {
    const res = validateInput(e, err);
    res && setErrors(res);
    setSku(e.target.value);
  };

  const [sku, setSku] = useState(prefill?.value || "");
  return (
    <>
      <Form.Group className="mb-3" controlId="sku">
        <Form.Label>Sku</Form.Label>
        <Form.Control
          type="text"
          placeholder="SKU"
          onInput={onInput}
          name="sku"
          value={sku}
          required
        />

        <Form.Text className="text-muted">
          {err?.sku ? (
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
