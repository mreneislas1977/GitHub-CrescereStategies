'use client';
import React from 'react';
import Image from 'next/image'; // <--- 1. Added required import

const LeadershipBio = () => {
  return (
    <section className="bg-white py-24 px-6 border-b-8 border-[#C5A059]/20">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Label */}
        <div className="text-center mb-16">
          <h2 className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Leadership & Vision
          </h2>
          <div className="w-16 h-0.5 bg-[#014421] mx-auto opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Photo & Key Stats */}
          <div className="md:col-span-5 lg:col-span-4 relative">
            
            {/* PHOTO CONTAINER */}
            <div className="relative aspect-[3/4] bg-[#fdfbf5] border border-[#C5A059]/30 rounded-sm overflow-hidden shadow-2xl mb-8">
               {/* 2. Fixed Path to /rene-headshot.png and uncommented the code */}
               <Image 
                 src="/rene-headshot.png" 
                 alt="M. René Islas" 
                 fill 
                 className="object-cover"
                 priority={true} 
               />
            </div>

            {/* Quote / Highlight */}
            <div className="bg-[#014421] text-[#fdfbf5] p-8 relative rounded-sm shadow-lg">
              <span className="absolute top-4 left-4 text-[#C5A059] text-4xl font-serif leading-none opacity-50">"</span>
              <p className="font-serif italic text-lg leading-relaxed relative z-10">
                We don't just advise on growth; we engineer the behavioral architecture that makes it inevitable.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio & Credentials */}
          <div className="md:col-span-7 lg:col-span-8 md:pl-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#014421] mb-2">
              M. René Islas
            </h1>
            <p className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-8">
              Principal & Founder
            </p>

            <div className="space-y-6 text-[#5c4033] leading-relaxed text-lg">
              <p>
                With a career defined by high-stakes strategic execution, René specializes in bridging the gap between executive vision and organizational adoption. His approach combines rigorous sociological frameworks with hard-nosed business logic to dissolve the friction that typically stalls growth.
              </p>
              <p>
                Before founding Crescere Strategies, he served in the public, private, and non-profit sectors where he levereged diagnostic methodologies and developed propriatary, provisionally patented business processes now used to optimize organizational health, strategic leadership, and rigorus execution.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-[#5c4033]/10 my-10"></div>

            {/* CREDENTIALS & EDUCATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Education */}
              <div>
                <h4 className="flex items-center gap-2 text-[#014421] font-bold uppercase tracking-widest text-xs mb-4">
                  <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
                  Education
                </h4>
                <ul className="space-y-4">
                  <li className="group">
                    <span className="block text-[#5c4033] font-bold text-sm">Salpointe Catholic High School</span>
                    <span className="text-sm text-[#5c4033]/70 italic">
                      College Preparatory Diploma (Alumni Hall of Fame Member)
                    </span>
                  </li>
                  <li className="group">
                    <span className="block text-[#5c4033] font-bold text-sm">Whittier College</span>
                    <span className="text-sm text-[#5c4033]/70 italic">
                      Dual Bachlor Degrees in Political Science and Sociology (Young Alumni Award Winner)
                    </span>
                  </li>
                  <li className="group">
                    <span className="block text-[#5c4033] font-bold text-sm">Western Governors University</span>
                    <span className="text-sm text-[#5c4033]/70 italic">
                      Master in Business Administration (MBA)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h4 className="flex items-center gap-2 text-[#014421] font-bold uppercase tracking-widest text-xs mb-4">
                  <span className="w-2 h-2 bg-[#C5A059] rounded-full"></span>
                  Expertise
                </h4>
                <ul className="space-y-2 text-sm text-[#5c4033]/80">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C5A059] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Strategic Alignment
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C5A059] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Executive Behavioral Profiling
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C5A059] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Organizational Diagnostics
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C5A059] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Law & Policy Development
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#C5A059] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Federal Advocacy
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipBio;
