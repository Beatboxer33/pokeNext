"use server";

import { prisma } from "../../lib/prisma.ts";

// Ici tu sais à quoi va ressembler tes paramètres d'entrée !
interface PokemonInTeam {
  entry: number;
  level: number;
}

interface createTeamInfos {
  name: string;
  pokemons: PokemonInTeam[];
}

export const createTeam = async ({ name, pokemons }: createTeamInfos) => {
  // Complète la fonction !

  const team = await prisma.team.create({
    data: {
      name: `${name}`,
      userId: 1,
    },
  });

  const teamPokemon = await prisma.pokemon.createMany({
    data: pokemons.map((poke) => ({
      pokemonEntry: poke.entry,
      level: poke.level,
      teamId: team.id,
    })),
  });
};
