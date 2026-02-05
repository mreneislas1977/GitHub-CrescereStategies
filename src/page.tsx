import Hero from '@/components/Hero';
import About from '@/components/About';
import Stakeholders from '@/components/Stakeholders';
import Challenges from '@/components/Challenges';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Each component below contains the 'id' that the Navbar targets */}
      <Hero />
      <About />
      <Stakeholders />
      <Challenges />
      <Services />
      <Process />
      <Solutions />
      <Contact />
    </main>
  );
}
