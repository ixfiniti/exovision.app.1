import React from "react";

function PlanetCard({ data }) {
  return (
    <div className="planet-card">
      <h2>{data.name}</h2>
      <p>🌍 Habitability %: {data.habitability}</p>
      <p>☀️ Zone: {data.zone}</p>
      <p>🪐 Radius: {data.radius} Earth radii</p>
      <p>⚖️ Mass: {data.mass} Earth masses</p>
      <p>🌌 Gravity: {data.gravity} m/s²</p>
    </div>
  );
}

export default PlanetCard;
score+detail
