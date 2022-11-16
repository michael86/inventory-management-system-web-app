import React from "react";
import { Col, Card, Badge, Button } from "react-bootstrap";

const ManageStockCard = ({ item, onEdit, onDelete }) => {
  return (
    <Col xs={1} key={item.sku} className="fit-content">
      <Card className="fit-content">
        <Card.Title className="text-center">{item.sku}</Card.Title>
        <Card.Body className="d-flex flex-column">
          <input type="text" value={item.qty} disabled />
          <input type="text" value={item.price || "free issue"} disabled />
          <div className="location-container mt-2">
            <Card.Text className="text-center">Location</Card.Text>
            <div className="d-flex flex-wrap justify-content-between ">
              {item.locations.map((location) => {
                return (
                  <Badge bg="primary" key={location.id}>
                    <span className="text-warning">{location.name}</span>:{" "}
                    {location.value}
                  </Badge>
                );
              })}
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button onClick={() => onDelete(item.sku)}>Delete</Button>
          <Button onClick={onEdit}>Edit</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageStockCard;
