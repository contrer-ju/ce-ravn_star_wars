import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingSpeciesList(
  setIsLoadingResults,
  setApiErrorStatus,
  setSpeciesList,
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/species");
    setSpeciesList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
