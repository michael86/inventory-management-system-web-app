import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setStock } from "../reducers/stockSlice";

import ManageStockCard from "./Stock/ManageStockCard";

import "../styles/ManageStock.css";


const ManageStock = () => {
  const stock = useSelector((state) => state.stock.stock);
  const dispatch = useDispatch();

  const onDelete = (sku) => {
    let copy = [...stock];

    copy.splice(
      copy.findIndex((item) => item.sku === sku),
      1
    );

    dispatch(setStock(copy));
  };

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
              <ManageStockCard item={item} key={item.sku} onDelete={onDelete} />
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ManageStock;
