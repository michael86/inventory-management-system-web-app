import React from "react";
import { Col, Card, Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  setPopupScreen,
  setPopupStock,
  togglePopup,
} from "../../reducers/popupSlice";

const ManageStockCard = ({ item, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={1} key={item.sku} className="fit-content">
      <Card className="fit-content mt-2">
        <Card.Title className="text-center">{item.sku}</Card.Title>
        <Card.Body className="d-flex flex-column">
          <input type="text" value={`Qty: ${item.quantity}`} disabled />
          <input
            type="text"
            value={`Price: ${item.price}` || "free issue"}
            disabled
          />
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
          <Button
            onClick={() => {
              dispatch(setPopupScreen(3));
              dispatch(setPopupStock(item));
              dispatch(togglePopup());
            }}
          >
            Edit
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ManageStockCard;
