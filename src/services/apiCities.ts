const BASE_URL = "http://localhost:8000";

export async function getCities() {
  const res = await fetch(`${BASE_URL}/cities`);

  if (!res.ok) throw new Error("Failed fetching cities");

  const data = await res.json();

  return data;
}
