import React from 'react';
import ServiceCard from './servicecard';
import styles from '../styles/services.module.css';

function Services() {
  return (
    <div id={styles.servicesSection}>
      <h1 id={styles.servicesText}>Services</h1>
      <main id={styles.serviceContainer}>
        <ServiceCard id="smallCard" service="Hanging" />
        <ServiceCard service="Sanding" />
        <ServiceCard id="smallCard" service="Finishing" />
      </main>
    </div>
  );
}

export default Services;
