import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../../../reducers/toastSlice";

const Alert = () => {
  const { header, body, show } = useSelector((state) => state.toast);

  const dispatch = useDispatch();

  const onClose = () => dispatch(toggleToast());

  return (
    <ToastContainer className="fixed-top mx-auto">
      <Toast show={show} onClose={onClose}>
        {header && (
          <Toast.Header>
            {header.img && (
              <img src={header.img} className="rounded me-2" alt="" />
            )}
            {header.title && (
              <strong className="me-auto">{header.title}</strong>
            )}
            {header.subtitle && <small>{header.subtitle}</small>}{" "}
          </Toast.Header>
        )}
        {body && <Toast.Body>{body}</Toast.Body>}
      </Toast>
    </ToastContainer>
  );
};

export default Alert;
