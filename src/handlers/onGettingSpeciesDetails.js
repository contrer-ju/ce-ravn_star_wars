import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingSpeciesDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setSpeciesDetails,
  setPlanetOnSpeciesDetails,
  setPeopleOnSpeciesDetails,
  setFilmsOnSpeciesDetails
) {
  let filmsOnSpeciesDetailsArray = [];
  let peopleOnSpeciesDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);
  try {
    const speciesDetailsResponse = await axios.get(apiURL + location);
    setSpeciesDetails(speciesDetailsResponse.data);
    setIsLoadingPartialsResults(false);

    if (speciesDetailsResponse.data.homeworld !== null) {
      const planetOnSpeciesDetailsResponse = await axios.get(
        speciesDetailsResponse.data.homeworld
      );
      setPlanetOnSpeciesDetails(planetOnSpeciesDetailsResponse.data.name);
    } else {
      setPlanetOnSpeciesDetails("Info not available");
    }

    for (
      let index = 0;
      index < speciesDetailsResponse.data.people.length;
      index++
    ) {
      const peopleOnSpeciesDetailsResponse = await axios.get(
        speciesDetailsResponse.data.people[index]
      );
      peopleOnSpeciesDetailsArray.push(
        peopleOnSpeciesDetailsResponse.data.name
      );
    }
    setPeopleOnSpeciesDetails(peopleOnSpeciesDetailsArray);

    for (
      let index = 0;
      index < speciesDetailsResponse.data.films.length;
      index++
    ) {
      const filmsOnSpeciesDetailsResponse = await axios.get(
        speciesDetailsResponse.data.films[index]
      );
      filmsOnSpeciesDetailsArray.push(filmsOnSpeciesDetailsResponse.data.title);
    }
    setFilmsOnSpeciesDetails(filmsOnSpeciesDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
