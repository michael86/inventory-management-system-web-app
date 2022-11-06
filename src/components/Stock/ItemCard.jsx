import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Form } from "react-bootstrap";

//Would have used the Input component for this form, however, we manipulate the form layout (disabling/hiding/showing) to much.

const ItemCard = ({ onInput, errors }) => {
  const [showOptional, setShowOptional] = useState(false);
  const [priceDisabled, setPriceDisabled] = useState(false);

  const genId = () => {
    return Math.floor(Math.random() * 999999999 + Date.now());
  };

  const onKeyDown = (e) =>
    (e.key === "-" || e.key === "e") && e.preventDefault();

  return (
    <Card className="shadow">
      <Card.Title className="p-2 bg-primary rounded-top">
        Item Details
      </Card.Title>
      <Card.Subtitle className="px-2">
        To update a SKU currently registered, visit the{" "}
        <Link to="/manage-stock">manage page</Link>
      </Card.Subtitle>

      <Card.Body className="bg-light">
        <Form.Group className="mb-3" controlId="sku">
          <Form.Label>Sku</Form.Label>
          <Form.Control
            type="text"
            placeholder="SKU"
            onInput={onInput}
            name="sku"
          />
          <Form.Text className="text-muted">
            Unique identifier for your company
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

        <Form.Group className="mb-3" id="stockLocation">
          <p className="fs-4 mb-0 pb-0">location</p>
          <Form.Text>Enter the aisle name and number</Form.Text>
          <Form.Group controlId={`location-key-${genId()}`}>
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter location key" />
          </Form.Group>
          <Form.Group controlId={`location-value-${genId()}`}>
            <Form.Label>number</Form.Label>
            <Form.Control type="text" placeholder="Enter locattion value" />
          </Form.Group>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show optional"
            onClick={() => setShowOptional(!showOptional)}
          />
        </Form.Group>

        {showOptional && (
          <>
            <Form.Group className="mb-3 mt-3" controlId="stockImg">
              <Form.Control type="file" />
              <Form.Text>
                Upload image of item, valid file formats: PNG, JPG, WEBP
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="freeIssue">
              <Form.Check
                type="checkbox"
                id="freeIssue"
                label="Free Issue"
                onClick={() => setPriceDisabled(!priceDisabled)}
              />
              <Form.Text>
                Check this if the stock was free issue, will disable price
                requirement
              </Form.Text>
            </Form.Group>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
