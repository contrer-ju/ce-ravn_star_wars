import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function PeopleDetails() {
  let { id } = useParams();

  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    peoplesDetails,
    getPeoplesDetails,
    filmsOnPeoplesDetails,
    specieOnPeoplesDetails,
    planetOnPeoplesDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getPeoplesDetails("/people/" + id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <span className="normalText">{peoplesDetails.name}</span>
                </h3>
                <h3>
                  Birth of Year:{" "}
                  <span className="normalText">
                    {peoplesDetails.birth_year}
                  </span>
                </h3>
                <h3>
                  Gender:{" "}
                  <span className="normalText">{peoplesDetails.gender}</span>
                </h3>
                <h3>
                  Height:{" "}
                  <span className="normalText">
                    {peoplesDetails.height === "unknown"
                      ? peoplesDetails.height
                      : peoplesDetails.height / 100 + " m"}
                  </span>
                </h3>
                <h3>
                  Mass:{" "}
                  <span className="normalText">
                    {peoplesDetails.mass === "unknown"
                      ? peoplesDetails.mass
                      : peoplesDetails.mass + " kg"}
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
                <h2>Specie: </h2>
                {specieOnPeoplesDetails !== null && (
                  <Link
                    className="smallCard"
                    to={
                      peoplesDetails.species[0] === undefined
                        ? "/"
                        : "/" +
                          peoplesDetails.species[0].split("/")[4] +
                          "/" +
                          peoplesDetails.species[0].split("/")[5]
                    }
                  >
                    {specieOnPeoplesDetails}
                  </Link>
                )}
              </div>
              <div className="smallCardFlex2">
                <h2>Homeworld: </h2>
                {planetOnPeoplesDetails !== null && (
                  <Link
                    className="smallCard"
                    to={
                      peoplesDetails.homeworld === null
                        ? "/"
                        : "/" +
                          peoplesDetails.homeworld.split("/")[4] +
                          "/" +
                          peoplesDetails.homeworld.split("/")[5]
                    }
                  >
                    {planetOnPeoplesDetails}
                  </Link>
                )}
              </div>
              <div className="smallCardFlex2">
                <h2>Films: </h2>
                {filmsOnPeoplesDetails.length !== 0 &&
                  peoplesDetails.films.map((element, index) => (
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
                      {filmsOnPeoplesDetails[index]}
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
