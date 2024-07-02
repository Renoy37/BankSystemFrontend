import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DSignUpForm = () => {
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const handleGoogleSignUp = () => {
  //   window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://127.0.0.1:5000/auth/google/callback&response_type=code&scope=email%20profile';
  // };

  // const handleGitHubSignUp = () => {
  //   window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&redirect_uri=http://127.0.0.1:5000/auth/github/callback&scope=user';
  // };

  // const production = 'http://127.0.0.1:5000';
  const deployment = 'https://banksystem-123.onrender.com';
  const baseUrl = deployment

  const handleEmailSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sign up successful', data);
        localStorage.setItem('accessToken', data.access_token); // Store the token
        navigate('./dashboard'); // Redirect to dashboard
      } else {
        throw new Error('Sign up failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        localStorage.setItem('accessToken', data.access_token); // Store the token
        navigate('./dashboard'); // Redirect to dashboard
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSigningUp) {
      handleEmailSignUp(event);
    } else {
      handleEmailLogin(event);
    }
  };

  const toggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">{isSigningUp ? 'Sign up' : 'Log in'}</h1>
        </div>
        <h3 className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login Demo 1: john13@gmail.com 
          password : password13
        </h3>
        <h3 className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Login Demo 2: john20@gmail.com 
          password : password20
        </h3>
        {/* <div className="mb-4">
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h6.6c-.3 1.5-1.1 2.8-2.2 3.7v3h3.6c2.1-1.9 3.5-4.7 3.5-8.8z" />
              <path fill="#34A853" d="M12 24c3 0 5.5-1 7.4-2.6l-3.6-3c-1 .7-2.3 1.2-3.8 1.2-2.9 0-5.4-2-6.3-4.8H2.1v3.1C4 21.5 7.7 24 12 24z" />
              <path fill="#FBBC05" d="M5.7 14.7c-.2-.7-.3-1.5-.3-2.3s.1-1.6.3-2.3V7.2H2.1C1.4 8.7 1 10.3 1 12s.4 3.3 1.1 4.8l3.6-3.1z" />
              <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.8l3.3-3.3C17.5 1.3 14.9 0 12 0 7.7 0 4 2.5 2.1 6.2L5.7 9c1-2.8 3.5-4.8 6.3-4.8z" />
            </svg>
            {isSigningUp ? 'Sign Up' : 'Log In'} with Google
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={handleGitHubSignUp}
            className="w-full flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 .5C5.5.5 0 6 0 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.5 2.5 1.1 3 .8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.8 11.8 0 0 1 6.1 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.8.2 3.1.1 3.4.7.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 6 18.5.5 12 .5z" />
            </svg>
            {isSigningUp ? 'Sign Up' : 'Log In'} with GitHub
          </button>
        </div> */}
        <div className="mb-4 text-center">
          <span className="text-gray-600">Or {isSigningUp ? 'sign up' : 'log in'} with e-mail</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSigningUp ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </form>
        {error && (
          <div className="text-center text-sm text-red-600">
            {error}
          </div>
        )}
        <div className="text-center text-sm text-gray-600">
          <button onClick={toggleSignUp} className="text-indigo-600 hover:text-indigo-500">
            {isSigningUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DSignUpForm;
