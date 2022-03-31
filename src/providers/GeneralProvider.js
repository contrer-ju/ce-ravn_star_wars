import { createContext, useState } from "react";
import onGettingFilmsList from "../handlers/onGettingFilmsList";
import onGettingFilmsDetails from "../handlers/onGettingFilmsDetails";
import onGettingPeoplesList from "../handlers/onGettingPeoplesList";
import onGettingPeoplesDetails from "../handlers/onGettingPeoplesDetails";
import onGettingPlanetsList from "../handlers/onGettingPlanetsList";
import onGettingPlanetsDetails from "../handlers/onGettingPlanetsDetails";
import onGettingSpeciesList from "../handlers/onGettingSpeciesList";
import onGettingSpeciesDetails from "../handlers/onGettingSpeciesDetails";
import onGettingStarshipsList from "../handlers/onGettingStarshipsList";
import onGettingStarshipsDetails from "../handlers/onGettingStarshipsDetails";
import onGettingVehiclesList from "../handlers/onGettingVehiclesList";
import onGettingVehiclesDetails from "../handlers/onGettingVehiclesDetails";

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

  const getFilmsList = () =>
    onGettingFilmsList(setIsLoadingResults, setApiErrorStatus, setFilmsList);
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

  const getPeoplesList = () =>
    onGettingPeoplesList(
      setIsLoadingResults,
      setApiErrorStatus,
      setPeoplesList
    );
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

  const getPlanetsList = () =>
    onGettingPlanetsList(
      setIsLoadingResults,
      setApiErrorStatus,
      setPlanetsList
    );
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

  const getSpeciesList = () =>
    onGettingSpeciesList(
      setIsLoadingResults,
      setApiErrorStatus,
      setSpeciesList
    );
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

  const getStarshipsList = () =>
    onGettingStarshipsList(
      setIsLoadingResults,
      setApiErrorStatus,
      setStarshipsList
    );
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

  const getVehiclesList = () =>
    onGettingVehiclesList(
      setIsLoadingResults,
      setApiErrorStatus,
      setVehiclesList
    );
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
        filmsList,
        filmsDetails,
        peopleOnFilmsDetails,
        getFilmsList,
        getFilmsDetails,
        peoplesList,
        peoplesDetails,
        specieOnPeoplesDetails,
        planetOnPeoplesDetails,
        filmsOnPeoplesDetails,
        getPeoplesList,
        getPeoplesDetails,
        planetsList,
        planetsDetails,
        peopleOnPlanetsDetails,
        filmsOnPlanetsDetails,
        getPlanetsList,
        getPlanetsDetails,
        speciesList,
        speciesDetails,
        planetOnSpeciesDetails,
        peopleOnSpeciesDetails,
        filmsOnSpeciesDetails,
        getSpeciesList,
        getSpeciesDetails,
        starshipsList,
        starshipsDetails,
        filmsOnStarshipsDetails,
        getStarshipsList,
        getStarshipsDetails,
        vehiclesList,
        vehiclesDetails,
        filmsOnVehiclesDetails,
        getVehiclesList,
        getVehiclesDetails,
        clearStates,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
