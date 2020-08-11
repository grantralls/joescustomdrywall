import React from 'react';
import styles from '../styles/hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <section id={styles.reposition}>
        <h1 id={styles.title}>
          JOE&apos;S
          <br />
          CUSTOM
          <br />
          DRYWALL
        </h1>
        {/* <h3>{description}</h3> */}
      </section>
    </section>
  );
}

export default Hero;
