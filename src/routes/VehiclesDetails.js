import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function VehiclesDetails() {
  let { id } = useParams();
  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    vehiclesDetails,
    getVehiclesDetails,
    filmsOnVehiclesDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getVehiclesDetails("/vehicles/" + id);
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
                  <span className="normalText">{vehiclesDetails.name}</span>
                </h3>
                <h3>
                  Model:{" "}
                  <span className="normalText">{vehiclesDetails.model}</span>
                </h3>
                <h3>
                  Vehicle Class:{" "}
                  <span className="normalText">
                    {vehiclesDetails.vehicle_class}
                  </span>
                </h3>
                <h3>
                  Manufacturer:{" "}
                  <span className="normalText">
                    {vehiclesDetails.manufacturer}
                  </span>
                </h3>
                <h3>
                  Cost In Credits:{" "}
                  <span className="normalText">
                    {vehiclesDetails.cost_in_credits === "unknown"
                      ? "unknown"
                      : numberFormat.format(vehiclesDetails.cost_in_credits)}
                  </span>
                </h3>
                <h3>
                  Maximal Atmosphering speed:{" "}
                  <span className="normalText">
                    {vehiclesDetails.max_atmosphering_speed}
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
                {filmsOnVehiclesDetails.length !== 0 &&
                  vehiclesDetails.films.map((element, index) => (
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
                      {filmsOnVehiclesDetails[index]}
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
