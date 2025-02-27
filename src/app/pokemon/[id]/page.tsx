// "use client";
import fetchPokeDetail from "@/core/services/loadDetail";
import Image from "next/image";
import "./page.css";

export default async function PokemonPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;

    const { name, imgTL, imgTR, imgBL, imgBR, typePokemon } =
        await fetchPokeDetail({ id });

    return (
        <div className="pokemonContainer">
            <div>
                <h1>{name}</h1>
            </div>
            <div className="pokemonImages">
                <Image src={imgTL} width={100} height={100} alt={name} />
                <Image src={imgTR} width={100} height={100} alt={name} />
                <Image src={imgBL} width={100} height={100} alt={name} />
                <Image src={imgBR} width={100} height={100} alt={name} />
            </div>
            <div className="pokemonTypes">
                <h1>Types :</h1>
                {typePokemon.map((type: string) => (
                    <div key={type}>{type}</div>
                ))}
            </div>
        </div>
    );
}
