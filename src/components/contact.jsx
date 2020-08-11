import React from 'react';
import styles from '../styles/contact.module.css';

function Contact() {
  return (
    <footer id={styles.contact}>
      <h1>Contact Me</h1>
      <section>
        <address>
          Address: 1234 business rd. Front Royal, VA
          <br />
          Phone Number: (123) 456-7890
        </address>
      </section>
    </footer>
  );
}

export default Contact;
