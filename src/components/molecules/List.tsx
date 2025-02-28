import Link from "next/link";
import "./list.css";
import PokemonPreview from "../atomic/PokemonPreview";

export default function List({
    contents,
}: {
    contents: {
        name: string;
        [key: string]: string | number | boolean | { type: { name: string } }[];
    }[];
}) {
    return (
        <div className="pokedex">
            {contents.map((content) => (
                <Link
                    className="pokeLink"
                    key={content.id}
                    href={`/pokemon/${content.id}`}
                >
                    <PokemonPreview {...content} />
                </Link>
            ))}
        </div>
    );
}
