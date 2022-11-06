import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import ItemCard from "./Stock/ItemCard";
import CompanyCard from "./Stock/CompanyCard";
import { useState } from "react";
import { validateInput } from "../validation/Utils";

const AddStock = () => {
  const [errors, setErrors] = useState();

  const onInput = (e) => {
    const res = validateInput(e, errors);
    res && setErrors(res);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log(errors);
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} lg={6}>
            <ItemCard onInput={onInput} errors={errors} />
          </Col>
          <Col xs={12} lg={6}>
            <CompanyCard onInput={onInput} errors={errors} />
          </Col>
        </Row>
        <Button className="mt-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
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
