import { useContext, useEffect } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function Starships() {
  const {
    apiErrorStatus,
    isLoadingResults,
    starshipsList,
    getStarshipsList,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus && starshipsList.length === 0) getStarshipsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!apiErrorStatus && (
        <div className="home">
          {isLoadingResults && (
            <img className="spinnerSW" src={spinnerSW} alt="Spinner" />
          )}
          {!isLoadingResults &&
            starshipsList.map((element, index) => (
              <Link
                className="mediumCard"
                key={index}
                to={"/starships/" + element.url.split("/")[5]}
              >
                <div className="mediumCardText bolderText">{element.name}</div>
              </Link>
            ))}
        </div>
      )}
      {apiErrorStatus && (
        <div className="error">
          <img src={errorAPI} alt="Error API" className="errorAPI" />
          <span className="errorText">
            "Sir, it’s quite possible this asteroid is not entirely stable"
          </span>
          <span className="errorText">Failed to load data.</span>
          <Link className="btn" to="/" onClick={() => clearStates()}>
            LET'S GET YOU HOME
          </Link>
        </div>
      )}
    </>
  );
}
