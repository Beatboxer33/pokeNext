import React, { useEffect } from "react";
import List from "./components/List";
import "./intro.css";

function App() {
  interface Pokemon {
    name: String;
    id: number;
  }

  interface PokemonInfos {
    name: String;
    id: number;
    height: number;
    weight: number;
  }

  //Event input
  const [filterValue, setFilterValue] = React.useState("");

  //Event Chargement liste Pokemon
  const [pokemonList, setPokemonList] = React.useState<PokemonInfos[]>([]);

  //Fonction filtre
  function filterPokemonByName(pokemons: Pokemon[], name: String) {
    const result = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(name.toLowerCase())
    );
    return result;
  }

  //Fonction pour changer valeur input
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(event.target.value);
  //   console.log(filterValue)

  //Affectation de la valeur tapée dans le input
  const pokemonFilterValue = filterValue;

  //Fonction pour récupérer la liste des pokemons
  const fetchPokemons = async () => {
    const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
      headers: { accept: "application/json" },
    });
    const pokes = await pokeResponse.json();
    // console.log(pokes);
    setPokemonList(pokes);
    // return pokes;
};

//Lancement du call API pour la liste
useEffect(() => {
    fetchPokemons();
}, []);
//   console.log(result);
console.log(pokemonList);

  //Liste des pokémons en tableau
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
        <p>Tape your pokemon : </p>
        <input onChange={onInputChange} value={pokemonFilterValue} />
      </div>
      <div>
        <List contents={filterPokemonByName(POKEMON_LIST, filterValue)} />
      </div>
    </>
  );
}

export default App;
