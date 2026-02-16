import React from 'react';
import { RefreshCcw } from 'lucide-react';

const PathwayWithReviewBox = () => {
  return (
    <section className="py-16 bg-[#fdfbf5]">
      <div className="container mx-auto px-6">
        
        {/* The Red Box: Signifying the Continuous Review Perimeter */}
        <div className="border-2 border-[#8B0000] p-1 rounded-sm relative">
          
          {/* Label for the Box */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fdfbf5] px-4 py-1 border border-[#8B0000]">
             <span className="text-[#8B0000] text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
               <RefreshCcw className="w-3 h-3" /> Continuous Review & Affect Audit Protocols
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 bg-white/50">
            {/* 01 STUDY: The Entry Point */}
            <div className="space-y-4">
              <h4 className="text-[#014421] font-bold uppercase text-lg">01 Study</h4>
              <p className="text-xs text-[#5c4033] opacity-80">
                Initiated via the <strong>Preliminary Study</strong>. Initial mission reactions and cursory fiscal evaluation.
              </p>
              <div className="text-[9px] font-bold text-[#C5A059] uppercase">GEM: Experience</div>
            </div>

            {/* 02 UNDERSTAND */}
            <div className="space-y-4">
              <h4 className="text-[#014421] font-bold uppercase text-lg">02 Understand</h4>
              <p className="text-xs text-[#5c4033] opacity-80">
                Opening the Human Black Box via OCEAN and PANAS-X diagnostic engines.
              </p>
              <div className="text-[9px] font-bold text-[#C5A059] uppercase">GEM: Understanding</div>
            </div>

            {/* 03 DREAM */}
            <div className="space-y-4 border-l border-[#8B0000]/10 pl-4">
              <h4 className="text-[#014421] font-bold uppercase text-lg">03 Dream</h4>
              <p className="text-xs text-[#5c4033] opacity-80">
                Formulating mission and vision statements that propel future behavior.
              </p>
              <div className="text-[9px] font-bold text-[#C5A059] uppercase">GEM: Judgment</div>
            </div>

            {/* 04 PLAN */}
            <div className="space-y-4">
              <h4 className="text-[#014421] font-bold uppercase text-lg">04 Plan</h4>
              <p className="text-xs text-[#5c4033] opacity-80">
                Architecting adoption strategies that survive the implementation slog.
              </p>
              <div className="text-[9px] font-bold text-[#C5A059] uppercase">GEM: Decision</div>
            </div>

            {/* 05 DO */}
            <div className="space-y-4">
              <h4 className="text-[#014421] font-bold uppercase text-lg">05 Do</h4>
              <p className="text-xs text-[#5c4033] opacity-80">
                Rigorous execution to transform leadership capability into growth.
              </p>
              <div className="text-[9px] font-bold text-[#C5A059] uppercase">GEM: Action</div>
            </div>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="mt-6 text-center">
          <p className="text-[10px] text-[#014421] font-bold uppercase tracking-widest opacity-60">
            Crescere Strategies LLC • Provisionally Patented Pathway to Achievement • CS-INT-2026
          </p>
        </div>
      </div>
    </section>
  );
};
