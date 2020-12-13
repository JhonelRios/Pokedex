import '../assets/styles/PokemonCard.css';

export default function PokemonCard({ pokemonData }) {
  return (
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
    </div>
  );
}
