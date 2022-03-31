import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingVehiclesDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setVehiclesDetails,
  setFilmsOnVehiclesDetails
) {
  let filmsOnVehiclesDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);

  try {
    const vehiclesDetailsResponse = await axios.get(apiURL + location);
    setVehiclesDetails(vehiclesDetailsResponse.data);
    setIsLoadingPartialsResults(false);

    for (
      let index = 0;
      index < vehiclesDetailsResponse.data.films.length;
      index++
    ) {
      const filmsOnVehiclesDetailsResponse = await axios.get(
        vehiclesDetailsResponse.data.films[index]
      );
      filmsOnVehiclesDetailsArray.push(
        filmsOnVehiclesDetailsResponse.data.title
      );
    }
    setFilmsOnVehiclesDetails(filmsOnVehiclesDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
