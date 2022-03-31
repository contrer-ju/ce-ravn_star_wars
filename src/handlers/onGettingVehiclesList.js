import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingVehiclesList(
  setIsLoadingResults,
  setApiErrorStatus,
  setVehiclesList
) {
  setIsLoadingResults(true);
  try {
    const response = await axios.get(apiURL + "/vehicles");
    setVehiclesList(response.data.results);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
