import { useState, useEffect } from 'react';
import axios from 'axios';

import TypeBox from './TypeBox';

import '../assets/styles/PokemonCard.css';

export default function PokemonCard({ pokemonInput, error, setError }) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonQuery, setPokemonQuery] = useState(pokemonInput);
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  useEffect(() => {
    let query;

    if (pokemonQuery !== pokemonInput) {
      query = pokemonInput;
      setPokemonQuery(pokemonInput);
    } else {
      query = pokemonIndex || pokemonInput;
    }

    setLoading(true);
    setError(false);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(({ data }) => {
        setPokemonData(data);
        setPokemonIndex(data.id);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [pokemonIndex, pokemonInput]);

  return (
    !error && (
      <div className="card-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <img
              className="card-image"
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />

            <div className="card-description">
              <strong>{pokemonData.name}</strong>

              <div className="description-type">
                <div>
                  {pokemonData.types.map((type) => (
                    <TypeBox key={type.slot} type={type.type} />
                  ))}
                </div>

                <ul>
                  {pokemonData.abilities.map((ability) => (
                    <li key={ability.slot}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-buttons">
              <button onClick={handleBack} type="button">
                Back
              </button>
              <button onClick={handleNext} type="button">
                Next
              </button>
            </div>
          </>
        )}
      </div>
    )
  );
}
