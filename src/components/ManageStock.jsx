import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/ManageStock.css";

const ManageStock = () => {
  const stock = useSelector((state) => state.stock);
  console.log(stock);
  return (
    <>
      <h1 className="text-center">Manage stock</h1>
      {!stock.length && (
        <h2 className="text-center">
          No stock found, head to the <Link to="/add-stock">Add Stock</Link>{" "}
          page
        </h2>
      )}
      <div className="mx-2">
        <Row>
          {stock.map((item) => {
            return (
              <Col xs={1} key={item.sku} className="fit-content">
                <Card className="fit-content">
                  <Card.Title className="text-center">{item.sku}</Card.Title>
                  <Card.Body className="d-flex flex-column">
                    <input type="text" value={item.qty} disabled />
                    <input
                      type="text"
                      value={item.price || "free issue"}
                      disabled
                    />
                    <div className="location-container mt-2">
                      <Card.Text className="text-center">Location</Card.Text>
                      <div className="d-flex flex-wrap justify-content-between ">
                        {item.locations.map((location) => {
                          return (
                            <Badge bg="primary" key={location.id}>
                              <span className="text-warning">
                                {location.name}
                              </span>
                              : {location.value}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Button>Delete</Button>
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
