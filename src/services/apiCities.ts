const BASE_URL = "http://localhost:8000";

export async function getCities() {
  const res = await fetch(`${BASE_URL}/cities`);

  if (!res.ok) throw new Error("Failed fetching cities");

  const data = await res.json();

  return data;
}

export async function getCity(id: string) {
  const res = await fetch(`${BASE_URL}/cities/${id}`);

  if (!res.ok) throw new Error("Failed deleting cities");

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
