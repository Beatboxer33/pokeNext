import React, { useEffect } from "react";
import List from "./components/List";
import "./intro.css";

interface Pokemon {
  name: String;
  id: number;
}

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] =
    React.useState<Pokemon[]>([]);

  const filterPokemonByName = (name: String) => {
    const result = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(name.toLowerCase())
    );

    return result;
  };

  useEffect(() => {
    setFilteredPokemons(filterPokemonByName(filterValue));
  }, [filterValue]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(event.target.value);

  const fetchPokemons = async () => {
    const pokemonResponse = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
      headers: { accept: "application/json" },
    });
    const pokeObjects = await pokemonResponse.json();
    const listPokes = pokeObjects.pokemon_entries;
    const pokedex = listPokes.map((obj: {entry_number:number,pokemon_species:{name:string}}) => {
      const id = obj.entry_number;
      const name = obj.pokemon_species.name;
      return { name, id };
    });

    setPokemons(pokedex)
    setFilteredPokemons(pokedex)
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="intro">
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, et attraper des
          pokemons !
        </div>
        <div>Commence par créer ton premier pokemon: Mew !</div>
      </div>
      <div>
        <p>Cherchez votre pokémon : </p>
        <input onChange={onInputChange} value={filterValue} />
      </div>
      <div>
        <List contents={filteredPokemons} />
      </div>
    </>
  );
}
