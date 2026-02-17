'use client';
import React from 'react';
import { useModal } from './ModalContext'; // <--- Connects to the Global Modal

const StrategyAudit = () => {
  const { openModal } = useModal(); // <--- Get the "switch" to open the popup

  return (
    // CHANGE 1: Background is now Cream (#fdfbf5) instead of Green
    <section className="bg-[#fdfbf5] text-[#014421] py-20 px-6 border-t border-[#014421]/10">
      <div className="container mx-auto max-w-5xl flex flex-wrap items-center gap-12">
        
        {/* LEFT: Text Content */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-[#014421]">
            Stop the Strategic Drift.
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8 text-[#5c4033]">
            Is your mission dissolving before it reaches the front lines? 
            Most firms suffer from a <strong className="text-[#800020]">"Human Black Box"</strong>—leading without deep psychological data.
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

        {/* RIGHT: The "Card" is now Green (High Contrast against the cream background) */}
        <div className="flex-shrink-0 w-full md:w-[350px] bg-[#014421] text-[#fdfbf5] p-10 rounded-sm text-center shadow-2xl relative">
          
          {/* Decorative Gold Border */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-[#C5A059]/30 pointer-events-none"></div>

          <h3 className="text-2xl font-serif font-bold mb-2 relative z-10 text-[#C5A059]">
            Preliminary Study
          </h3>
          <p className="text-sm text-[#fdfbf5]/80 mb-8 relative z-10">
            A 15-minute diagnostic to bridge the gap between conviction and adoption.
          </p>
          
          {/* BUTTON: Triggers the GLOBAL Modal */}
          <button 
            onClick={openModal} 
            className="w-full block bg-[#fdfbf5] hover:bg-[#C5A059] text-[#014421] py-4 px-6 font-bold text-sm uppercase tracking-widest transition-colors relative z-10"
          >
            Schedule the Preliminary Study
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default StrategyAudit;
