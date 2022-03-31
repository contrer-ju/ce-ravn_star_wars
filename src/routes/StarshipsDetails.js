import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function StarshipsDetails() {
  let { id } = useParams();
  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    starshipsDetails,
    getStarshipsDetails,
    filmsOnStarshipsDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getStarshipsDetails("/starships/" + id);
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
                  <span className="normalText">{starshipsDetails.name}</span>
                </h3>
                <h3>
                  Model:{" "}
                  <span className="normalText">{starshipsDetails.model}</span>
                </h3>
                <h3>
                  Starship Class:{" "}
                  <span className="normalText">
                    {starshipsDetails.starship_class}
                  </span>
                </h3>
                <h3>
                  Manufacturer:{" "}
                  <span className="normalText">
                    {starshipsDetails.manufacturer}
                  </span>
                </h3>
                <h3>
                  Cost In Credits:{" "}
                  <span className="normalText">
                    {starshipsDetails.cost_in_credits === "unknown"
                      ? "unknown"
                      : numberFormat.format(starshipsDetails.cost_in_credits)}
                  </span>
                </h3>
                <h3>
                  Hyperdrive Rating:{" "}
                  <span className="normalText">
                    {starshipsDetails.hyperdrive_rating}
                  </span>
                </h3>
                <h3>
                  Megalight:{" "}
                  <span className="normalText">{starshipsDetails.MGLT}</span>
                </h3>
                <h3>
                  Maximal Atmosphering Speed:{" "}
                  <span className="normalText">
                    {starshipsDetails.max_atmosphering_speed}
                  </span>
                </h3>
                <h3>
                  Length:{" "}
                  <span className="normalText">
                    {isNaN(numberFormat.format(starshipsDetails.length))
                      ? starshipsDetails.length + " m"
                      : numberFormat.format(starshipsDetails.length) + " m"}
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
                <h2>Films: </h2>
                {filmsOnStarshipsDetails.length !== 0 &&
                  starshipsDetails.films.map((element, index) => (
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
                      {filmsOnStarshipsDetails[index]}
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
