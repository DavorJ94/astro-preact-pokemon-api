import { h } from "preact";
import styles from "/style/404.module.css";

const MissingPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.headLine}>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <a className={styles.link} href="/">
          homepage
        </a>
      </p>
    </div>
  );
};

export default MissingPage;
