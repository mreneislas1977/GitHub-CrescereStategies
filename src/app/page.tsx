import Header from './Header';
import Hero from './Hero';
import PainPoints from './PainPoints'; // Fixed Import
import CollaborativePower from './CollaborativePower';
import Process from './Process';
import LeadershipBio from './LeadershipBio';
import LeadershipLab from './LeadershipLab';
import Stakeholders from './Stakeholders';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf5]">
      <Header />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Pain Points (Agitation) */}
      <PainPoints />
      
      {/* 3. Solutions & Process */}
      <CollaborativePower />
      <Process />
      <LeadershipBio />
      <Stakeholders />

      {/* 5. CTA: The Leadership Lab */}
      <LeadershipLab />
      
      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
