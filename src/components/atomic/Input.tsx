import { useState } from "react";

export default function Input({
    titleVisible,
    title,
    pokemonData,
    pokemonIndex,
    onChangeFormData,
    name,
}: {
    titleVisible: boolean;
    title: string;
    name: "id" | "level";

    pokemonData: { id: number | null; level: number | null };
    pokemonIndex: number;
    onChangeFormData: (
        key: "teamName" | "pokemons",
        data: string | { id: number | null; level: number | null },
        index: number,
    ) => void;
}) {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeFormData(
            "pokemons",
            { ...pokemonData, [name]: event.target.value },
            pokemonIndex,
        );
    };

    if (titleVisible) {
        return (
            <>
                <div>
                    <p>{title}</p>
                </div>
                <input
                    className="input"
                    onChange={onInputChange}
                    value={pokemonData[name]}
                />
            </>
        );
    }
    return (
        <>
            <input
                className="input"
                onChange={onInputChange}
                value={pokemonData[name]}
            />
        </>
    );
}
