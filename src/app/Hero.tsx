'use client';
import React from 'react';
import { useModal } from './ModalContext'; // <--- Connects to the Global Modal

const Hero = () => {
  const { openModal } = useModal(); // <--- Get the "switch" to open the popup

  return (
    // SECTION: Cream Background (#fdfbf5) with Dark Green Text
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#fdfbf5] overflow-hidden">
      
      {/* Background Texture (Dark Grid on Cream) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#014421" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Pre-Header */}
        <div className="inline-block mb-6 px-4 py-1 border border-[#014421]/20 rounded-full">
          <span className="text-[#014421] text-xs font-bold tracking-[0.2em] uppercase opacity-70">
            Organizational Behavioral Architecture
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#014421] mb-8 leading-tight">
          From Conviction <br />
          <span className="text-[#C5A059] italic">to Adoption.</span>
        </h1>

        {/* Sub-Headline / Copy */}
        <p className="text-lg md:text-xl text-[#5c4033] max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
          Missions succeed or fail based on the alignment of minds and behaviors. 
        </p>
        <p className="text-base text-[#5c4033] max-w-2xl mx-auto mb-10 leading-relaxed opacity-80">
          We apply rigorous sociological frameworks to bridge the gap between internal conviction and the world's perception, ensuring your mission isn't just heard—it’s adopted.
        </p>

        {/* CTA Button - Wired to Global Modal */}
        <button 
          onClick={openModal} 
          className="bg-[#014421] hover:bg-[#022c16] text-[#fdfbf5] font-bold py-5 px-10 rounded-sm uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Initiate A Brief Diagnostic
        </button>

      </div>
      
      {/* Decorative Bottom Fade (Cream to Transparent) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fdfbf5] to-transparent pointer-events-none"></div>

    </section>
  );
};

export default Hero;
