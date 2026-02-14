import Header from './Header';
import Hero from './Hero';
import PainPoints from './'PainPoints':
import CollaborativePower from './CollaborativePower';
import Process from './Process';
import Stakeholders from './Stakeholders';
import LeadershipBio from './LeadershipBio';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-crescere-cream">
      <Header />
      <Hero />
      <PainPoints />
      <CollaborativePower />
      <Process />
      <LeadershipBio />
      <Stakeholders />
      <Footer />
    </main>
  );
}
