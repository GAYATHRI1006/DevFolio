import React from 'react';
import { Bg } from './components/Bg';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import ReactProjects from './components/ReactProjects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Bg />
      <Navbar />
      <HeroSection />
      <About /> 
      <Skills/>
      <ReactProjects/>
      <Footer/>
    
    </>
  );
};

export default App;
