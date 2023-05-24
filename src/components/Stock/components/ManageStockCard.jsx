import React, { useState } from "react";
import { Col, Card, Spinner, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPopupScreen, setPopupStock, togglePopup } from "../../../reducers/popupSlice";
import ManageStockBody from "./ManageStockBody";

import axios from "../../../utils/axios";
import { ToastContainer, toast } from "react-toastify";

const ManageStockCard = ({ item, deleteStock }) => {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);

  const onDelete = async (id) => {
    toast.warning("This could take a while if the item has a lot of history");
    const res = await axios.delete(`/stock/delete?id=${id}`);
    setDeleting(false);
    if (res.data.status) {
      deleteStock(id);
      toast.success("Item deleted");
    }
  };

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
        <ToastContainer />
        <Card className="mx-auto mt-2">
          <Card.Title className="px-2 text-center d-inline-block text-truncate">
            {item.sku}
          </Card.Title>
          <ManageStockBody item={item} locations={item.locations} />

          <Card.Footer className="d-flex justify-content-between">
            <Button
              onClick={() => {
                onDelete(item.id);
                setDeleting(true);
              }}
            >
              {deleting ? <Spinner /> : "Delete"}
            </Button>
            <Button
              disabled={deleting}
              onClick={() => {
                dispatch(setPopupScreen(1));
                dispatch(setPopupStock(item));
                dispatch(togglePopup());
              }}
            >
              Edit
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ManageStockCard;
