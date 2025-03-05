"use client";

import { useState } from "react";
import "./page.css";
import PokemonEntryField from "@/components/molecules/PokemonEntryField";
import { createTeam } from "@/app/actions/team";

export default function Create() {
    const [fields, setFields] = useState({
        teamName: "",
        pokemons: [
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
            {
                id: null,
                level: null,
            } as { id: number | null; level: number | null },
        ],
    });

    const onCreateTeam = () => {
        createTeam({
            name: fields.teamName,
            pokemons: fields.pokemons.map((pokemon) => ({
                entry: +pokemon.id,
                level: +pokemon.level,
            })),
        });
    };

    const onChangeFormData = (
        key: "teamName" | "pokemons",
        data: string | { id: number; level: number },
        index?: number,
    ) => {
        setFields((oldFields) => {
            const newFields = structuredClone(oldFields);
            if (key === "teamName") {
                if (typeof data === "string") {
                    newFields.teamName = data;
                }
            } else {
                if (typeof data !== "string" && index !== undefined) {
                    newFields.pokemons[index] = data;
                }
            }

            return newFields;
        });
    };

    return (
        <>
            <div>
                <h2>Nom de l'équipe</h2>
                <input
                    name="teamName"
                    value={fields.teamName}
                    onChange={(e) =>
                        onChangeFormData("teamName", e.target.value)
                    }
                />
            </div>

            {fields.pokemons.map((pokemon, index) => (
                <PokemonEntryField
                    key={index}
                    pokemonData={pokemon}
                    pokemonIndex={index}
                    onChangeFormData={onChangeFormData}
                />
            ))}

            <div>
                <button onClick={onCreateTeam}>Créer équipe</button>
            </div>
        </>
    );
}
