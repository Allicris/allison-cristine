// import { useState } from 'react';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

// export default function Contact() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     alert(`Thank you ${firstName} ${lastName}`);
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setMessage('');
//   };
  
//   return (
//     <div >
//       <h1>
//         Feel Free to contact me!
//       </h1>
//       <form>
//         <input 
//         value={firstName}
//         name="firstName"
//         onChange={(e) => setFirstName(e.target.value)}
//         type="text"
//         placeholder="Name"
//         />
//         <input 
//         value={email}
//         name="email"
//         onChange={(e) => setEmail(e.target.value)}
//         type="text"
//         placeholder="Email"
//         />
//         <input 
//         value={message}
//         name="message"
//         onChange={(e) => setMessage(e.target.value)}
//         type="text"
//         placeholder="Message"
//         />
//       </form>
//     </div>
//   );
// }