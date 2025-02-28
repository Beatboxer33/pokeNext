import List from "@/components/molecules/List";
import { prisma } from "@/lib/prisma.ts";

// If Connection Timeout, disable your ipv6
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const teamId = (await params).id;

  // Utilise Prisma pour récupérer la team ici !
  const team = await prisma.team.findMany({
    where: { userId: 1, id: +teamId },
    include: {
      pokemons: {
        select: {
          pokemonEntry: true,
          level: true,
        },
      },
    },
  });

  const pokemonsDetails = await Promise.all(
    team[0].pokemons.map(async (poke) => {
      const pokemonDataResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poke.pokemonEntry}`
      );
      const { id, name, types, sprites } = await pokemonDataResponse.json();

      return {
        id,
        name,
        types,
        level: poke.level,
        imageSrc: sprites.front_default,
      };
    })
  );
  console.log(pokemonsDetails);

  return <div>
    <h1></h1>
    {<List contents={pokemonsDetails} />}</div>;
}
