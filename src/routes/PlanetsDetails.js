import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function PlanetsDetails() {
  let { id } = useParams();

  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    planetsDetails,
    getPlanetsDetails,
    peopleOnPlanetsDetails,
    filmsOnPlanetsDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getPlanetsDetails("/planets/" + id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let numberFormat = new Intl.NumberFormat("en-US");

  return (
    <>
      {!apiErrorStatus && (
        <div className="people">
          {isLoadingPartialsResults && (
            <img className="spinnerSW" src={spinnerSW} alt="Spinner" />
          )}
          {!isLoadingPartialsResults && (
            <>
              <div className="detailedData">
                <h2>Basic Information:</h2>
                <h3>
                  Name:{" "}
                  <span className="normalText">{planetsDetails.name}</span>
                </h3>
                <h3>
                  Climate:{" "}
                  <span className="normalText">{planetsDetails.climate}</span>
                </h3>
                <h3>
                  Terrain:{" "}
                  <span className="normalText">{planetsDetails.terrain}</span>
                </h3>
                <h3>
                  population:{" "}
                  <span className="normalText">
                    {planetsDetails.population === "unknown"
                      ? "unknown"
                      : numberFormat.format(planetsDetails.population) +
                        " people"}
                  </span>
                </h3>
                <h3>
                  Orbital Period:{" "}
                  <span className="normalText">
                    {planetsDetails.orbital_period === "unknown"
                      ? planetsDetails.orbital_period
                      : planetsDetails.orbital_period + " days"}
                  </span>
                </h3>
              </div>
              <div className="detailedData">
                <h2>( + ) More Information</h2>
              </div>
            </>
          )}
          {!isLoadingPartialsResults && isLoadingResults && (
            <img className="spinnerSW" src={spinnerSW} alt="Spinner" />
          )}
          {!isLoadingPartialsResults && !isLoadingResults && (
            <>
              <div className="smallCardFlex2">
                <h2>Residents: </h2>
                {peopleOnPlanetsDetails.length !== 0 &&
                  planetsDetails.residents.map((element, index) => (
                    <Link
                      className="smallCard"
                      key={index}
                      to={
                        "/" +
                        element.split("/")[4] +
                        "/" +
                        element.split("/")[5]
                      }
                    >
                      {peopleOnPlanetsDetails[index]}
                    </Link>
                  ))}
              </div>
              <div className="smallCardFlex2">
                <h2>Films: </h2>
                {filmsOnPlanetsDetails.length !== 0 &&
                  planetsDetails.films.map((element, index) => (
                    <Link
                      className="smallCard"
                      key={index}
                      to={
                        "/" +
                        element.split("/")[4] +
                        "/" +
                        element.split("/")[5]
                      }
                    >
                      {filmsOnPlanetsDetails[index]}
                    </Link>
                  ))}
              </div>
            </>
          )}
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
