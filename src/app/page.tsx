import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PainPoints from './PainPoints';
import Process from './Process';
import Stakeholders from './Stakeholders';
import LeadershipBio from './LeadershipBio';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Process />
        <Stakeholders />
        <LeadershipBio />
      </main>
      <Footer />
    </div>
  );
}
