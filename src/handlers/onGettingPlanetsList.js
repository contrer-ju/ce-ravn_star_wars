import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingPlanetsList(
  setIsLoadingResults,
  setApiErrorStatus,
  setPlanetsList,
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/planets");
    setPlanetsList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
