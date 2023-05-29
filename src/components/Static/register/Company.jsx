import React, { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { Button, Form, Row } from "react-bootstrap";

import Input from "../../Shared/Input";

import { validateInput } from "../../../validation/Utils";
import { company as inputs } from "../../../schema/genRegisterInputs";

import "../../../styles/Modal.css";
import axios from "../../../utils/axios";
import { gsap } from "gsap";

const Company = ({ onRegister }) => {
  const scope = useRef();
  const [errors, setErrors] = useState(false);

  const [companyExists, setcompanyExists] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setcompanyExists(false);

    const data = Object.fromEntries(new FormData(e.target));

    //check if length of keys is 0. This means no errors.
    if (errors && Object.keys(errors).length > 0) return;

    const { company, companyPostcode } = data;

    const res = await axios.get(`account/verify-company/${company}/${companyPostcode}`);

    if (res.status !== 200) {
      //Add toastify here
      console.log("something went wrong", res);
      return;
    }

    res.data.invalid && setcompanyExists(true);
    !res.data.invalid && onRegister(false);
  };

  const onInput = (e) => setErrors(validateInput(e, errors));

  useLayoutEffect(() => {
    gsap.context(() => {
      const header = scope.current.children[0];
      const form = scope.current.children[1];

      gsap
        .timeline()
        .from(header, { autoAlpha: 0, y: -500 })
        .from(form.children, { autoAlpha: 0, y: 500, stagger: 0.1 });
    }, scope);
  }, []);

  return (
    <div className="register-container" ref={scope}>
      <h1>And now your company</h1>
      <Form onSubmit={onSubmit} className="personal-form register mt-0 mb-0 ">
        {inputs.map((input, index) => {
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

        {companyExists && (
          <>
            <p className="text-danger mb-0">This company is already in our system.</p>
            <p className="text-danger mb-0">Did you mean to register as a person (employee).</p>
          </>
        )}

        <Button className="bg-transparent border-0 mx-auto d-block" type="submit">
          <FontAwesomeIcon icon={faForward} className="register-next text-black" />
        </Button>
      </Form>
    </div>
  );
};

export default Company;
