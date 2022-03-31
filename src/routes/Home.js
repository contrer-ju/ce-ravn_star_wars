import { Link } from "react-router-dom";
import filmAvatar from "../img/films.png";
import peopleAvatar from "../img/people.png";
import planetsAvatar from "../img/planets.png";
import speciesAvatar from "../img/species.png";
import starshipsAvatar from "../img/starships.png";
import vehiclesAvatar from "../img/vehicles.png";
import "../Styles.css";

export default function Home() {
  return (
    <div className="home">
      <Link className="card" to="/films">
        <img src={filmAvatar} alt="Films Avatar" className="cardAvatar" />
        <span className="cardText">Films</span>
      </Link>
      <Link className="card" to="/people">
        <img src={peopleAvatar} alt="People Avatar" className="cardAvatar" />
        <span className="cardText">People</span>
      </Link>
      <Link className="card" to="/planets">
        <img src={planetsAvatar} alt="Planets Avatar" className="cardAvatar" />
        <span className="cardText">Planets</span>
      </Link>
      <Link className="card" to="/species">
        <img src={speciesAvatar} alt="Species Avatar" className="cardAvatar" />
        <span className="cardText">Species</span>
      </Link>
      <Link className="card" to="/starships">
        <img
          src={starshipsAvatar}
          alt="Starships Avatar"
          className="cardAvatar"
        />
        <span className="cardText">Starships</span>
      </Link>
      <Link className="card" to="/vehicles">
        <img
          src={vehiclesAvatar}
          alt="Vehicles Avatar"
          className="cardAvatar"
        />
        <span className="cardText">Vehicles</span>
      </Link>
    </div>
  );
}
