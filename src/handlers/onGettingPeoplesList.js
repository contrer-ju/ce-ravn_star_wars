import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingPeoplesList(
  setIsLoadingResults,
  setApiErrorStatus,
  setPeoplesList,
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/people");
    setPeoplesList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
