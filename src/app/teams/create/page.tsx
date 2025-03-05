"use client";

import { useState } from "react";
import "./page.css";
import PokemonEntryField from "@/components/molecules/PokemonEntryField";

export default function Create() {
 

  const onCreateTeam = () => {
    console.log(value);
  };

  return (
    <>
      <div>
        <h2>Nom de l'équipe</h2>
        <input name="teamName" />
      </div>

      <div>
        <PokemonEntryField id={1} />
      </div>
      <div>
        <PokemonEntryField id={2} />
      </div>
      <div>
        <PokemonEntryField id={3} />
      </div>
      <div>
        <PokemonEntryField id={4} />
      </div>
      <div>
        <PokemonEntryField id={5} />
      </div>
      <div>
        <PokemonEntryField id={6} />
      </div>

      <div>
        <button onClick={onCreateTeam}>Créer équipe</button>
      </div>
    </>
  );
}
