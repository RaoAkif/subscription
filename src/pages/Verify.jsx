// src/pages/Verify.jsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Verify() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Verifying subscription...');

  useEffect(() => {
    const verifySubscription = async () => {
      const token = searchParams.get('token');

      if (token) {
        try {
          const response = await axios.get(`http://localhost:3001/verify?token=${token}`);
          setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response?.data.message || 'Verification failed. Try again later.');
        }
      } else {
        setMessage('Invalid verification token.');
      }
    };

    verifySubscription();
  }, [searchParams]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Verify;
