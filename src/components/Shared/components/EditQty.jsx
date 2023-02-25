import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditQty = ({ onClick }) => {
  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  const [amount, setAmount] = useState(0);

  const onInput = ({ target }) => setAmount(+target.value);

  return (
    <>
      <Form.Group className="mb-3" controlId="editQty">
        <Form.Label>Add/Remove</Form.Label>
        <div className="d-flex flex-direction-row">
          <Form.Control
            type="number"
            min="0"
            placeholder="starting quantity"
            name="editQty"
            className="me-2"
            onInput={onInput}
            onKeyDown={(e) => onKeyDown(e)}
            value={amount}
          />

          <Button
            variant="primary me-2 mt-2"
            data-equation="1"
            onClick={() => {
              onClick(true, amount);
            }}
          >
            Add
          </Button>
          <Button
            variant="primary mt-2"
            onClick={() => {
              onClick(false, amount);
            }}
          >
            Remove
          </Button>
        </div>
      </Form.Group>
    </>
  );
};

export default EditQty;
