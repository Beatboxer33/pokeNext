import Input from "../atomic/Input";

export default function PokemonEntryField({
    pokemonData,
    pokemonIndex,
    onChangeFormData,
}: {
    pokemonData: { id: number | null; level: number | null };
    pokemonIndex: number;
    onChangeFormData: (
        key: "teamName" | "pokemons",
        data: string | { id: number; level: number },
        index: number,
    ) => void;
}) {
    return (
        <>
            <h2>Pokémon n°{pokemonIndex}</h2>
            <Input
                titleVisible={true}
                title="Entrée Pokédex du Pokemon"
                name={"id"}
                pokemonData={pokemonData}
                pokemonIndex={pokemonIndex}
                onChangeFormData={onChangeFormData}
            />
            <Input
                titleVisible={true}
                title="Niveau du Pokemon"
                name={"level"}
                pokemonData={pokemonData}
                pokemonIndex={pokemonIndex}
                onChangeFormData={onChangeFormData}
            />
        </>
    );
}
