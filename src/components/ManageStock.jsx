import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/ManageStock.css";

const ManageStock = () => {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <h1 className="text-center">Manage stock</h1>
      <div className="mx-2">
        <Row>
          {stock.map((item) => {
            return (
              <Col xs={1} key={item.id} className="fit-content">
                <Card className="fit-content">
                  <Card.Title className="text-center">{item.sku}</Card.Title>
                  <Card.Body className="d-flex flex-column">
                    <input type="text" value={item.qty} disabled />
                    <input type="text" value={item.price} disabled />
                    <input type="text" value={item.locations} disabled />
                  </Card.Body>
                  <Card.Footer className="d-flex flex-row">
                    <Button className="me-2">Delete</Button>
                    <Button>Edit</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ManageStock;
