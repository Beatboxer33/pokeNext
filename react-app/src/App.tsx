import { createContext, useContext } from "react";
import Pokedex from "./components/Pokedex/index.tsx";
import useFetchPokemons from "./hooks/pokemons.tsx";

export const PokemonsContext = createContext<any>(null);

export default function App() {
    const { pokemons, numPokemon, isLoading, isLoadError } = useFetchPokemons();

    return (
        <PokemonsContext.Provider
            value={{ pokemons, numPokemon, isLoading, isLoadError }}
        >
            <Pokedex />
        </PokemonsContext.Provider>
    );
}
