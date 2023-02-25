import { Card, Badge } from "react-bootstrap";

const ManageStockBody = ({ item, locations }) => {
  return (
    <>
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
            {locations.map((location) => {
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
    </>
  );
};

export default ManageStockBody;
