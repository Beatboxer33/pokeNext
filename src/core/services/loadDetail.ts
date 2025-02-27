const fetchPokeDetail = async ({ id }) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id, {
    headers: { accept: "application/json" },
  });
  const pokeObjects = await response.json();
  const dataPokes = pokeObjects;

  const name = dataPokes.name;
  const imgTL = dataPokes.sprites.front_default;
  const imgTR = dataPokes.sprites.back_default;
  const imgBL = dataPokes.sprites.front_shiny;
  const imgBR = dataPokes.sprites.back_shiny;
  const typePokemon = dataPokes.types.map(
    (type: { type: {name :string} }) => {
      const typeName = type.type.name;
      return  typeName ;
    }
  );

  return { name, imgTL, imgTR, imgBL, imgBR, typePokemon };
};

export default fetchPokeDetail;
