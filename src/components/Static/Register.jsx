import "../../styles/Register.css";
import "../../styles/Accordion.css";

import { useState } from "react";
import { gsap } from "gsap";
import Intro from "./register/Intro";
import Personal from "./register/Personal";
import Company from "./register/Company";

const Register = () => {
  const [type, setType] = useState();
  const [showPersonal, setShowPersonal] = useState(false);

  const onIntroNext = (type) => {
    type !== undefined && setType(type);
    setShowPersonal(true);
  };

  const onRegister = (payload) => {
    console.log(payload);
  };

  return (
    <>
      {type === undefined && <Intro onNext={onIntroNext} setType={setType} />}
      {type !== undefined && showPersonal && <Personal setShowPersonal={setShowPersonal} />}
      {type === 1 && !showPersonal && <Company onRegister={onRegister} />}
    </>
  );
};

export default Register;
