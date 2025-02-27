// "use client";
import fetchPokeDetail from "@/core/services/loadDetail";
import Image from "next/image";

export default async function Pokemon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const { pokedex, numPokemon } = await fetchPoke();
  const id = (await params).id;
  const { name, imgTL, imgTR, imgBL, imgBR, typePokemon } =
    await fetchPokeDetail({ id });

  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <Image src={imgTL} width={200} height={200} alt={name} />
        <Image src={imgTR} width={200} height={200} alt={name} />
        <Image src={imgBL} width={200} height={200} alt={name} />
        <Image src={imgBR} width={200} height={200} alt={name} />
      </div>
      <div>
        <h1>Types :</h1>
        <p>{typePokemon}</p>
      </div>
    </div>
  );
}
