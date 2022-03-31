import { useEffect, useContext } from "react";
import { GeneralContext } from "../providers/GeneralProvider";
import { Link, useParams } from "react-router-dom";
import spinnerSW from "../img/spinnerSW.gif";
import errorAPI from "../img/errorAPI.png";
import "../Styles.css";

export default function FilmsDetails() {
  let { id } = useParams();

  const {
    apiErrorStatus,
    isLoadingResults,
    isLoadingPartialsResults,
    filmsDetails,
    getFilmsDetails,
    peopleOnFilmsDetails,
    clearStates,
  } = useContext(GeneralContext);

  useEffect(() => {
    if (!apiErrorStatus) getFilmsDetails("/films/" + id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!apiErrorStatus && (
        <div className="details">
          {isLoadingPartialsResults && (
            <img className="spinnerSW" src={spinnerSW} alt="Spinner" />
          )}
          {!isLoadingPartialsResults && (
            <div>
              <div className="detailedData">
                <h2>General Information:</h2>
                <h3>
                  Title:{" "}
                  <span className="normalText">
                    Star Wars "{filmsDetails.title}". Episode{" "}
                    {filmsDetails.episode_id}
                  </span>
                </h3>
                <h3>
                  Release Date:{" "}
                  <span className="normalText">
                    {filmsDetails.release_date}
                  </span>
                </h3>
                <h3>
                  Director:{" "}
                  <span className="normalText">{filmsDetails.director}</span>
                </h3>
                <h3>
                  Producer:{" "}
                  <span className="normalText">{filmsDetails.producer}</span>
                </h3>
                <h3>
                  Opening Crawl:{" "}
                  <span className="normalText">
                    {filmsDetails.opening_crawl}
                  </span>
                </h3>
              </div>
              <div className="detailedData">
                <h2>( + ) Characters in this film</h2>
              </div>
            </div>
          )}
          {!isLoadingPartialsResults && isLoadingResults && (
            <img className="spinnerSW" src={spinnerSW} alt="Spinner" />
          )}
          {!isLoadingPartialsResults && !isLoadingResults && (
            <>
              <div className="smallCardFlex">
                {peopleOnFilmsDetails.length !== 0 &&
                  filmsDetails.characters.map((element, index) => (
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
                      {peopleOnFilmsDetails[index]}
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
