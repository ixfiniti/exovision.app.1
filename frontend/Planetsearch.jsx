import React, { useState } from "react";
import { fetchPlanetData } from "../services/api";

function PlanetSearch({ setPlanetData }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    const data = await fetchPlanetData(query);
    setPlanetData(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter planet name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default PlanetSearch;
search bar
