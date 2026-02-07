import Header from './Header';
import Hero from './Hero';
import CollaborativePower from './CollaborativePower';
import Process from './Process';
import Stakeholders from './Stakeholders';
import Footer from './Footer';

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
