import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if any of the fields are blank
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return; // Prevent further execution of the code
    }

    emailjs.sendForm('service_27pcc7x', 'template_esg1i7k', form.current, 'iovWjBhAvnODlDxhY')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for reaching out!');
        console.log('Success!')
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    
    <div className='contact'>
      <div className='contact-text'>
      <h2>
        Lets Connect!
      </h2>
      <br></br>
      <p>I'm looking to connect with anyone in the tech space. Whether it be a coffee chat, a question or if you're looking to collaborate.</p>
    <br></br>
    <p>I'm also currently looking to work and open to work! Contact me if you have an open position you think I would be qualified for.</p>
    </div>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label>Full Name:</label>
        <input id='name' type="text" name="user_name" />
        <label>Email:</label>
        <input id='email' type="email" name="user_email" />
        <label>Message:</label>
        <textarea id='message' name="message" />
        <input className='send' type="submit" value="Send" />
      </form>
      {/* <div className='contact-text'>
      <h2>
        Lets Connect!
      </h2>
      <br></br>
      <p>I'm looking to connect with anyone in the tech space. Whether it be a coffee chat, a question or if you're looking to collaborate.</p>
    <br></br>
    <p>I'm also currently looking to work and open to work! Contact me if you have an open position you think I would be qualified for.</p>
    </div> */}
    </div>
  );
};