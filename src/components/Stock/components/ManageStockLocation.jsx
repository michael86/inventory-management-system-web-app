import { Badge } from "react-bootstrap";

const ManageStockLocation = ({ name, value }) => {
  return (
    <Badge bg="primary">
      <span className="text-warning">{name}</span>: {value}
    </Badge>
  );
};

export default ManageStockLocation;
