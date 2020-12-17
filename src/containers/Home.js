import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

import '../assets/styles/Home.css';

export default function Home() {
  const [pokemonInput, setPokemonInput] = useState('');
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(pokemonInput.toLowerCase());
    setPokemonInput('');
  };

  return (
    <main className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        error={error}
        pokemonInput={pokemonInput}
        setPokemonInput={setPokemonInput}
      />

      {search && (
        <PokemonCard pokemonInput={search} error={error} setError={setError} />
      )}
    </main>
  );
}
