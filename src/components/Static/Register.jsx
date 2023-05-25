import "../../styles/Register.css";
import "../../styles/Accordion.css";
import AccordionQuestion from "./AccordionQuestion";
import { useDispatch } from "react-redux";
import { setPopupScreen, setPopupText, togglePopup } from "../../reducers/popupSlice";

const accountTypes = [
  {
    question: "Company",
    answer: "",
  },
  {
    question: "Person",
    answer: "",
  },
];

const Register = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="register-as-container">
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

        <p className="mt-3 text-muted" onClick={onClick}>
          If you're not sure.
        </p>
      </div>
    </div>
  );
};

export default Register;
