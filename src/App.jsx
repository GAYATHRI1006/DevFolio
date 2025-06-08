import React from 'react';
import { Bg } from './components/Bg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import ReactProjects from './components/ReactProjects';

const App = () => {
  return (
    <>
      <Bg />
      <Navbar />
      <HeroSection />
      <Skills/>
      <ReactProjects/>
      
    </>
  );
};

export default App;