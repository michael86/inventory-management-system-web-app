import "../../../styles/Register.css";
import "../../../styles/Accordion.css";

import { useDispatch } from "react-redux";
import { setPopupScreen, setPopupText, togglePopup } from "../../../reducers/popupSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Intro = ({ addAnimation }) => {
  const dispatch = useDispatch();
  const scope = useRef();

  const onClick = () => {
    dispatch(
      setPopupText({
        label: "Account Types",
        content: [
          "Registering as a company is for anyone that has never used cims before. If you register as a company, this will make you the main account holder.",
          "Registering as a person will add you to a pre-existing account as a sub user pending company admin approval. Your employer will normally as you to do this",
        ],
      })
    );
    dispatch(setPopupScreen(2));
    dispatch(togglePopup());
  };

  useLayoutEffect(() => {
    const animation = gsap.to(scope.current, { rotate: 180, x: 100 });
    addAnimation(animation);

    return () => animation.progress(0).kill();
  }, [addAnimation]);

  return (
    <div className="register-as-container" ref={scope}>
      <div className="text-center register-as">
        <h1>Before you Register!</h1>
        <p>We just need to get check with you. Are you registering as a</p>

        <ul>
          <li>
            <input type="radio" id="s-option" name="selector" />
            <label htmlFor="s-option">Person</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>

          <li>
            <input type="radio" id="t-option" name="selector" />
            <label htmlFor="t-option">Company</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>
        </ul>

        <p className="mt-3 text-muted help" onClick={onClick}>
          If you're not sure.
        </p>

        <FontAwesomeIcon icon={faForward} className="register-next" />
      </div>
    </div>
  );
};

export default Intro;
