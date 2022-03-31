import { useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../Styles.css";

export default function NavBar() {
  const { clearStates } = useContext(GeneralContext);
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];
  const placeholder = {
    "": "Home",
    films: "Films",
    people: "People",
    planets: "Planets",
    species: "Species",
    starships: "Starships",
    vehicles: "Vehicles",
  }[location];

  return (
    <div className="navBar">
      <Link to="/" onClick={() => clearStates()}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="textAlignCenter">
        Star Wars Wiki: {placeholder || "Error 404"}
      </div>
      <span></span>
    </div>
  );
}
