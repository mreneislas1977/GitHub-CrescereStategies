'use client';
import React from 'react';
import Image from 'next/image';
import { useModal } from './ModalContext'; // <--- 1. Import the Global Switch

const Hero = () => {
  const { openModal } = useModal(); // <--- 2. Get the trigger function

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#014421] overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fdfbf5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Pre-Header */}
        <div className="inline-block mb-6 px-4 py-1 border border-[#C5A059] rounded-full">
          <span className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase">
            Organizational Behavioral Architecture
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#fdfbf5] mb-8 leading-tight">
          Scientific Precision for <br />
          <span className="text-[#C5A059] italic">Executive Performance.</span>
        </h1>

        {/* Sub-Headline */}
        <p className="text-lg md:text-xl text-[#fdfbf5]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          We decode the hidden forces driving your organization. 
          Move beyond intuition with data-driven behavioral intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          
          {/* PRIMARY BUTTON - WIRED TO GLOBAL MODAL */}
          <button 
            onClick={openModal} // <--- 3. The Switch is now live!
            className="bg-[#C5A059] hover:bg-[#b08d4a] text-[#014421] font-bold py-4 px-8 rounded-sm uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Request Briefing
          </button>

          {/* SECONDARY BUTTON */}
          <a 
            href="#process" 
            className="text-[#fdfbf5] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors text-sm uppercase tracking-widest"
          >
            Explore Methodology
          </a>
        </div>

      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#014421] to-transparent pointer-events-none"></div>

    </section>
  );
};

export default Hero;
