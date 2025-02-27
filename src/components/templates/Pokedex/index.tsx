import React, { useContext, useEffect } from "react";
import List from "../../molecules/List";
import "./pokedex.css";
import Loader from "../../atomic/Loader";
import { PokemonsContext } from "../PokedexWithContext";
import PokemonSearchBar from "@/components/atomic/PokemonSearchBar";
import Pagination from "@/components/molecules/Pagination";
// import SearchBar from "@/components/hooks/searchParams";

interface Pokemon {
  name: string;
  id: number;
}

export default function Pokedex() {
  const search = window.location.search;
  const searchObject = new URLSearchParams(search);
  const paginate = searchObject.get("paginate");
//   const paginate = SearchBar;
  const numPokemonByPage = 30;

  const { pokemons, numPokemon, isLoading, isLoadError } =
    useContext(PokemonsContext);

  const [filterValue, setFilterValue] = React.useState("");
  const [filteredPokemons, setFilteredPokemons] = React.useState<Pokemon[]>([]);
  const [numPage, setNumpage] = React.useState(paginate || 1);

  const filterPokemonByName = (name: string) => {
    const result = pokemons.filter((poke) =>
      poke.name.toLowerCase().includes(name.toLowerCase())
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

          <PokemonSearchBar onInputChange={onInputChange} value={filterValue} />

          <div className="app">
            <Pagination
              actionValueLeft={"◀️"}
              actionValueRight={"▶️"}
              numPageValue={numPage}
              onClickLeft={() => onClickNav(+numPage, "◀️")}
              onClickRight={() => onClickNav(+numPage, "▶️")}
            />

            <List
              contents={filteredPokemons.slice(
                offset,
                offset + numPokemonByPage
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}
