import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
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
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Full Name:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" />
      <input className='send' type="submit" value="Send" />
    </form>
    <p>
      some text about how you can contact me.
    </p>
    </div>
  );
};