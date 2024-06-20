import React, { useState } from 'react';
import './form.css';


const SIGNUP_URL = 'https://banksystem-123.onrender.com/signup';
const LOGIN_URL = 'https://banksystem-123.onrender.com/login';
const localSignUp = 'http://127.0.0.1:5000/signup'
const locLogin = 'http://127.0.0.1:5000/login'


function Signup({ onLogin, onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [error, setError] = useState(null);


  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch(localSignUp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error signing up. Please try again.');
      }
    })
    .then(data => {
      onSignUp(data.access_token);
      setEmail('');
      setPassword('');
      setError(null);
    })
    .catch(error => {
      setError(error.message);
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch(locLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Invalid email or password. Please try again.');
      }
    })
    .then(data => {
      onLogin(data.access_token);
      setEmail('');
      setPassword('');
      setError(null);
    })
    .catch(error => {
      setError(error.message);
    });
  }

  return (
    <div className="signup-container">
      <h3>Coin Sage</h3>
      {error && <p className="error">{error}</p>}
      <form className="signup-form" onSubmit={isSigningUp ? handleSignupSubmit : handleLoginSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="switch-auth">
          <span>
            {isSigningUp ? (
              <>
                <div>
                Already have an account?{' '}
                <button type="button" onClick={() => setIsSigningUp(false)}>Login</button>
                </div>
              </>
            ) : (
              <>
                <div>
                Don't have an account?{' '}
                <button type="button" onClick={() => setIsSigningUp(true)}>Signup</button>
                </div>
              </>
            )}
          </span>
        </div>
        <button className="submit-btn" type="submit">{isSigningUp ? 'Signup' : 'Login'}</button>
      </form>
    </div>
  );
}

export default Signup;
