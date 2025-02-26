import Pokemon from "../atomic/Pokemon";

export default function List({ contents }) {
    return (
        <div className="pokedex">
            {contents.map((content) => (
                <Pokemon key={content.id} name={content.name} id={content.id} />
            ))}
        </div>
    );
}
