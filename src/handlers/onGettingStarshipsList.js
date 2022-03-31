import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingStarshipsList(
  setIsLoadingResults,
  setApiErrorStatus,
  setStarshipsList
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/starships");
    setStarshipsList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
