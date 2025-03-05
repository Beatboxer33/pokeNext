import Input from "../atomic/Input";

export default function PokemonEntryField({ id }: { id: number }) {
  return (
    <>
      <h2>Pokémon n°{id}</h2>
      <Input titleVisible={true} title="Entrée Pokédex du Pokemon" id={id} />
      <Input titleVisible={true} title="Niveau du Pokemon" id={id} />
    </>
  );
}
