import Header from './components/Header';
import Hero from './components/Hero';
import CollaborativePower from './components/CollaborativePower';
import Process from './components/Process';
import Stakeholders from './components/Stakeholders';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-crescere-cream">
      <Header />
      <Hero />
      <CollaborativePower />
      <Process />
      <Stakeholders />
      <Footer />
    </main>
  );
}
