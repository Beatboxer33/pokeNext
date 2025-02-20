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
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="Mew"/>
        <p className="descriptionImg">Name : Mew</p>
        <p className="descriptionImg">Id : 151</p>
      </div>
    </>
  );
}

export default App;
