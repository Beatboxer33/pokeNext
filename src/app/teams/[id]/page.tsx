import List from "@/components/molecules/List";
import TeamPage from "@/components/templates/TeamPage";
import { prisma } from "@/lib/prisma.ts";

// If Connection Timeout, disable your ipv6
const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default async function TeamPokemonPage({
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

    const pokemonsDetails: {
        id: number;
        name: string;
        types: { type: { name: string } }[];
        level: number;
        imageSrc: string;
        withId: boolean;
    }[] = await Promise.all(
        team[0].pokemons.map(async (poke) => {
            const pokemonDataResponse = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${poke.pokemonEntry}`,
            );
            const { id, name, types, sprites } =
                await pokemonDataResponse.json();

            return {
                id,
                name,
                types,
                level: poke.level,
                imageSrc: sprites.front_default,
                withId: false,
            };
        }),
    );

    return (
        <div>
            <TeamPage nameTeam={team[0].name} pokeTeam={pokemonsDetails} />
        </div>
    );
}
