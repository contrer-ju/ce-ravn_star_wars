import { useContext, useEffect } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function Films() {
  const {
    apiErrorStatus,
    isLoadingResults,
    filmsList,
    getGeneralData,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus && filmsList.length === 0) getGeneralData("films");
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
            filmsList.map((element, index) => (
              <Link
                className="mediumCard"
                key={index}
                to={"/films/" + (index + 1)}
              >
                <div className="mediumCardText bolderText">
                  Star Wars: "{element.title}"
                </div>
                <div className="mediumCardText">
                  Episode{" "}
                  {element.episode_id === 1
                    ? "I"
                    : element.episode_id === 2
                    ? "II"
                    : element.episode_id === 3
                    ? "III"
                    : element.episode_id === 4
                    ? "IV"
                    : element.episode_id === 5
                    ? "V"
                    : element.episode_id === 6
                    ? "VI"
                    : element.episode_id === 7
                    ? "VII"
                    : element.episode_id === 8
                    ? "VIII"
                    : "IX"}
                </div>
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
