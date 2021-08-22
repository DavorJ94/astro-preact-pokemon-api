import { h } from "preact";
import styles from "/style/AboutPokemon.module.css";

const AboutPokemon = ({ pokemon }) => {
  return (
    <div key={pokemon.id} style={{ textAlign: "center" }}>
      <img
        width="96"
        height="96"
        alt="Pokemon img"
        src={pokemon.sprites.front_shiny}
        className={styles.pokemonImg}
      ></img>
      <div className={styles.pokemonName}>{pokemon.name}</div>
      <div className={styles.leftSide}>Abilities: </div>
      {pokemon.abilities.map((ability, index) => {
        if (index < pokemon.abilities.length - 1)
          return (
            <span className={styles.abilities} key={`ability-${index}`}>
              {ability.ability.name},{" "}
            </span>
          );
        else
          return (
            <span className={styles.abilities} key={`ability-${index}`}>
              {ability.ability.name}.{" "}
            </span>
          );
      })}
      <div className={styles.heightWeight}>
        Height: <span className={styles.abilities}>{pokemon.height}</span>
      </div>
      <div className={styles.heightWeight}>
        Weight: <span className={styles.abilities}>{pokemon.weight}</span>
      </div>
      <div
        className={styles.heightWeight}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {pokemon.moves.length >= 10
          ? "First 10 moves: "
          : `Its ${pokemon.moves.length} moves: `}
        {pokemon.moves.map((move, index) => {
          if (index < 9)
            return (
              <span className={styles.abilities} key={`move-${index}`}>
                {move.move.name},{" "}
              </span>
            );
          else if (index === 9 || index === pokemon.moves.length - 1)
            return (
              <span className={styles.abilities} key={`move-${index}`}>
                {move.move.name}.{" "}
              </span>
            );
          else return;
        })}
      </div>
      <div>
        {pokemon.stats.map((status, index) => {
          return (
            <div key={`stats-${index}`} className={styles.heightWeight}>
              {status.stat.name}:{" "}
              <span className={styles.abilities}> {status.base_stat}</span>
            </div>
          );
        })}
      </div>
      <div>
        <span className={styles.heightWeight}>Types:</span>
        {pokemon.types.map((type, index) => {
          if (index < pokemon.types.length - 1)
            return (
              <span className={styles.abilities} key={`types-${index}`}>
                {" "}
                {type.type.name},
              </span>
            );
          else
            return (
              <span className={styles.abilities} key={`types-${index}`}>
                {" "}
                {type.type.name}.
              </span>
            );
        })}
      </div>
    </div>
  );
};

export default AboutPokemon;
