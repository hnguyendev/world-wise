const BASE_URL = "http://localhost:8000";
const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
export async function getCities() {
  const res = await fetch(`${BASE_URL}/cities`);

  if (!res.ok) throw new Error("Failed fetching cities");

  const data = await res.json();

  return data;
}

export async function getCity(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/cities/${id}`);

    if (!res.ok) throw new Error("Failed getting city");

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function createCity(newCity: object) {
  const res = await fetch(`${BASE_URL}/cities`, {
    method: "POST",
    body: JSON.stringify(newCity),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed creating city");

  const data = await res.json();

  return data;
}

export async function fetchCityData(lat: number, lng: number) {
  if (!lat || !lng) throw new Error("Failed fetching city");

  const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);

  if (!res.ok) throw new Error("Failed fetching city");

  const data = await res.json();

  return data;
}

export async function deleteCity(id: string) {
  const res = await fetch(`${BASE_URL}/cities/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed deleting cities");
}
