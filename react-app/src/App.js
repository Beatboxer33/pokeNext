import Pokemon from "./components/Pokemon";
import "./intro.css";

function App() {
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
        <Pokemon myName="MewTwo" myId="150" />
        <Pokemon myName="Carapuce" myId="7" />
        <Pokemon myName="Salamèche" myId="4" />
      </div>
    </>
  );
}

export default App;
