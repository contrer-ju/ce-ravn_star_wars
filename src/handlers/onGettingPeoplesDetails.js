import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingPeoplesDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setPeoplesDetails,
  setSpecieOnPeoplesDetails,
  setPlanetOnPeoplesDetails,
  setFilmsOnPeoplesDetails
) {
  let filmsOnPeoplesDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);
  try {
    const peoplesDetailsResponse = await axios.get(apiURL + location);
    setPeoplesDetails(peoplesDetailsResponse.data);
    setIsLoadingPartialsResults(false);

    if (peoplesDetailsResponse.data.species.length > 0) {
      const specieOnPeoplesDetailsResponse = await axios.get(
        peoplesDetailsResponse.data.species
      );
      setSpecieOnPeoplesDetails(specieOnPeoplesDetailsResponse.data.name);
    } else {
      setSpecieOnPeoplesDetails("Info not available");
    }

    if (peoplesDetailsResponse.data.homeworld !== null) {
      const planetOnPeoplesDetailsResponse = await axios.get(
        peoplesDetailsResponse.data.homeworld
      );
      setPlanetOnPeoplesDetails(planetOnPeoplesDetailsResponse.data.name);
    } else {
      setPlanetOnPeoplesDetails("Info not available");
    }

    for (
      let index = 0;
      index < peoplesDetailsResponse.data.films.length;
      index++
    ) {
      const filmsOnPeoplesDetailsResponse = await axios.get(
        peoplesDetailsResponse.data.films[index]
      );
      filmsOnPeoplesDetailsArray.push(filmsOnPeoplesDetailsResponse.data.title);
    }
    setFilmsOnPeoplesDetails(filmsOnPeoplesDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
