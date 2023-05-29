import "../../styles/Register.css";
import "../../styles/Accordion.css";

import { useState } from "react";

import Intro from "./register/Intro";
import Personal from "./register/Personal";
import Company from "./register/Company";
import axios from "../../utils/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userSlice";
import { setCompany } from "../../reducers/companySlice";
import { setStore } from "../../localStorage";
import { useNavigate } from "react-router-dom";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(undefined);

  const [personal, setPersonal] = useState({});

  const [showSpinner, setShowSpinner] = useState(false);

  const onIntroNext = (type) => type && setAccountType(type);

  const onSubmit = async (type, payload) => {
    type === 0 && setPersonal(payload); //Store personal details incase register as company

    if (accountType === 0 && !Object.keys(payload).length) return;

    if (
      (accountType > 0 && !Object.keys(personal).length) ||
      (accountType > 0 && !Object.keys(payload).length)
    )
      return; //Check we have everything we need before submitting.

    setShowSpinner(true);
    const res = await axios.put("/account/register", {
      data: { ...personal, ...payload, accountType },
    });

    switch (res.data.status) {
      case 1:
        console.log(res.data);
        console.log(personal);
        console.log(payload);
        dispatch(
          setUser(
            accountType > 0
              ? { ...personal, authenticated: true, token: res.data.token }
              : { ...payload, authenticated: true, token: res.data.token }
          )
        );

        dispatch(setCompany(accountType > 0 ? payload : {}));
        setStore({ key: "token", data: res.data.token });

        accountType > 0 && setStore({ key: "company", data: payload });
        navigate("/dashboard");
        break;
      // case 2:
      // setUserHasAccount(true);
      // break;
      default:
        break;
    }
  };

  return (
    <div className="overflow-hidden">
      {accountType === undefined ? (
        <Intro onNext={onIntroNext} setAccountType={setAccountType} />
      ) : accountType === 0 || (accountType > 0 && Object.keys(personal).length === 0) ? (
        <Personal onNext={onSubmit} showSpinner={showSpinner} accountType={accountType} />
      ) : (
        <Company onNext={onSubmit} showSpinner={showSpinner} />
      )}
    </div>
  );
};

export default Register;
