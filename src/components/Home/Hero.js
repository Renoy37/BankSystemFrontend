import React from 'react';
import imageTwo from '../assets/Payment Information-bro.png';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
              Join YourBank today and enjoy seamless online banking<br />
              Manage your accounts, transfer funds, and access financial services from home<br />
              Sign up now and take control of your finances securely.
            </p>
            <button className="btn hover:bg-green-700">
              Get Started
            </button>
          </div>
          <div>
            <img src={imageTwo} alt='Payments' className="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
