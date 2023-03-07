import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "../../utils/axios";
import ManageStockCard from "./components/ManageStockCard";

import "../../styles/ManageStock.css";

const ManageStock = () => {
  const [stock, setStock] = useState([]);
  const popupStock = useSelector((state) => state.popup.stock);

  //Will delete the item from the database.
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
  }, [popupStock]);

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
