import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const ManageStock = () => {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <h1 className="text-center">Manage stock</h1>
      <div className="mx-2">
        <Row>
          <Col xs={1}>
            <Card>
              <Card.Title>Some title</Card.Title>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ManageStock;
