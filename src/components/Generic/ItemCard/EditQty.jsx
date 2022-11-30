import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { validateInput } from "../../../validation/Utils";

const EditQty = ({ onClick }) => {
  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  const [errors, setErrors] = useState();
  const [amount, setAmount] = useState(0);

  const onInput = (e) => {
    const res = validateInput(e, errors);
    res && setErrors(res);
  };

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
            onInput={(e) => {
              setAmount(e.target.value);
              onInput(e);
            }}
            onKeyDown={(e) => onKeyDown(e)}
            value={amount}
          />

          <Button
            variant="primary me-2 mt-2"
            data-equation="1"
            onClick={(e) => {
              onClick(true, amount, errors?.editQty);
            }}
          >
            Add
          </Button>
          <Button
            variant="primary mt-2"
            onClick={(e) => {
              onClick(false, amount, errors?.editQty);
            }}
          >
            Remove
          </Button>
        </div>
      </Form.Group>

      {errors?.editQty && (
        <Form.Text className="text-danger">
          Quantity must be equal to or greater than 0 and a whole number
        </Form.Text>
      )}
    </>
  );
};

export default EditQty;
