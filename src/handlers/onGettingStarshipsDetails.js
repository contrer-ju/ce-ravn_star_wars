import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingStarshipsDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setStarshipsDetails,
  setFilmsOnStarshipsDetails
) {
  let filmsOnStarshipsDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);

  try {
    const starshipsDetailsResponse = await axios.get(apiURL + location);
    setStarshipsDetails(starshipsDetailsResponse.data);
    setIsLoadingPartialsResults(false);

    for (
      let index = 0;
      index < starshipsDetailsResponse.data.films.length;
      index++
    ) {
      const filmsOnStarshipsDetailsResponse = await axios.get(
        starshipsDetailsResponse.data.films[index]
      );
      filmsOnStarshipsDetailsArray.push(
        filmsOnStarshipsDetailsResponse.data.title
      );
    }
    setFilmsOnStarshipsDetails(filmsOnStarshipsDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
