import React, { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

import Input from "../../Shared/Input";

import { validateInput } from "../../../validation/Utils";
import { personal } from "../../../schema/genRegisterInputs";

import "../../../styles/Modal.css";
import axios from "../../../utils/axios";
import { gsap } from "gsap";

const Personal = ({ setShowPersonal }) => {
  const scope = useRef();
  const [errors, setErrors] = useState(false);

  const [userHasAccount, setUserHasAccount] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setUserHasAccount(false);

    const data = Object.fromEntries(new FormData(e.target));

    //check if length of keys is 0. This means no errors.
    if (errors && Object.keys(errors).length > 0) return;

    const res = await axios.get(`account/verify-account/${data.email}`);

    if (res.status !== 200) {
      //Add toastify here
      console.log("something went wrong", res);
      return;
    }

    res.data.invalid && setUserHasAccount(true);
    !res.data.invalid && setShowPersonal(false);
  };

  const onInput = (e) => setErrors(validateInput(e, errors));

  useLayoutEffect(() => {
    gsap.context(() => {
      const header = scope.current.children[0];
      const form = scope.current.children[1];
      const email = form.children[0];
      const pass = form.children[1];
      const name = form.children[2];
      const button = form.children[3];

      gsap
        .timeline()
        .from(header, { autoAlpha: 0, x: -500 })
        .from(email, { autoAlpha: 0, x: 500 })
        .from(pass, { autoAlpha: 0, y: -500 })
        .from(name, { autoAlpha: 0, y: 500 })
        .from(button, { autoAlpha: 0, scale: 0 });
    }, scope);
  }, []);

  return (
    <div className="register-container" ref={scope}>
      <h1>Tell us about you</h1>
      <Form onSubmit={onSubmit} className="personal-form register mt-0 mb-0">
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
              <Link to="/forgot-password" className="text-primary ">
                Forgot Password
              </Link>
            </div>
          </>
        )}

        <Button className="bg-transparent border-0 mx-auto d-block" type="submit">
          <FontAwesomeIcon icon={faForward} className="register-next text-black" />
        </Button>
      </Form>
    </div>
  );
};

export default Personal;
