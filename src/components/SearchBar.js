import '../assets/styles/SearchBar.css';

export default function SearchBar({
  handleSubmit,
  error,
  pokemonInput,
  setPokemonInput,
}) {
  const handleChange = (event) => {
    setPokemonInput(event.target.value);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <label htmlFor="pokemon">Search Pokemon</label>
      <div className="input-container">
        {error && <span>Ha ocurrido un error</span>}
        <input
          type="text"
          name="pokemon"
          placeholder="Name or Number"
          onChange={handleChange}
          value={pokemonInput}
        />
      </div>

      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
