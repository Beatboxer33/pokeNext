import Link from "next/link";
import Pokemon from "../atomic/PokemonPreview";
import "./list.css";

export default function List({ contents }) {
    return (
        <div className="pokedex">
            {contents.map((content) => (
                <Link
                    className="pokeLink"
                    key={content.id}
                    href={`/pokemon/${content.id}`}
                >
                    <Pokemon name={content.name} id={content.id} />
                </Link>
            ))}
        </div>
    );
}
