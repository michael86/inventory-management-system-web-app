import "../../styles/Register.css";
import "../../styles/Accordion.css";

import { useState } from "react";
import { gsap } from "gsap";
import Intro from "./register/Intro";

const Register = () => {
  const [type, setType] = useState();

  const onIntroNext = (type) => type !== undefined && setType(type);

  return <>{type === undefined && <Intro onNext={onIntroNext} setType={setType} />}</>;
};

export default Register;
