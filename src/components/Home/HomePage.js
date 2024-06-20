import React from 'react';
import { Navbar } from './Navbar';
import { Home } from './Home';
import Hero from './Hero.js';
import Features from './Features.js';
import { Slide } from './Slide.js';
import Foooter from './Footer.js';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Hero />
      <Features />
      <Slide />
      <Foooter />
    </>
  );
};

export default HomePage;
