import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingFilmsList(
  setIsLoadingResults,
  setApiErrorStatus,
  setFilmsList,
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/films");
    setFilmsList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
