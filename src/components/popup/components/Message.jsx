import { useSelector } from "react-redux";
import Header from "./Header";
import { Modal } from "react-bootstrap";

const Message = () => {
  const { message } = useSelector((state) => state.popup);
  return (
    <>
      <Header label={message.label} />

      <Modal.Body>
        {message.content.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </Modal.Body>
    </>
  );
};

export default Message;
