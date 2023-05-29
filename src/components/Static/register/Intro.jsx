import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { useDispatch } from "react-redux";
import { setPopupScreen, setPopupText, togglePopup } from "../../../reducers/popupSlice";

const Intro = ({ setAccountType }) => {
  const dispatch = useDispatch();

  const scope = useRef();
  const choice = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = scope.current.children[0].children[0];
      const subHeading = scope.current.children[0].children[1];
      const list = scope.current.children[0].children[2];
      const help = scope.current.children[0].children[3];
      const next = scope.current.children[0].children[4];

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

  const onHelpClick = () => {
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

  const getChoice = () => {
    const children = [...choice.current.children].map((child) =>
      child.children[0].checked ? child.children[0].dataset.type : null
    );

    const type = +children[children.findIndex((child) => child !== null)];

    if (isNaN(type) || type === undefined) return;

    gsap.to(scope.current.children, {
      y: -500,
      autoAlpha: 0,
      duration: 0.2,
      onComplete: () => setAccountType(type),
    });
  };

  return (
    <div className="register-container" ref={scope}>
      <div className="text-center register">
        <h1>Before you Register!</h1>
        <p>We just need to get check with you. Are you registering as a</p>

        <ul ref={choice}>
          <li>
            <input type="radio" data-type={0} id="s-option" name="selector" />
            <label htmlFor="s-option">Person</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>

          <li>
            <input type="radio" data-type={1} id="t-option" name="selector" />
            <label htmlFor="t-option">Company</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>
        </ul>

        <p className="mt-3 text-muted help" onClick={onHelpClick}>
          If you're not sure.
        </p>

        <FontAwesomeIcon icon={faForward} className="register-next" onClick={() => getChoice()} />
      </div>
    </div>
  );
};

export default Intro;
