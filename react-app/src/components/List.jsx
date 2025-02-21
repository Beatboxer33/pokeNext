import Pokemon from "./Pokemon";

export default function List({ contents }) {
  
  return (
    <div>
      {contents.map((content) => (
        <Pokemon key={content.id} name={content.name} id={content.id} />
      ))}
    </div>
  );
}
