import { useState, ChangeEvent } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};
type PokemonSprites = {
  back_default: string;
  front_default: string;
};
type Pokemon = {
  name: string;
  height: number;
  types: PokemonType[];
  sprites: PokemonSprites;
  weight: number;
};

type UsePokemon = () => {
  inputPokemon: string;
  pokemonApiError: string;
  pokemonInfo: Pokemon | null;
  handleSetPokemon: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchPokemon: () => Promise<void>;
};

export const usePokemon: UsePokemon = () => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [pokemonApiError, setPokemonApiError] = useState<string>('');
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon | null>(null);
  const handleSetPokemon = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPokemon(e.target.value);
  };
  const fetchPokemon = async () => {
    setPokemonInfo(null);
    try {
      if (!inputPokemon.trim()) {
        throw new Error();
      }
      const pokemonApiEndPoint = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLocaleLowerCase()}`;
      const response = await fetch(pokemonApiEndPoint);
      const responseData = (await response.json()) as Pokemon;
      setPokemonInfo(responseData);
    } catch (e) {
      const POKEMON_API_WARD = 'ポケモンが見つかりません';
      setPokemonApiError(POKEMON_API_WARD);
    }
  };
  return {
    inputPokemon,
    pokemonApiError,
    pokemonInfo,
    handleSetPokemon,
    fetchPokemon,
  };
};
