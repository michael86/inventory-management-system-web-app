import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setStock } from "../reducers/stockSlice";
import axios from "../utils/axiosInstance";
import ManageStockCard from "./Stock/ManageStockCard";

import "../styles/ManageStock.css";

const ManageStock = () => {
  const [stock, setStock] = useState([]);
  const onDelete = (sku) => {
    // let copy = [...stock];
    // copy.splice(
    //   copy.findIndex((item) => item.sku === sku),
    //   1
    // );
    // dispatch(setStock(copy));
  };

  useEffect(() => {
    const getStock = async () => {
      //Update get to use history=bool.
      const res = await axios.get("stock/get/?locations=true");
      if (res.status && res.data?.stock) {
        setStock(res.data.stock);
      }
    };

    getStock();
  }, []);

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
