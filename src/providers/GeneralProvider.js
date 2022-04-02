import { createContext, useState } from "react";
import onGettingFilmsDetails from "../handlers/onGettingFilmsDetails";
import onGettingPeoplesDetails from "../handlers/onGettingPeoplesDetails";
import onGettingPlanetsDetails from "../handlers/onGettingPlanetsDetails";
import onGettingSpeciesDetails from "../handlers/onGettingSpeciesDetails";
import onGettingStarshipsDetails from "../handlers/onGettingStarshipsDetails";
import onGettingVehiclesDetails from "../handlers/onGettingVehiclesDetails";

import onGettingGeneralData from "../handlers/onGettingGeneralData";

export const GeneralContext = createContext({});

const GeneralProvider = ({ children }) => {
  const [apiErrorStatus, setApiErrorStatus] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [isLoadingPartialsResults, setIsLoadingPartialsResults] =
    useState(false);

  const [filmsList, setFilmsList] = useState([]);
  const [filmsDetails, setFilmsDetails] = useState([]);
  const [peopleOnFilmsDetails, setPeopleOnFilmsDetails] = useState([]);

  const [peoplesList, setPeoplesList] = useState([]);
  const [peoplesDetails, setPeoplesDetails] = useState([]);
  const [specieOnPeoplesDetails, setSpecieOnPeoplesDetails] = useState(null);
  const [planetOnPeoplesDetails, setPlanetOnPeoplesDetails] = useState(null);
  const [filmsOnPeoplesDetails, setFilmsOnPeoplesDetails] = useState([]);

  const [planetsList, setPlanetsList] = useState([]);
  const [planetsDetails, setPlanetsDetails] = useState([]);
  const [peopleOnPlanetsDetails, setPeopleOnPlanetsDetails] = useState([]);
  const [filmsOnPlanetsDetails, setFilmsOnPlanetsDetails] = useState([]);

  const [speciesList, setSpeciesList] = useState([]);
  const [speciesDetails, setSpeciesDetails] = useState([]);
  const [planetOnSpeciesDetails, setPlanetOnSpeciesDetails] = useState(null);
  const [peopleOnSpeciesDetails, setPeopleOnSpeciesDetails] = useState([]);
  const [filmsOnSpeciesDetails, setFilmsOnSpeciesDetails] = useState([]);

  const [starshipsList, setStarshipsList] = useState([]);
  const [starshipsDetails, setStarshipsDetails] = useState([]);
  const [filmsOnStarshipsDetails, setFilmsOnStarshipsDetails] = useState([]);

  const [vehiclesList, setVehiclesList] = useState([]);
  const [vehiclesDetails, setVehiclesDetails] = useState([]);
  const [filmsOnVehiclesDetails, setFilmsOnVehiclesDetails] = useState([]);

  const getGeneralData = (location) =>
    onGettingGeneralData(
      location,
      setIsLoadingResults,
      setApiErrorStatus,
      setFilmsList,
      setPeoplesList,
      setPlanetsList,
      setSpeciesList,
      setStarshipsList,
      setVehiclesList
    );

  const getFilmsDetails = (location) => {
    setPeopleOnFilmsDetails([]);
    onGettingFilmsDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setFilmsDetails,
      setPeopleOnFilmsDetails
    );
  };

  const getPeoplesDetails = (location) => {
    setFilmsOnPeoplesDetails([]);
    onGettingPeoplesDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setPeoplesDetails,
      setSpecieOnPeoplesDetails,
      setPlanetOnPeoplesDetails,
      setFilmsOnPeoplesDetails
    );
  };

  const getPlanetsDetails = (location) => {
    setPeopleOnPlanetsDetails([]);
    setFilmsOnPlanetsDetails([]);
    onGettingPlanetsDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setPlanetsDetails,
      setPeopleOnPlanetsDetails,
      setFilmsOnPlanetsDetails
    );
  };

  const getSpeciesDetails = (location) => {
    setPeopleOnSpeciesDetails([]);
    setFilmsOnSpeciesDetails([]);
    onGettingSpeciesDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setSpeciesDetails,
      setPlanetOnSpeciesDetails,
      setPeopleOnSpeciesDetails,
      setFilmsOnSpeciesDetails
    );
  };

  const getStarshipsDetails = (location) => {
    setFilmsOnStarshipsDetails([]);
    onGettingStarshipsDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setStarshipsDetails,
      setFilmsOnStarshipsDetails
    );
  };

  const getVehiclesDetails = (location) => {
    setFilmsOnVehiclesDetails([]);
    onGettingVehiclesDetails(
      location,
      setIsLoadingResults,
      setIsLoadingPartialsResults,
      setApiErrorStatus,
      setVehiclesDetails,
      setFilmsOnVehiclesDetails
    );
  };

  const clearStates = () => {
    setApiErrorStatus(false);
    setIsLoadingResults(false);
    setIsLoadingPartialsResults(false);
    setFilmsList([]);
    setFilmsDetails([]);
    setPeopleOnFilmsDetails([]);
    setPeoplesList([]);
    setPeoplesDetails([]);
    setSpecieOnPeoplesDetails(null);
    setPlanetOnPeoplesDetails(null);
    setFilmsOnPeoplesDetails([]);
    setPlanetsList([]);
    setPlanetsDetails([]);
    setPeopleOnPlanetsDetails([]);
    setFilmsOnPlanetsDetails([]);
    setSpeciesList([]);
    setSpeciesDetails([]);
    setPlanetOnSpeciesDetails(null);
    setPeopleOnSpeciesDetails([]);
    setFilmsOnSpeciesDetails([]);
    setStarshipsList([]);
    setStarshipsDetails([]);
    setFilmsOnStarshipsDetails([]);
    setVehiclesList([]);
    setVehiclesDetails([]);
    setFilmsOnVehiclesDetails([]);
  };

  return (
    <GeneralContext.Provider
      value={{
        apiErrorStatus,
        isLoadingResults,
        isLoadingPartialsResults,
        getGeneralData,
        filmsList,
        filmsDetails,
        peopleOnFilmsDetails,
        getFilmsDetails,
        peoplesList,
        peoplesDetails,
        specieOnPeoplesDetails,
        planetOnPeoplesDetails,
        filmsOnPeoplesDetails,
        getPeoplesDetails,
        planetsList,
        planetsDetails,
        peopleOnPlanetsDetails,
        filmsOnPlanetsDetails,
        getPlanetsDetails,
        speciesList,
        speciesDetails,
        planetOnSpeciesDetails,
        peopleOnSpeciesDetails,
        filmsOnSpeciesDetails,
        getSpeciesDetails,
        starshipsList,
        starshipsDetails,
        filmsOnStarshipsDetails,
        getStarshipsDetails,
        vehiclesList,
        vehiclesDetails,
        filmsOnVehiclesDetails,
        getVehiclesDetails,
        clearStates,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
