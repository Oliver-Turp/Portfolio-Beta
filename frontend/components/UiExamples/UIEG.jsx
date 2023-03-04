import styles from "./uieg.module.css";

import UIEG_Data from "./uiegData";

const UIEG = () => {
  return (
    <div className={styles.uieg_wrap}>
      <section className={styles.uieg_text}>
        <h1>UI Examples</h1>
        <h4>
          Occasionally, a client will withdraw from a project before it is
          completed.
          <br />
          <br />
          Rather than let my partial work go to waste, I adapted it into this
          example section to help potential clients like you, pick out
          components you may want for your project.
        </h4>
      </section>
      <section></section>
    </div>
  );
};

export default UIEG;
