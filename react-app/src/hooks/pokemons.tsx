import React, { useEffect } from "react";

interface Pokemon {
  name: String;
  id: number;
}

export default function useFetchPokemons({
  defaultValue,
}: {
  defaultValue: [];
}) {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>(defaultValue || []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filteredPokemons, setFilteredPokemons] = React.useState<Pokemon[]>([]);
  const [isLoadError, setIsLoadError] = React.useState(false);
  const [numPokemon, setNumPokemon] = React.useState(0);

  const fetchPokemons = async () => {
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
      },
      setNumPokemon(listPokes.length)
    );
    setPokemons(pokedex);
    setFilteredPokemons(pokedex); 
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    fetchPokemons().catch((err) => {
      setIsLoadError(true);
      setIsLoading(false);
      return isLoadError;
    });
  }, []);

  console.log(pokemons)

  return ([pokemons, numPokemon, filteredPokemons]);
}
