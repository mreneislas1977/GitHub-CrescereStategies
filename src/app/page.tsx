import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollaborativePower from '@/components/CollaborativePower';
import Process from '@/components/Process';
import Stakeholders from '@/components/Stakeholders';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CollaborativePower />
      <Process />
      <Stakeholders />
    </main>
  );
}
