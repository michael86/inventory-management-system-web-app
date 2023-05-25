import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

import Input from "../../Shared/Input";

import { validateInput } from "../../../validation/Utils";
import { personal } from "../../../schema/genRegisterInputs";

import "../../../styles/Modal.css";
import axios from "../../../utils/axios";

const Personal = ({ setShowPersonal }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);

  const [userHasAccount, setUserHasAccount] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setUserHasAccount(false);

    const data = Object.fromEntries(new FormData(e.target));

    data.pricePlan = Number(data.pricePlan);

    //check if length of keys is 0. This means no errors. Could poss convert obj to arr
    if (errors && Object.keys(errors).length > 0) return;

    const res = await axios.put(`account/register`, { data });

    if (res.status !== 200) {
      console.log("something went wrong", res);
      return;
    }

    switch (res.data.status) {
      case 1:
        break;
      case 2:
        setUserHasAccount(true);
        break;
      default:
        break;
    }
  };

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <>
      <Form onSubmit={onSubmit}>
        {personal.map((input, index) => {
          return (
            <Input
              type={input.type}
              controlId={input.controlId}
              label={input.label}
              classNames={input.classNames}
              placeholder={input.placeholder}
              formText={input.formText}
              onInput={onInput}
              custError={input.custError}
              errors={errors}
              required={input.required}
              key={index}
            />
          );
        })}

        {userHasAccount && (
          <>
            <p className="text-danger mb-0">Email is invalid or already registered</p>
            <div className="mb-3">
              <Link to="forgot-password" className="text-primary ">
                Forgot Password
              </Link>
            </div>
          </>
        )}
        {/* <Buttons
          variant="primary"
          type="submit"
          label={showSpinner ? <Spinner animation="border" variant="warning" /> : "Submit"}
          secondaryVariant="warning"
          secondaryOnClick={() => dispatch(setPopupScreen(0))}
          secondaryLabel="Login"
        /> */}
        <FontAwesomeIcon
          icon={faForward}
          className="register-next"
          onClick={() => setShowPersonal(false)}
        />
      </Form>
    </>
  );
};

export default Personal;
