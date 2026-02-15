'use client';
import React from 'react';

const StrategyAudit = () => {
  return (
    <section className="bg-[#014421] text-[#fdfbf5] py-20 px-6 border-t border-[#fdfbf5]/10">
      <div className="container mx-auto max-w-5xl flex flex-wrap items-center gap-12">
        
        {/* LEFT: Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
            Stop the Strategic Drift.
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8">
            Is your mission dissolving before it reaches the front lines? 
            Most firms suffer from a <strong className="text-[#C5A059]">"Human Black Box"</strong>—leading without deep psychological data.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-[#C5A059] font-bold">✔</span> 
              Identify cultural and strategic friction points
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C5A059] font-bold">✔</span> 
              Verify executive behavioral alignment
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C5A059] font-bold">✔</span> 
              Quantify organizational health
            </li>
          </ul>
        </div>

        {/* RIGHT: The "Card" */}
        <div className="flex-shrink-0 w-full md:w-[350px] bg-[#fdfbf5] text-[#014421] p-10 rounded-sm text-center shadow-2xl relative">
          {/* Decorative Gold Border */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#C5A059]/30 pointer-events-none"></div>

          <h3 className="text-2xl font-serif font-bold mb-2 relative z-10">Strategy Audit</h3>
          <p className="text-sm text-[#5c4033] mb-8 relative z-10">
            A 15-minute diagnostic to bridge the gap between conviction and adoption.
          </p>
          
          <a 
            href="mailto:rene@crescere-strat.com" // Update this link if you have a specific booking page
            className="block bg-[#014421] hover:bg-[#022c16] text-[#fdfbf5] py-4 px-6 font-bold text-sm uppercase tracking-widest transition-colors relative z-10"
          >
            Schedule the Audit
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default StrategyAudit;
