// src/components/Contact.js
import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <main>
      <section>
        <h1>Contact mij</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br /><br />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br /><br />
          
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="5" cols="30" required></textarea><br /><br />
          
          <input type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
}

export default Contact;
