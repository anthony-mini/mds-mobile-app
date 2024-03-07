import { Evolution } from '../intrefaces/pokemonInterfaces';

import { API_URL } from '@env';

export async function getAllPokemon() {
  try {
    const response = await fetch(`${API_URL}pokemon`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPokemonByGeneration(gen: string) {
  try {
    const response = await fetch(
      `https://tyradex.vercel.app/api/v1/gen/${gen}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonById(id: string) {
  try {
    const response = await fetch(
      `https://tyradex.vercel.app/api/v1/pokemon/${id}`,
    );
    const data = await response.json();

    const fetchEvolutionData = async (
      evolution: Evolution,
      evolutionType: string,
    ) => {
      const evolutionResponse = await fetch(
        `https://tyradex.vercel.app/api/v1/pokemon/${evolution.pokedex_id}`,
      );
      const evolutionData = await evolutionResponse.json();
      return {
        id: evolution.pokedex_id,
        name: evolution.name,
        condition: evolution.condition,
        evolutionType,
        image: evolutionData.sprites.regular,
      };
    };

    const preEvolutionsPromises = data.evolution.pre.map(
      (evolution: Evolution) => fetchEvolutionData(evolution, 'pre'),
    );
    const nextEvolutionsPromises = data.evolution.next.map(
      (evolution: Evolution) => fetchEvolutionData(evolution, 'next'),
    );

    const preEvolutions = await Promise.all(preEvolutionsPromises);
    const nextEvolutions = await Promise.all(nextEvolutionsPromises);

    const evolutions = [...preEvolutions, ...nextEvolutions];

    console.log(evolutions);

    data.push(evolutions);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
