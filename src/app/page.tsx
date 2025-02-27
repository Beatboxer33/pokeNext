import fetchPoke from "@/core/services/loadList";
import Pokedex from "@/components/templates/Pokedex";

export default async function RootPage() {
  const { pokedex, numPokemon } = await fetchPoke();
  return <Pokedex pokemonList={pokedex} numPokemon={numPokemon} />;
}
