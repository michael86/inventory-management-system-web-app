import { Form } from "react-bootstrap";

const ItemPrice = ({ price, onInput, prefill, errors }) => {
  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  return (
    <>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Cost Per Item</Form.Label>
        <Form.Control
          type="number"
          min="0.01"
          step="0.01"
          placeholder="cost per item"
          //   disabled={price.priceDisabled}
          name="price"
          onInput={(e) => {
            price.setPrice(e.target.value);
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

export default ItemPrice;
