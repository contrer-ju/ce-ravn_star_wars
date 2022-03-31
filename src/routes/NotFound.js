import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link } from "react-router-dom";
import error404 from "../img/error404.png";
import "../Styles.css";

export default function NotFound() {
  const { clearStates } = useContext(GeneralContext);
  return (
    <div className="error">
      <img src={error404} alt="Error 404" className="error404" />
      <span className="errorText">
        "Great shot kid. That was one in a million"
      </span>
      <span className="errorText">Page Not Found.</span>
      <Link to="/" onClick={() => clearStates()}>
        LET'S GET YOU HOME
      </Link>
    </div>
  );
}
