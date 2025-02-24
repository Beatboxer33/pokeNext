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
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadError, setIsLoadError] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState("");
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = React.useState<Pokemon[]>([]);
  const [numPage,setNumpage]=React.useState(0)

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
    const pokedex = listPokes.map(
      (obj: { entry_number: number; pokemon_species: { name: string } }) => {
        const id = obj.entry_number;
        const name = obj.pokemon_species.name;
        return { name, id };
      }
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

  useEffect(() => {
    setNumpage(1);
    sendUrlPage("paginate=1")
  }, []);

  const sendUrlPage = (urlPage : string) =>{
      window.location.search = urlPage
  }

  const onClickNavButton = (numPage:number) => {
    return(
      null
    )
  }

  const search = window.location.search
  const searchObject = new URLSearchParams(search);
  const paginate = searchObject.get("paginate");
  console.log(paginate)

  return (
    <>
      {isLoadError && <h1>Heeeu, Whitney Houston, we got a problem !!</h1>}
      <Loader isVisible={isLoading} />
      {!isLoadError && !isLoading && (
        <div>
          <div className="intro">
            <div>Bienvenue sur ton futur pokédex !</div>
            <div>
              Tu vas pouvoir apprendre tout ce qu'il faut sur React, et attraper
              des pokemons !
            </div>
            <div>Commence par créer ton premier pokemon: Mew !</div>
          </div>
          <div>
            <p>Cherchez votre pokémon : </p>
            <input onChange={onInputChange} value={filterValue} />
          </div>
          <div className="app">
            <div className="nav-container">
              <button className="nav-button">◀️</button>
              <h2>Page {numPage}</h2>
              <button className="nav-button">▶️</button>
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
