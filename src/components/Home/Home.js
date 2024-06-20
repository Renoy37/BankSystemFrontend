import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../assets/Online Review-rafiki.png';

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <p className="text-2xl md:text-4xl font-bold mb-4">
              Welcome to YourBank <br />
              Secure and Convenient <br />
              Online Banking
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="btn hover:bg-blue-700">
                Features
              </button>
              <Link to="/signup">
                <button className="btn hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={ImageOne} alt="logo" className="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
