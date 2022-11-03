import React from "react";
import { Form } from "react-bootstrap";

const AddStock = () => {
  const genId = () => {
    return Math.floor(Math.random() * 999999999 + Date.now());
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="stockId">
        <Form.Label>ID (SKU)</Form.Label>
        <Form.Control type="text" placeholder="Enter stock ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="stockQty">
        <Form.Label>Stock intake</Form.Label>
        <Form.Control
          type="number"
          min={1}
          placeholder="Enter stock taken in"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="costPerUnit">
        <Form.Label>Cost per unit</Form.Label>
        <Form.Control type="number" min={1} placeholder="Enter stock price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="minStockReq">
        <Form.Label>
          Min required stock (leave blank if not required)
        </Form.Label>
        <Form.Control
          type="number"
          min={1}
          placeholder="Enter min required stock" // hook up a prevent default to prevent going below 1 (Could possibly, show at end of form when building code.)
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="stockImg">
        <Form.Label>img (leave blank if not required)</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="freeIssue">
        <Form.Check type="checkbox" id="freeIssue" label="Free Issue" />
      </Form.Group>

      <Form.Group className="mb-3" id="stockLocation">
        <Form.Text>location</Form.Text>
        <Form.Group controlId={`location-key-${genId()}`}>
          <Form.Label>key</Form.Label>
          <Form.Control type="text" placeholder="Enter location key" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>value</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
      </Form.Group>

      <Form.Group className="mb-3" id="companyFrom">
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>street</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>town</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>county</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>postcode</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
        <Form.Group controlId={`location-value-${genId()}`}>
          <Form.Label>country</Form.Label>
          <Form.Control type="text" placeholder="Enter locattion value" />
        </Form.Group>
      </Form.Group>
    </Form>
  );
};

export default AddStock;

//  {
//     "id": "sku_54437857",
//     "min_required": 220,
//     "current_stock": 4563453156,
//     "picture": "path/to/img",
//     "cost_per_unit": 9990,
//     "free_issue": false,
//     "location": {
//       "aisle": "B",
//       "shelf": 2
//     },
//     "history": [
//       {
//         "date_checked_in": 13151234541,
//         "staff_member": "Paul Lewington",
//         "staff_id": "SD342",
//         "qty_checked_in": 1548
//       },
//       {
//         "date_checked_in": 13151234541,
//         "staff_member": "Paul Lewington",
//         "staff_id": "SD342",
//         "qty_checked_in": 1548
//       }
//     ],

//     "supplier_info": {
//       "company": "Some company",
//       "address": "123 fake street"
//     }
//   },
