import List from "../molecules/List";

export default function TeamPage({ nameTeam,pokeTeam}) {
    return (
      <>
        <h3>Nom de l'équipe : {nameTeam}</h3>
        <List contents={pokeTeam} />
      </>
    );
  }