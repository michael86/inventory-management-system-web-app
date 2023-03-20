import { useState } from "react";
import { Form } from "react-bootstrap";
import { validateInput } from "../../../validation/Utils";
import EditQty from "./EditQty";

const ItemQty = ({ qty, errors }) => {
  const { values: err, setErrors } = errors;

  const { state, disabled } = qty || {};

  const [qtyValid, setQtyValid] = useState(true);

  const onInput = (e) => {
    const res = validateInput(e, err);
    res && setErrors(res);
    state?.setQty && state.setQty(e.target.value);
  };

  const onKeyDown = (e) => (e.key === "-" || e.key === "e") && e.preventDefault();

  const equateQty = (equate, amount, errors) => {
    //Equate is a bool used to decide if adding or subtracting
    if (!amount || errors) return;

    const res = equate ? +qty + +amount : +qty - +amount;

    if (res < 0) {
      setQtyValid(false);
      return;
    }

    setQtyValid(true); //Just incase amount wasn't valid, it now is.

    state?.qty && state.setQty(equate ? +qty + +amount : +qty - +amount);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="qty">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="starting quantity"
          name="qty"
          onInput={onInput}
          onKeyDown={(e) => onKeyDown(e)}
          value={state?.qty && state.qty}
          required
          readOnly={disabled}
        />

        {disabled && !err?.qty ? ( //We check for err here as well as a mallicious user could remove the readonly attribute to make the input editable
          <Form.Text>Please use the buttons below to edit your qty</Form.Text>
        ) : !err?.qty ? (
          <Form.Text className="text-muted">
            How much stock do you currently have. Can be 0
          </Form.Text>
        ) : (
          <Form.Text className="text-danger">
            Quantity must be equal to or greater than 0 and a whole number
          </Form.Text>
        )}
      </Form.Group>

      {disabled && <EditQty onClick={equateQty} />}
      {!qtyValid && (
        <Form.Text className="text-danger">
          Subtracting this amount will put you in the minus. Quick math.
        </Form.Text>
      )}
    </>
  );
};

export default ItemQty;
