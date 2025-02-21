import React, { useEffect } from "react";
import List from "./components/List";
import "./intro.css";

interface Pokemon {
    name: String;
    id: number;
}

const POKEMON_LIST = [
    {
        name: "Mew",
        id: 151,
    },
    {
        name: "MewTwo",
        id: 150,
    },
    {
        name: "Dracolosse",
        id: 149,
    },
];

export default function App() {
    const [filterValue, setFilterValue] = React.useState("");
    const [pokemons, setPokemons] = React.useState<Pokemon[]>(POKEMON_LIST);
    const [filteredPokemons, setFilteredPokemons] =
        React.useState<Pokemon[]>(POKEMON_LIST);

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
        const pokeResponse = await fetch(
            "https://pokeapi.co/api/v2/pokedex/2",
            {
                headers: { accept: "application/json" },
            },
        );
        const pokes = await pokeResponse.json();
        // console.log(pokes);
        setPokemons(pokes);
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <>
            <div className="intro">
                <div>Bienvenue sur ton futur pokédex !</div>
                <div>
                    Tu vas pouvoir apprendre tout ce qu'il faut sur React, et
                    attraper des pokemons !
                </div>
                <div>Commence par créer ton premier pokemon: Mew !</div>
            </div>
            <div>
                <p>Tape your pokemon : </p>
                <input onChange={onInputChange} value={filterValue} />
            </div>
            <div>
                <List contents={filteredPokemons} />
            </div>
        </>
    );
}
