import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingGeneralData(
  location,
  setIsLoadingResults,
  setApiErrorStatus,
  setFilmsList,
  setPeoplesList,
  setPlanetsList,
  setSpeciesList,
  setStarshipsList,
  setVehiclesList
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/" + location);
    if (location === "films") setFilmsList(response.data.results);
    if (location === "people") setPeoplesList(response.data.results);
    if (location === "planets") setPlanetsList(response.data.results);
    if (location === "species") setSpeciesList(response.data.results);
    if (location === "starships") setStarshipsList(response.data.results);
    if (location === "vehicles") setVehiclesList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
