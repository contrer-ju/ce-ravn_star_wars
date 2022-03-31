import axios from "axios";
import { apiURL } from "../constants/baseURL";

export default async function onGettingPlanetsDetails(
  location,
  setIsLoadingResults,
  setIsLoadingPartialsResults,
  setApiErrorStatus,
  setPlanetsDetails,
  setPeopleOnPlanetsDetails,
  setFilmsOnPlanetsDetails
) {
  let filmsOnPlanetsDetailsArray = [];
  let peopleOnPlanetsDetailsArray = [];
  setIsLoadingResults(true);
  setIsLoadingPartialsResults(true);
  try {
    const planetsDetailsResponse = await axios.get(apiURL + location);
    setPlanetsDetails(planetsDetailsResponse.data);
    setIsLoadingPartialsResults(false);

    for (
      let index = 0;
      index < planetsDetailsResponse.data.residents.length;
      index++
    ) {
      const peopleOnPlanetsDetailsResponse = await axios.get(
        planetsDetailsResponse.data.residents[index]
      );
      peopleOnPlanetsDetailsArray.push(
        peopleOnPlanetsDetailsResponse.data.name
      );
    }
    setPeopleOnPlanetsDetails(peopleOnPlanetsDetailsArray);

    for (
      let index = 0;
      index < planetsDetailsResponse.data.films.length;
      index++
    ) {
      const filmsOnPlanetsDetailsResponse = await axios.get(
        planetsDetailsResponse.data.films[index]
      );
      filmsOnPlanetsDetailsArray.push(filmsOnPlanetsDetailsResponse.data.title);
    }
    setFilmsOnPlanetsDetails(filmsOnPlanetsDetailsArray);
  } catch (error) {
    setApiErrorStatus(true);
  } finally {
    setIsLoadingResults(false);
  }
}
