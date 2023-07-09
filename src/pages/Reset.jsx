import React from "react";
import { useState } from "react";
import "./reset.css";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const Reset = () => {
    const [email, setEmail] = useState('');
    const [isResetRequested, setIsResetRequested] = useState(false);
    const [error, setError] = useState('');
  
    const handleInputChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setError('');
  
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setIsResetRequested(true);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  return (
    <form>
      <div className="reset-container">
        <h2>Forgot Password</h2>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter e-mail*"
            value={email}
            onChange={handleInputChange}
          />
              </div>
              <Link to='/'>
              <button onClick={handleSubmit}>Continue </button>
              </Link>
              
              <Link to='/login'>
                  <button>Back to sign in</button>
              </Link>
      </div>
    </form>
  );
};

export default Reset;
