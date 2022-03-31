import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function SpeciesDetails() {
  let { id } = useParams();
  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    speciesDetails,
    getSpeciesDetails,
    planetOnSpeciesDetails,
    peopleOnSpeciesDetails,
    filmsOnSpeciesDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getSpeciesDetails("/species/" + id);
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
                  Specie:{" "}
                  <span className="normalText">{speciesDetails.name}</span>
                </h3>
                <h3>
                  Classification:{" "}
                  <span className="normalText">
                    {speciesDetails.classification}
                  </span>
                </h3>
                <h3>
                  Language:{" "}
                  <span className="normalText">{speciesDetails.language}</span>
                </h3>
                <h3>
                  Average Height:{" "}
                  <span className="normalText">
                    {isNaN(speciesDetails.average_height / 100)
                      ? speciesDetails.average_height
                      : speciesDetails.average_height / 100 + " m"}
                  </span>
                </h3>
                <h3>
                  Average Lifespan:{" "}
                  <span className="normalText">
                    {speciesDetails.average_lifespan === "unknown"
                    ? speciesDetails.average_lifespan
                    : speciesDetails.average_lifespan + " years"}
                  </span>
                </h3>
                <h3>
                  Designation:{" "}
                  <span className="normalText">
                    {speciesDetails.designation}
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
                <h2>Homeworld: </h2>
                {planetOnSpeciesDetails !== null && (
                  <Link
                    className="smallCard"
                    to={
                      speciesDetails.homeworld === null
                        ? "/"
                        : "/" +
                          speciesDetails.homeworld.split("/")[4] +
                          "/" +
                          speciesDetails.homeworld.split("/")[5]
                    }
                  >
                    {planetOnSpeciesDetails}
                  </Link>
                )}
              </div>
              <div className="smallCardFlex2">
                <h2>Characters: </h2>
                {peopleOnSpeciesDetails.length !== 0 &&
                  speciesDetails.people.map((element, index) => (
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
                      {peopleOnSpeciesDetails[index]}
                    </Link>
                  ))}
              </div>
              <div className="smallCardFlex2">
                <h2>Films: </h2>
                {filmsOnSpeciesDetails.length !== 0 &&
                  speciesDetails.films.map((element, index) => (
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
                      {filmsOnSpeciesDetails[index]}
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
