export async function fetchAllPokemon() {
  const response = await fetch("/api/pokemon")
  return await response.json();
}