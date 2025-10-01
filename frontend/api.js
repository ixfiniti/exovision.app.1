// src/services/api.js

export async function fetchPlanetData(name) {
  // For now, mock data (replace with NASA API later)
  const mockData = {
    name: name,
    habitability: "75%",
    zone: "Habitable Zone",
    radius: 1.1,
    mass: 1.2,
    gravity: 9.8,
  };

  return mockData;
}
function to call backend
