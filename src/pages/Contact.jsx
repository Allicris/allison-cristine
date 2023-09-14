import { useState } from 'react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };
  
  return (
    <div >
      <h1>
        
      </h1>
    </div>
  );
}