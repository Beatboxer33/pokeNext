import { Fragment } from "react";
import "./pokemon.css";

export default function PokemonPreview({
    name,
    id,
    types,
    level,
    withId = true,
}: {
    name: string;
    id?: number;
    types?: string[];
    level?: number;
    withId?: boolean;
}) {
    return (
        <div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
            />
            <p className="descriptionImg">Name : {name}</p>
            {withId && id && <p className="descriptionImg">Id : {id}</p>}
            {level && <p className="descriptionImg">Niveau : {level}</p>}
            {types && (
                <p className="descriptionImg">
                    Types :{" "}
                    {types.map((type, index) => (
                        <Fragment key={type.type.name}>
                            {index > 0 ? ", " : ""}
                            {type.type.name}
                        </Fragment>
                    ))}
                </p>
            )}
        </div>
    );
}
