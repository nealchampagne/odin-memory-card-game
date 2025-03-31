import { handleError } from "./handleerror";

export const getPokemon = async (id) => {
  try {

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
      { mode: "cors" },
    ).then((response) => response.json())
    .then;

    // Handle rejected API calls
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error(
          "Your query was invalid.",
        );
      } else if (response.status === 401) {
        throw new Error(
          "Unauthorized/Incorrect API key. Please contact the website owner at fakemail.gmail.com for help.",
        );
      } else if (response.status === 429) {
        throw new Error(
          `Too many requests. The site's query limit has been exceeded, please contact the website owner at fakemail.gmail.com for more information.`,
        );
      } else if (response.status === 500) {
        throw new Error(
          `Something went wrong with the server. Please try again later.`,
        );
      } else {
        throw new Error(`Oops! Something went wrong.`);
      }
    } else {
      const pokemonData = await response.json();
      console.log(pokemonData.sprites.other);
      return({name: pokemonData.name, img: pokemonData.sprites.other["official-artwork"].front_default});
    }
  } catch (err) {
    // Handle caught errors
    handleError(err);
  }
};
  