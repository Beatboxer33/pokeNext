import React, { useEffect } from "react";
import List from "./components/List";
import NavButton from "./components/NavButton";
import "./intro.css";
import Loader from "./components/Loader/index.tsx";

interface Pokemon {
    name: String;
    id: number;
}

export default function App() {
    const search = window.location.search;
    const searchObject = new URLSearchParams(search);
    const paginate = searchObject.get("paginate");

    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoadError, setIsLoadError] = React.useState(false);
    const [filterValue, setFilterValue] = React.useState("");
    const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
    const [numPokemon,setNumPokemon] = React.useState(0);
    const [filteredPokemons, setFilteredPokemons] = React.useState<Pokemon[]>(
        [],
    );
    const [numPage, setNumpage] = React.useState(paginate || 1);

    const numByPage = 30

    const filterPokemonByName = (name: String) => {
        const result = pokemons.filter((poke) =>
            poke.name.toLowerCase().includes(name.toLowerCase()),
        );

        return result;
    };

    useEffect(() => {
        setFilteredPokemons(filterPokemonByName(filterValue));
    }, [filterValue]);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setFilterValue(event.target.value);

    const fetchPokemons = async () => {
        const pokemonResponse = await fetch(
            "https://pokeapi.co/api/v2/pokedex/2",
            {
                headers: { accept: "application/json" },
            },
        );
        const pokeObjects = await pokemonResponse.json();
        const listPokes = pokeObjects.pokemon_entries;
        const pokedex = listPokes.map(
            (obj: {
                entry_number: number;
                pokemon_species: { name: string };
            }) => {
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

    const onClickNav = (numPage: number, action: string) => {
        console.log(Math.ceil(numPokemon/numByPage))
        if (action === "◀️") {
          const newNumPage = numPage > 1 ? numPage -1 : numPage
          setNumpage(newNumPage)
          //window.location.search = newNumPage
        }else {
          const newNumPage = numPage < Math.ceil(numPokemon/numByPage) ? numPage +1 : numPage
          setNumpage(newNumPage)
        }
    };

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
                            <NavButton action="◀️" onClick={() => onClickNav(+numPage,"◀️")} />
                            <h2>Page {numPage}</h2>
                            <NavButton action="▶️"  onClick={() => onClickNav(+numPage,"▶️")}/>
                        </div>
                        <div>
                            <List contents={filteredPokemons} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
