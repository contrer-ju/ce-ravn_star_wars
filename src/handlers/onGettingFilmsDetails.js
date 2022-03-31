import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingFilmsDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setFilmsDetails,
  setPeopleOnFilmsDetails
) {
  let peopleOnFilmsDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);
  try {
    const filmsDetailsResponse = await axios.get(apiURL + location);
    setFilmsDetails(filmsDetailsResponse.data);
    setIsLoadingPartialsResults(false);
    
    for (
      let index = 0;
      index < filmsDetailsResponse.data.characters.length;
      index++
    ) {
      const peopleOnFilmsDetailsResponse = await axios.get(
        filmsDetailsResponse.data.characters[index]
      );
      peopleOnFilmsDetailsArray.push(peopleOnFilmsDetailsResponse.data.name);
    }
    setPeopleOnFilmsDetails(peopleOnFilmsDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
