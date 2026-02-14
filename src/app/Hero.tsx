'use client';
import React from 'react';
import { useModal } from './ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  return (
    // Solid Cream Background (#fdfbf5) - Center Aligned
    <section className="relative min-h-screen flex items-center justify-center bg-[#fdfbf5] px-6 pt-20">
      
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-4xl">
          {/* HEADLINE: Deep Green (#014421) with Serif Font */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#014421] mb-6 leading-[1.1] tracking-tight">
            From Conviction <br className="hidden md:block" />
            to Adoption.
          </h1>

          {/* DECORATIVE DIVIDER: Brown (#5c4033) */}
          <div className="w-16 h-0.5 bg-[#5c4033] opacity-30 mx-auto mb-8"></div>

          {/* SUB-HEADLINE: Brown (#5c4033) */}
          <p className="text-lg md:text-[1.125rem] text-[#5c4033] leading-relaxed max-w-2xl mx-auto mb-12">
            Missions succeed or fail based on the alignment of minds and behaviors. 
            We apply rigorous sociological frameworks to bridge the gap between internal 
            conviction and the world's perception, ensuring your mission isn't just 
            heard—it’s adopted.
          </p>

          {/* CTA BUTTON: Crimson (#800020) */}
          <button 
            onClick={openModal} 
            className="inline-flex items-center gap-3 bg-[#800020] text-white font-bold text-sm tracking-widest uppercase py-4 px-10 rounded-sm hover:bg-[#66001a] hover:-translate-y-0.5 transition-all shadow-md group"
          >
            Initiate a Diagnostic
            {/* SVG Arrow */}
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
