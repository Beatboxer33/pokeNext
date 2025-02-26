"use client";

import { createContext } from "react";
import Pokedex from "../../components/templates/Pokedex";
import useFetchPokemons from "../../components/hooks/pokemons";

export const PokemonsContext = createContext<any>(null);

export default function PokedexWithContext() {
  const { pokemons, numPokemon, isLoading, isLoadError } = useFetchPokemons();

  return (
    <PokemonsContext.Provider
      value={{ pokemons, numPokemon, isLoading, isLoadError }}
    >
      <Pokedex />
    </PokemonsContext.Provider>
  );
}