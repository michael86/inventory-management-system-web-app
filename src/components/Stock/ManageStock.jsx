import React, { useEffect, useState } from "react";
import { Row, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "../../utils/axios";
import ManageStockCard from "./components/ManageStockCard";

import "../../styles/ManageStock.css";
import { ToastContainer } from "react-toastify";

const ManageStock = () => {
  const [stock, setStock] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const [filter, setFilter] = useState("");
  const popupStock = useSelector((state) => state.popup.stock);

  useEffect(() => {
    const getStock = async () => {
      //Update get to use history=bool.
      const res = await axios.get("stock/get?locations=true");
      if (res.status && res.data?.stock) {
        setStock(res.data.stock);
        setApiCalled(true);
      }
    };

    getStock();
  }, [popupStock]);

  const onInput = ({ target }) => setFilter(target.value);

  const deleteStock = (id) => {
    const copy = JSON.parse(JSON.stringify(stock));
    const index = copy.findIndex((item) => item.id === id);
    copy.splice(index, 1);
    setStock(copy);
  };

  return (
    <>
      <h1 className="text-center">Manage stock</h1>
      {!apiCalled && <h3>Loading</h3>}
      {apiCalled && stock?.length === 0 && (
        <h2 className="text-center">
          No stock found, head to the <Link to="/add-stock">Add Stock</Link> page
        </h2>
      )}
      {stock?.length > 0 && (
        <div className="mx-2">
          <div className="search-container">
            <InputGroup className="search mb-3">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="Search"
                onInput={onInput}
              />
            </InputGroup>
          </div>
          <Row>
            {stock.map((item) => {
              if (item.sku.toLowerCase().includes(filter.toLowerCase())) {
                return <ManageStockCard item={item} key={item.sku} deleteStock={deleteStock} />;
              }
            })}
          </Row>
        </div>
      )}
    </>
  );
};

export default ManageStock;
