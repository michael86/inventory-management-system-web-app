import React from "react";
import { Card, Table } from "react-bootstrap";
import utils from "../../../utils/invoices";

const TallyCard = (props) => {
  const { items } = props; //Get currency from here

  return (
    <Card className="shadow">
      <Card.Header className="text-center bg-primary text-light fs-4 ">
        Tally
      </Card.Header>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Tax</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.tax}</td>
                  <td>
                    £
                    {utils.calculateCombinedItemTax(
                      item.quantity,
                      item.price,
                      item.tax
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>

      <Card.Footer>
        Total Cost: £
        {items.length > 0 &&
          Math.round(
            (utils.calculateCombinedCost(items) + Number.EPSILON) * 100
          ) / 100}
      </Card.Footer>
    </Card>
  );
};

export default TallyCard;
