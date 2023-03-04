import React from "react";
import { Col, Card, Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  setPopupScreen,
  setPopupStock,
  togglePopup,
} from "../../../reducers/popupSlice";
import ManageStockBody from "./ManageStockBody";

const ManageStockCard = ({ item, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
      <Card className="mx-auto fit-content mt-2">
        <Card.Title className="text-center">{item.sku}</Card.Title>
        <ManageStockBody item={item} locations={item.locations} />

        <Card.Footer className="d-flex justify-content-between">
          <Button onClick={() => onDelete(item.sku)}>Delete</Button>
          <Button
            onClick={() => {
              dispatch(setPopupScreen(2));
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
