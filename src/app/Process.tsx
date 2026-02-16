import React from 'react';
import { ShieldCheck, Compass, Lightbulb, ClipboardList, Zap, RefreshCcw } from 'lucide-react';

const BehavioralEngine = () => {
  const pathwaySteps = [
    {
      id: '01',
      phase: 'Study',
      gem: 'Experience',
      icon: <Compass className="w-5 h-5" />,
      narrative: 'We audit current tactics against your stated mission to identify Strategic Drift before it turns into chaos.',
      deliverable: 'Drift Analysis Report'
    },
    {
      id: '02',
      phase: 'Understand',
      gem: 'Understanding',
      icon: <ShieldCheck className="w-5 h-5" />,
      narrative: 'We open the "Human Black Box" using OCEAN and PANAS-X to quantify leadership tendencies and team resilience.',
      deliverable: 'Behavioral Asset Map'
    },
    {
      id: '03',
      phase: 'Dream',
      gem: 'Judgment',
      icon: <Lightbulb className="w-5 h-5" />,
      narrative: 'Executives develop compelling mission and vision statements specifically designed to propel future behavior.',
      deliverable: 'Behavioral North Star'
    },
    {
      id: '04',
      phase: 'Plan',
      gem: 'Decision',
      icon: <ClipboardList className="w-5 h-5" />,
      narrative: 'We engineer adoption into the roadmap, architecting a strategy that survives the implementation slog.',
      deliverable: 'Adoption Blueprint'
    },
    {
      id: '05',
      phase: 'Do',
      gem: 'Action',
      icon: <Zap className="w-5 h-5" />,
      narrative: 'Rigorous execution with behavioral alignment, transforming leadership capability into market dominance.',
      deliverable: 'Catalytic Execution'
    }
  ];

  return (
    <section className="py-20 bg-[#fdfbf5] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header with Patent & Methodology Narrative */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Proprietary Business Architecture
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#014421] mb-6 leading-tight">
            The Pathway to Achievement: <br />
            <span className="italic text-[#C5A059]">A Recursive Operating System.</span>
          </h3>
          <p className="text-[#5c4033] text-lg leading-relaxed opacity-90 border-l-2 border-[#C5A059] pl-6">
            Our provisionally patented process dissolves the <strong>Human Black Box</strong> by aligning 
            Bernard Lonergan’s Generalized Empirical Method (GEM) with high-stakes execution. 
            We don’t just advise on growth; we engineer the behavioral architecture that makes it inevitable.
          </p>
        </div>

        {/* The Engine Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-4">
          
          {/* Ubiquitous REVIEW Layer Narrative */}
          <div className="lg:col-span-5 mb-8 p-4 bg-[#014421] text-[#fdfbf5] flex items-center justify-center gap-4 rounded-sm shadow-lg">
            <RefreshCcw className="w-5 h-5 text-[#C5A059] animate-spin-slow" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              Omnipresent Review Phase: Continuous Affect Audits & Strategic Verification at Every Stage
            </span>
          </div>

          {pathwaySteps.map((step) => (
            <div key={step.id} className="group relative bg-white border border-[#014421]/10 p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="text-[#C5A059] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-[#014421]/30 tracking-widest">{step.id}</span>
              </div>

              <h4 className="text-[#014421] font-bold text-xl uppercase mb-1">{step.phase}</h4>
              <p className="text-[10px] text-[#C5A059] font-bold tracking-widest uppercase mb-4">
                GEM: {step.gem}
              </p>
              
              <p className="text-sm text-[#5c4033] leading-relaxed mb-6 opacity-80">
                {step.narrative}
              </p>

              <div className="pt-4 border-t border-[#fdfbf5]">
                <span className="text-[9px] font-bold text-[#014421] uppercase block mb-1">Deliverable:</span>
                <span className="text-xs font-medium text-[#5c4033] italic">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Intellectual Property Footer */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center opacity-50 border-t border-[#014421]/10 pt-8">
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#014421]">
            Registered Research Division Ref: CS-INT-2026
          </p>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#014421]">
            Provisionally Patented Process © Crescere Strategies LLC
          </p>
        </div>

      </div>
    </section>
  );
};

export default BehavioralEngine;
