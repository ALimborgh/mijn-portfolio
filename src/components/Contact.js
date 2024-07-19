// src/components/Contact.js
import React from 'react';
import emailjs from 'emailjs-com';
import '../assets/css/Contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    emailjs.sendForm('service_bbrbc2m', 'template_13rrfgc', e.target, 'nYSePl5tMfJR0Wwam')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <main>
      <section>
        <h1>Contact mij</h1>
        <form onSubmit={sendEmail}>
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
