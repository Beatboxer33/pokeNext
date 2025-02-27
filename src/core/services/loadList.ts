const fetchPoke = async () => {
  const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
    headers: { accept: "application/json" },
  });
  const pokeObjects = await pokemonResponse.json();
  const listPokes = pokeObjects.pokemon_entries;
  const pokedex = listPokes.map(
    (obj: { entry_number: number; pokemon_species: { name: string } }) => {
      const id = obj.entry_number;
      const name = obj.pokemon_species.name;
      return { name, id };
    }
  );
  const numPokemon = listPokes.length;

  return { pokedex, numPokemon };
};

export default fetchPoke;
