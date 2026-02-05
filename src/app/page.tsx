import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Stakeholders from './components/Stakeholders';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Challenges />
      <Solutions />
      <Process />
      <Stakeholders />
      <Contact />
    </>
  );
}
