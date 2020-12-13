import { useState } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

import '../assets/styles/Home.css';

export default function Home() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(false);

    if (pokemonInput) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`)
        .then(({ data }) => setPokemonData(data))
        .catch(() => setError(true))
        .finally(() => setPokemonInput(''));
    } else {
      setError(true);
    }
  };

  return (
    <main className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        error={error}
        pokemonInput={pokemonInput}
        setPokemonInput={setPokemonInput}
      />

      {pokemonData && <PokemonCard pokemonData={pokemonData} />}
    </main>
  );
}
