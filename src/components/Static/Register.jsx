import "../../styles/Register.css";
import "../../styles/Accordion.css";

import { useDispatch } from "react-redux";
import { setPopupScreen, setPopupText, togglePopup } from "../../reducers/popupSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Register = () => {
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
    const ctx = gsap.context(() => {
      const header = scope.current.children[0].children[0];
      const subHeading = scope.current.children[0].children[1];
      const list = scope.current.children[0].children[2];
      const help = scope.current.children[0].children[3];
      const next = scope.current.children[0].children[4];
      console.log(header);

      gsap
        .timeline()
        .from(scope.current, { autoAlpha: 0, duration: 0.3 })
        .from(header, { autoAlpha: 0, y: 300, duration: 0.3 })
        .from(subHeading, { autoAlpha: 0, duration: 0.3 })
        .from(list.children, { autoAlpha: 0, scale: 0, duration: 0.3, stagger: 0.2 })
        .from(help, { autoAlpha: 0, duration: 0.3 })
        .from(next, { autoAlpha: 0, x: 500, duration: 0.3 });
    }, [scope]);

    return () => ctx.revert();
  }, []);

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

export default Register;
