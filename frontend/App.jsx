import React, { useState } from "react";
import PlanetSearch from "./components/PlanetSearch";
import PlanetCard from "./components/PlanetCard";

function App() {
  const [planetData, setPlanetData] = useState(null);

  return (
    <div className="app">
      <h1>🌌 Exoplanet Explorer</h1>
      <PlanetSearch setPlanetData={setPlanetData} />
      {planetData && <PlanetCard data={planetData} />}
    </div>
  );
}

export default App;
