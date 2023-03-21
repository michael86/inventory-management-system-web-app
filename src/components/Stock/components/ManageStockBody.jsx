import { Card, Badge } from "react-bootstrap";
import { penniesToPounds } from "../../../utils/stock";
import ManageStockLocation from "./ManageStockLocation";

const ManageStockBody = ({ item, locations }) => {
  return (
    <>
      <Card.Body className="d-flex flex-column">
        <input type="text" value={`Qty: ${item.quantity}`} disabled />
        <input type="text" value={`Price: ${item.price}` || "free issue"} disabled />

        <div className="location-container mt-2">
          <Card.Text className="text-center">Location</Card.Text>
          <div className="d-flex flex-wrap justify-content-between ">
            {locations.map((l, index) => {
              return <ManageStockLocation name={l.name} value={l.value} key={index} />;
            })}
          </div>
        </div>
      </Card.Body>
    </>
  );
};

export default ManageStockBody;
