import TeamPage from "@/components/templates/TeamPage";
import { logPage } from "@/lib/testing";
import { render } from "@testing-library/react";
import { test, vi, describe, beforeEach, Mock } from "vitest";

const DATA_BY_POKEMONS = {
  "18": {
    name: "pidgeot",
    types: [
      {
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
      {
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    },
  },
  "65": {
    name: "alakazam",
    types: [
      {
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    },
  },
  "112": {
    name: "rhydon",
    types: [
      {
        type: {
          name: "ground",
          url: "https://pokeapi.co/api/v2/type/5/",
        },
      },
      {
        type: {
          name: "rock",
          url: "https://pokeapi.co/api/v2/type/6/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    },
  },
  "103": {
    name: "exeggutor",
    types: [
      {
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        type: {
          name: "psychic",
          url: "https://pokeapi.co/api/v2/type/14/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    },
  },
  "59": {
    name: "arcanine",
    types: [
      {
        type: {
          name: "fire",
          url: "https://pokeapi.co/api/v2/type/10/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    },
  },
  "9": {
    name: "blastoise",
    types: [
      {
        type: {
          name: "water",
          url: "https://pokeapi.co/api/v2/type/11/",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
  },
};

beforeEach(() => {
  vi.spyOn(global, "fetch").mockImplementation(
    vi.fn((fetchUrl) => {
      const pokeEntry = fetchUrl.split("https://pokeapi.co/api/v2/pokemon/")[1];

      return Promise.resolve({
        json: () => Promise.resolve(DATA_BY_POKEMONS[pokeEntry]),
      });
    }) as Mock
  );
});

describe("<TeamPage />", () => {
  test("Pokemons are displayed for a team", async () => {
    const userDataToInsert = {
      email: "test@test.com",
      name: "test",
    };

    const teamDataToInsert = {
      name: "test",
      userId: user.id,
    };

    const pokemonsDataToInsert = [
      { entry: 18, level: 61 },
      { entry: 65, level: 59 },
      { entry: 112, level: 62 },
      { entry: 103, level: 63 },
      { entry: 59, level: 78 },
      { entry: 9, level: 65 },
    ];
    // Continue ici !

    // const page = render(
    //   await TeamPage({
    //     params: Promise.resolve({
    //       nameTeam: teamDataToInsert.name,
    //       pokeTeam: pokemonsDataToInsert,
    //     }),
    //   })
    // );
    // logPage(page);
  });
});
