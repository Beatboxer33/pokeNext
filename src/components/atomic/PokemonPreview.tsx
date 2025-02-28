import "./pokemon.css";

export default function Pokemon({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <p className="descriptionImg">Name : {name}</p>
      <p className="descriptionImg">Id : {id}</p>
    </div>
  );
}
