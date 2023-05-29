import "../../styles/Register.css";
import "../../styles/Accordion.css";

import { useState } from "react";
import { gsap } from "gsap";
import Intro from "./register/Intro";
import Personal from "./register/Personal";
import Company from "./register/Company";

const Register = () => {
  const [accountType, setAccountType] = useState(undefined);

  const [personal, setPersonal] = useState({});
  const [company, setCompany] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const onIntroNext = (type) => type && setAccountType(type);

  const onSubmit = (type, payload) => {
    type === 0 ? setPersonal(payload) : setCompany(payload);

    if (accountType === 0 && !Object.keys(payload).length) return;

    if (
      (accountType > 0 && !Object.keys(personal).length) ||
      (accountType > 0 && !Object.keys(payload).length)
    )
      return; //Check we have everything we need before submitting.

    setShowSpinner(true);
  };

  return (
    <>
      {accountType === undefined ? (
        <Intro onNext={onIntroNext} setAccountType={setAccountType} />
      ) : accountType === 0 || (accountType > 0 && Object.keys(personal).length === 0) ? (
        <Personal onNext={onSubmit} showSpinner={showSpinner} accountType={accountType} />
      ) : (
        <Company onNext={onSubmit} showSpinner={showSpinner} />
      )}
    </>
  );
};

export default Register;
