// src/components/SubscribeForm.jsx
import { useState } from 'react';
import axios from 'axios';

function SubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      const response = await axios.post('http://localhost:3001/subscribe', { name, email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || 'Subscription failed. Try again later.');
    }
  };

  return (
    <div>
      <h1>Subscribe to our Waiting List</h1>
      <form onSubmit={handleSubscribe}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscribeForm;
