import { useState, useEffect } from 'react';
import {
  getAllPokemon,
  getAllPokemonByGeneration,
} from '../services/pokemonService';

import { selectGenNumber } from '../constants/pokemonConstats';

const usePokemonData = (selectedGen: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let response;
      if (selectedGen === '0') {
        response = await getAllPokemon();
      } else {
        response = await getAllPokemonByGeneration('0');
      }
      setData(response);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedGen]);

  return { data, isLoading };
};

export default usePokemonData;
