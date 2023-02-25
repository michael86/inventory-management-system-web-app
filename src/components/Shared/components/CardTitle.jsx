import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardTitle = ({ title, subtitle }) => {
  return (
    <>
      <Card.Title className="p-2 bg-primary rounded-top">{title}</Card.Title>;
      {subtitle && (
        <Card.Subtitle className="px-2">
          {subtitle.text}
          {subtitle.link && (
            <Link to={subtitle.link.to}>{subtitle.link.text}</Link>
          )}
        </Card.Subtitle>
      )}
    </>
  );
};

export default CardTitle;
