import { Form } from "react-bootstrap";
import { validateInput } from "../../../validation/Utils";

const ItemSku = ({ sku, errors }) => {
  const { values: err, setErrors } = errors;
  const { state } = sku || {};

  const onInput = (e) => {
    const res = validateInput(e, err);
    res && setErrors(res);
    state.setSku && state.setSku(e.target.value);
  };

  console.log("state", state);

  return (
    <>
      <Form.Group className="mb-3" controlId="sku">
        <Form.Label>Sku</Form.Label>
        <Form.Control
          type="text"
          placeholder="SKU"
          onInput={onInput}
          name="sku"
          value={state.sku && state.sku}
          required
        />

        <Form.Text className="text-muted">
          {err?.sku ? (
            <span className="text-danger">Sku can not contain special characters</span>
          ) : (
            "Unique identifier for your company"
          )}
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default ItemSku;
