import React from 'react';
import styles from '../styles/hero.module.css';

// eslint-disable-next-line react/prop-types
function Hero({ title, description }) {
  return (
    <section className={styles.hero}>
      <section id={styles.reposition}>
        <h1 id={styles.title}>JOE'S CUSTOM DRYWALL</h1>
        <h3>{description}</h3>
      </section>
    </section>
  );
}

export default Hero;
