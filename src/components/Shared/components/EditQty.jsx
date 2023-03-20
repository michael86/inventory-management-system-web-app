import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const EditQty = ({ equateQty }) => {
  const onKeyDown = (e) => (e.key === "-" || e.key === "e") && e.preventDefault();
  const ref = useRef();

  const onClick = (operation) => equateQty(operation, ref.current.value);

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
            onKeyDown={(e) => onKeyDown(e)}
            ref={ref}
          />

          <Button
            variant="primary me-2 mt-2"
            data-equation="1"
            onClick={() => {
              onClick(true);
            }}
          >
            Add
          </Button>
          <Button
            variant="primary mt-2"
            onClick={() => {
              onClick(false);
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
