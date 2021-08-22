import { h } from "preact";
import styles from "/style/Pokemon.module.css";

const Pokemon = ({ src, name }) => {
  return (
    <div className={styles.pokemonContainer}>
      <img
        width="115.2"
        height="115.2"
        src={src}
        className={styles.pokemonImg}
      ></img>
      <p className={styles.pokemonName}>{name}</p>
    </div>
  );
};

export default Pokemon;
