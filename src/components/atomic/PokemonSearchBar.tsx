export default function PokemonSearchBar({ onInputChange, filterValue }) {
  return (
    <div className="intro">
      <p>Cherchez votre pokémon : </p>
      <input onChange={onInputChange} value={filterValue} />
    </div>
  );
}
