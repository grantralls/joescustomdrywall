import React from 'react';
import {
  gridContainer, header, text,
} from '../styles/about.module.css';

// eslint-disable-next-line react/prop-types
function About({ about }) {
  return (
    <section className={gridContainer}>
      <h1 id={header}>About Me</h1>
      {/* eslint-disable-next-line react/prop-types */}
      <p id={text}>{about}</p>
    </section>
  );
}

export default About;
