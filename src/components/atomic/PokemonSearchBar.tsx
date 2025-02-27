export default function PokemonSearchBar({ filterState }) {
    const [value, setValue] = filterState;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);

    return (
        <div className="intro">
            <p>Cherchez votre pokémon : </p>
            <input onChange={onInputChange} value={value} />
        </div>
    );
}
