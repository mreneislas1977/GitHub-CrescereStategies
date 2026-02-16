import React from 'react';
import { RefreshCcw } from 'lucide-react';

const ServiceSchematic = () => {
  return (
    <section className="py-20 bg-[#fdfbf5]">
      <div className="container mx-auto px-6">
        
        {/* The Review Perimeter: Defined by your Brand Red */}
        <div className="border-[3px] border-[#BD1E2D] p-2 rounded-sm shadow-2xl relative">
          
          {/* Label: Continuous Review Protocol */}
          <div className="absolute -top-5 left-10 bg-[#BD1E2D] px-4 py-1 shadow-md">
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
              <RefreshCcw className="w-3 h-3 animate-spin-slow" /> 
              Omnipresent Review: Registered Research Division Ref: CS-INT-2026
            </span>
          </div>

          <div className="bg-white p-10 grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* 01: STUDY (Entry Point) */}
            <div className="relative">
              <h4 className="text-[#014421] font-bold text-xl mb-4 uppercase">01 Study</h4>
              <p className="text-sm text-[#5c4033] mb-4 leading-relaxed">
                Initiated via the <strong>Preliminary Study</strong>. Initial mission sentiment and AI-driven fiscal health audit.
              </p>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">GEM: Experience</span>
            </div>

            {/* 02: UNDERSTAND */}
            <div className="relative">
              <h4 className="text-[#014421] font-bold text-xl mb-4 uppercase">02 Understand</h4>
              <p className="text-sm text-[#5c4033] mb-4 leading-relaxed">
                Quantifying human assets. Deep-dive behavioral analytics via OCEAN and PANAS-X Affect Audits.
              </p>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">GEM: Understanding</span>
            </div>

            {/* 03: DREAM */}
            <div className="relative">
              <h4 className="text-[#014421] font-bold text-xl mb-4 uppercase">03 Dream</h4>
              <p className="text-sm text-[#5c4033] mb-4 leading-relaxed">
                Developing the <strong>Behavioral North Star</strong>: Mission and vision statements designed to propel action.
              </p>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">GEM: Judgment</span>
            </div>

            {/* 04: PLAN */}
            <div className="relative">
              <h4 className="text-[#014421] font-bold text-xl mb-4 uppercase">04 Plan</h4>
              <p className="text-sm text-[#5c4033] mb-4 leading-relaxed">
                Architecting adoption strategies to survive the implementation slog and ensure sustained momentum.
              </p>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">GEM: Decision</span>
            </div>

            {/* 05: DO */}
            <div className="relative">
              <h4 className="text-[#014421] font-bold text-xl mb-4 uppercase">05 Do</h4>
              <p className="text-sm text-[#5c4033] mb-4 leading-relaxed">
                Rigorous execution and deployment of high-impact leadership strategies to catalyze growth.
              </p>
              <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest">GEM: Action</span>
            </div>

          </div>
        </div>

        {/* Narrative Attribution */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center opacity-70">
          <p className="text-[10px] font-bold text-[#014421] uppercase tracking-[0.2em]">
            Proprietary Business Architecture © Crescere Strategies LLC [cite: 268, 312]
          </p>
          <p className="text-[10px] font-bold text-[#BD1E2D] uppercase tracking-[0.2em]">
            Provisionally Patented Process: Pathway to Achievement [cite: 270, 312]
          </p>
        </div>

      </div>
    </section>
  );
};
