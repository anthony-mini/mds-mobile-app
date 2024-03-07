import { Evolution } from '../interfaces/pokemonInterfaces';
import { mockGetAllPokemon, mockGetPokemonById } from '../constants';

import { API_URL } from '@env';

export async function getAllPokemon() {
  try {
    const response = await fetch(`${API_URL}pokemon`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return mockGetAllPokemon;
  }
}

export async function getAllPokemonByGeneration(gen: string) {
  try {
    const response = await fetch(`${API_URL}gen/${gen}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonById(id: string) {
  try {
    const response = await fetch(`${API_URL}pokemon/${id}`);
    const data = await response.json();

    const fetchEvolutionData = async (
      evolution: Evolution,
      evolutionType: string,
    ) => {
      const evolutionResponse = await fetch(
        `${API_URL}pokemon/${evolution.pokedex_id}`,
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
    return mockGetPokemonById[id];
  }
}
