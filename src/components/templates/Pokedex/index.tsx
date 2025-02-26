import React, { useContext, useEffect } from "react";
import List from "../../molecules/List";
import NavButton from "../../atomic/NavButton";
import "./pokedex.css";
import Loader from "../../atomic/Loader";
import { PokemonsContext } from "../PokedexWithContext";


interface Pokemon {
    name: string;
    id: number;
}

export default function Pokedex() {
    const search = window.location.search;
    const searchObject = new URLSearchParams(search);
    const paginate = searchObject.get("paginate");
    const numPokemonByPage = 30;

    const { pokemons, numPokemon, isLoading, isLoadError } =
        useContext(PokemonsContext);

    const [filterValue, setFilterValue] = React.useState("");
    const [filteredPokemons, setFilteredPokemons] = React.useState<Pokemon[]>(
        [],
    );
    const [numPage, setNumpage] = React.useState(paginate || 1);

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

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setFilterValue(event.target.value);

    const onClickNav = (numPage: number, action: string) => {
        if (action === "◀️") {
            const newNumPage = numPage > 1 ? numPage - 1 : numPage;
            setNumpage(newNumPage);
        } else {
            const newNumPage =
                numPage < Math.ceil(numPokemon / numPokemonByPage)
                    ? numPage + 1
                    : numPage;
            setNumpage(newNumPage);
        }
    };

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
                    <div>
                        <p>Cherchez votre pokémon : </p>
                        <input onChange={onInputChange} value={filterValue} />
                    </div>
                    <div className="app">
                        <div className="nav-container">
                            <NavButton
                                action="◀️"
                                onClick={() => onClickNav(+numPage, "◀️")}
                            />
                            <h2>Page {numPage}</h2>
                            <NavButton
                                action="▶️"
                                onClick={() => onClickNav(+numPage, "▶️")}
                            />
                        </div>
                        <div>
                            <List
                                contents={filteredPokemons.slice(
                                    offset,
                                    offset + numPokemonByPage,
                                )}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
