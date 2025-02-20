export default function AffichePokemon(props){
    return(
        <div>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.myId + ".png"} alt={props.myName}/>
        <p className="descriptionImg">Name : {props.myName}</p>
        <p className="descriptionImg">Id : {props.myId}</p>
        </div>
    )
}