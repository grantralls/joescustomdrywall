import React from 'react';
import PropTypes from 'prop-types';
import {
  gridContainer, header, text,
} from '../styles/about.module.css';

function About({ about }) {
  return (
    <section className={gridContainer}>
      <h1 id={header}>About Me</h1>
      <p id={text}>{about}</p>
    </section>
  );
}

About.propTypes = {
  about: PropTypes.string,
};

About.defaultProps = {
  about: '',
};

export default About;
