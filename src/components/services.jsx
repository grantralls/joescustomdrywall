import React from 'react';
import ServiceCard from './servicecard';
import styles from '../styles/services.module.css';

function Services() {
  return (
    <>
      <h1>Services</h1>
      <main id={styles.serviceContainer}>
        <ServiceCard id="smallCard" service="Hanging"/>
        <ServiceCard service="Sanding" />
        <ServiceCard id="smallCard" service="Finishing" />
      </main>
    </>
  );
}

export default Services;
