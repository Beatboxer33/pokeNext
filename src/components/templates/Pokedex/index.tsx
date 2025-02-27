"use client";
import { useContext, useEffect, useState } from "react";
import List from "../../molecules/List";
import "./pokedex.css";
import Loader from "../../atomic/Loader";
import { PokemonsContext } from "../PokedexWithContext";
import PokemonSearchBar from "@/components/atomic/PokemonSearchBar";
import Pagination from "@/components/molecules/Pagination";
import useUrlParams from "@/components/hooks/params";
// import SearchBar from "@/components/hooks/searchParams";

interface Pokemon {
    name: string;
    id: number;
}

export default function Pokedex() {
    const numPokemonByPage = 30;

    const { pokemons, numPokemon, isLoading, isLoadError } =
        useContext(PokemonsContext);

    const filterState = useState("");
    const [filterValue] = filterState;
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

    const { search: paginate } = useUrlParams("paginate");
    const numPageState = useState(paginate || 1);
    const [numPage] = numPageState;

    const filterPokemonByName = (name: string) => {
        const result = pokemons.filter((poke) =>
            poke.name.toLowerCase().includes(name.toLowerCase()),
        );

        return result;
    };

    useEffect(() => {
        if (!isLoading) {
            setFilteredPokemons(pokemons);
        }
    }, [pokemons, isLoading]);

    useEffect(() => {
        setFilteredPokemons(filterPokemonByName(filterValue));
    }, [filterValue]);

    const offset = (+numPage - 1) * numPokemonByPage;

    return (
        <>
            {isLoadError && (
                <h1>Heeeu, Whitney Houston, we got a problem !!</h1>
            )}
            <Loader isVisible={isLoading} />
            {!isLoadError && !isLoading && (
                <div>
                    <div className="intro">
                        <div>Bienvenue sur ton futur pokédex !</div>
                        <div>
                            Tu vas pouvoir apprendre tout ce qu'il faut sur
                            React, et attraper des pokemons !
                        </div>
                        <div>Commence par créer ton premier pokemon: Mew !</div>
                    </div>

                    <PokemonSearchBar filterState={filterState} />

                    <div className="app">
                        <Pagination
                            numPageState={numPageState}
                            quantityByPage={Math.ceil(
                                numPokemon / numPokemonByPage,
                            )}
                        />

                        <List
                            contents={filteredPokemons.slice(
                                offset,
                                offset + numPokemonByPage,
                            )}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
