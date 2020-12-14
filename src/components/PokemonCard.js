import { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/styles/PokemonCard.css';

export default function PokemonCard({ pokemonInput, setError }) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonQuery, setPokemonQuery] = useState(pokemonInput);
  const [pokemonData, setPokemonData] = useState(null);

  const handleBack = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  // useEffect(() => {
  //   if (pokemonIndex) {
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
  //       .then(({ data }) => {
  //         setPokemonData(data);
  //         setPokemonIndex(data.id);
  //       })
  //       .catch(() => setError(true));
  //   }
  // }, [pokemonIndex]);

  useEffect(() => {
    let query;

    if (pokemonQuery !== pokemonInput) {
      query = pokemonInput;
      setPokemonQuery(pokemonInput);
    } else {
      query = pokemonIndex || pokemonInput;
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(({ data }) => {
        setPokemonData(data);
        setPokemonIndex(data.id);
      })
      .catch(() => setError(true));
  }, [pokemonIndex, pokemonInput]);

  return !pokemonData ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="card-container">
      <img
        className="card-image"
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />

      <div className="card-description">
        <strong>{pokemonData.name}</strong>
        <ul>
          {pokemonData.abilities.map((ability) => (
            <li key={ability.slot}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="card-buttons">
        <button onClick={handleBack} type="button">
          Back
        </button>
        <button onClick={handleNext} type="button">
          Next
        </button>
      </div>
    </div>
  );
}
