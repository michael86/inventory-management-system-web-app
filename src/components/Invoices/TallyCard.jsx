import React from "react";
import { Card, Table } from "react-bootstrap";
import { calculateCombinedCost } from "./Utils/Index";

const TallyCard = (props) => {
  const { items, currency } = props;

  const combinedCost = calculateCombinedCost(items);

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
                <tr key={item.key}>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.tax}</td>
                  <td>
                    {currency}
                    {(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>

      <Card.Footer>Total Cost: £{combinedCost}</Card.Footer>
    </Card>
  );
};

export default TallyCard;
