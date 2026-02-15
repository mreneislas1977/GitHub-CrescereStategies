import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ResearchOverviewPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-[#014421]">
        
        {/* Page Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-[#014421]">
          Research Overview
        </h1>

        {/* Intro Text */}
        <div className="prose prose-green max-w-none">
          <p className="text-xl leading-relaxed mb-10 text-[#014421]/80 font-serif">
            Our diagnostic engines differ from standard market assessments by prioritizing longitudinal data over static snapshots. We integrate established psychological frameworks with proprietary scoring logic to quantify organizational health.
          </p>
          
          <hr className="border-[#C5A059]/30 my-10" />

          {/* Section 1 */}
          <h3 className="font-serif text-2xl font-bold mt-8 mb-4 text-[#014421]">
            Methodological Foundation
          </h3>
          <p className="mb-6">
            Crescere Strategies leverages validated psychometric instruments to provide a baseline for executive coaching and strategic alignment. By combining the Big Five (OCEAN) personality traits with real-time affect measurement (PANAS-X), we create a dynamic profile of leadership capability under pressure.
          </p>

          {/* Section 2 */}
          <h3 className="font-serif text-2xl font-bold mt-8 mb-4 text-[#014421]">
            Core Instruments
          </h3>
          <ul className="list-disc pl-6 space-y-4 mb-6 marker:text-[#C5A059]">
            <li>
              <strong className="text-[#014421]">OCEAN Personality Profile:</strong> Measures Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism to predict long-term behavioral tendencies.
            </li>
            <li>
              <strong className="text-[#014421]">PANAS-X Affect Scales:</strong> Assesses positive and negative affect schedules to understand current emotional states and their impact on decision-making velocity.
            </li>
            <li>
              <strong className="text-[#014421]">Organizational Velocity Index (OVI):</strong> A proprietary metric that correlates leadership alignment with operational throughput.
            </li>
          </ul>

          <h3 className="font-serif text-2xl font-bold mt-8 mb-4 text-[#014421]">
            Data Integrity & Privacy
          </h3>
          <p className="mb-4">
            All research data is anonymized and aggregated to protect individual privacy while providing actionable insights at the organizational level. We adhere to strict ethical guidelines in the administration and scoring of all diagnostic tools.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
