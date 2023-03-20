import { Form } from "react-bootstrap";
import { validateInput } from "../../../validation/Utils";

const ItemPrice = ({ price, errors }) => {
  const { values: err, setErrors } = errors;
  const { state, priceDisabled } = price || {};

  const onInput = (e) => {
    const res = validateInput(e, err);
    res && setErrors(res);
    state?.setPrice && state.setPrice(+e.target.value);
  };

  const onKeyDown = (e) => (e.key === "-" || e.key === "e") && e.preventDefault();

  return (
    <>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Cost Per Item</Form.Label>
        <Form.Control
          type="number"
          min="0.01"
          step="0.01"
          placeholder="cost per item"
          disabled={priceDisabled}
          name="price"
          onInput={onInput}
          onKeyDown={(e) => onKeyDown(e)}
          value={state?.price && state.price}
          required
        />

        {!err?.price ? (
          <Form.Text className="text-muted">cost per individual component</Form.Text>
        ) : (
          <Form.Text className="text-danger">
            Quantity must be greater than 0, if this item is free issue, set it via the optional
            settings
          </Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default ItemPrice;
