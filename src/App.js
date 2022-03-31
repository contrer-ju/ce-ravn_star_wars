import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralProvider from "./providers/GeneralProvider";
import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import Films from "./routes/Films";
import FilmsDetails from "./routes/FilmsDetails";
import People from "./routes/People";
import PeopleDetails from "./routes/PeopleDetails";
import Planets from "./routes/Planets";
import PlanetsDetails from "./routes/PlanetsDetails";
import Species from "./routes/Species";
import SpeciesDetails from "./routes/SpeciesDetails";
import Starships from "./routes/Starships";
import StarshipsDetails from "./routes/StarshipsDetails";
import Vehicles from "./routes/Vehicles";
import VehiclesDetails from "./routes/VehiclesDetails";
import NotFound from "./routes/NotFound";
import "./Styles.css";

function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="films/:id" element={<FilmsDetails />} />
          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<PeopleDetails />} />
          <Route path="planets" element={<Planets />} />
          <Route path="planets/:id" element={<PlanetsDetails />} />
          <Route path="species" element={<Species />} />
          <Route path="species/:id" element={<SpeciesDetails />} />
          <Route path="starships" element={<Starships />} />
          <Route path="starships/:id" element={<StarshipsDetails />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="vehicles/:id" element={<VehiclesDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App;
