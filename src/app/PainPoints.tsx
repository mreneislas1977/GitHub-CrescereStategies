'use client';
import React from 'react';

const PainPoints = () => {
  return (
    <section className="bg-[#014421] text-[#fdfbf5] py-24 px-6 relative overflow-hidden">
      
      {/* Background Texture (Optional subtle pattern) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A059" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-4">
            The Hidden Cost of Status Quo
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Why brilliant strategies <br />
            <span className="text-white/90">fail to launch.</span>
          </h3>
          <div className="w-24 h-1 bg-[#800020] mx-auto mt-8"></div>
        </div>

        {/* The 3 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Pain Point 1: Alignment */}
          <div className="group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fdfbf5]/5 border border-[#C5A059]/30 group-hover:bg-[#C5A059] group-hover:text-[#014421] transition-all duration-300">
              {/* Icon: Compass/Disconnect */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-serif text-[#fdfbf5] mb-4 group-hover:text-[#C5A059] transition-colors">
              Strategic Drift
            </h4>
            <p className="text-[#fdfbf5]/70 leading-relaxed">
              Your mission is clear in the boardroom but dissolves by the time it reaches the front lines. Without total alignment, speed turns into chaos and resources bleed away.
            </p>
          </div>

          {/* Pain Point 2: Understanding People */}
          <div className="group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fdfbf5]/5 border border-[#C5A059]/30 group-hover:bg-[#C5A059] group-hover:text-[#014421] transition-all duration-300">
              {/* Icon: People/Mind */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-serif text-[#fdfbf5] mb-4 group-hover:text-[#C5A059] transition-colors">
              The Human Black Box
            </h4>
            <p className="text-[#fdfbf5]/70 leading-relaxed">
              You have headcount, but do you have heart-count? Leading without deep psychological data on your team is like navigating a ship without a depth finder.
            </p>
          </div>

          {/* Pain Point 3: Habits & Performance */}
          <div className="group">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fdfbf5]/5 border border-[#C5A059]/30 group-hover:bg-[#C5A059] group-hover:text-[#014421] transition-all duration-300">
              {/* Icon: Chart/Growth */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-2xl font-serif text-[#fdfbf5] mb-4 group-hover:text-[#C5A059] transition-colors">
              Inconsistent Execution
            </h4>
            <p className="text-[#fdfbf5]/70 leading-relaxed">
              Excellence isn't an act; it's a habit. When teams lack the behavioral frameworks to sustain high performance, growth becomes sporadic rather than unstoppable.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
