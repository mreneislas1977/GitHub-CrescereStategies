'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Ensure you have react-icons (npm install react-icons)

const LeadershipLab = () => {
  return (
    <section className="relative bg-[#014421] py-24 px-6 overflow-hidden">
      
      {/* Background Texture (Subtle Grid) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fdfbf5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="text-left">
            <h4 className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Proprietary Intelligence
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#fdfbf5] mb-6 leading-tight">
              The Leader Lab. <br />
              <span className="opacity-50 italic">Data, not Dogma.</span>
            </h2>
            <div className="w-20 h-1 bg-[#800020] mb-8"></div>
            
            <p className="text-lg text-[#fdfbf5]/80 leading-relaxed mb-8">
              True strategic advantage comes from understanding what others miss. 
              Join our deep-dive research newsletter where we dissect critical business issues 
              through the lens of behavioral science and organizational dynamics.
            </p>

            <ul className="space-y-4 mb-10">
              {['Executive Psychology', 'Implementation Science', 'Organizational Health Metrics'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#fdfbf5]">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C5A059] text-[#014421]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span className="font-medium tracking-wide text-sm uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: The "Card" CTA */}
          <div className="relative">
            {/* Decorative Offset Border */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#C5A059]/30 rounded-sm pointer-events-none hidden md:block"></div>
            
            <div className="bg-[#fdfbf5] p-6 md:p-8 rounded-sm shadow-2xl relative flex flex-col items-center text-center">
              
              <h3 className="text-2xl font-serif font-bold text-[#014421] mb-2">
                Join the Inner Circle
              </h3>
              <p className="text-[#5c4033] mb-6 text-sm leading-relaxed max-w-md">
                Get our latest briefing delivered directly to your inbox every week. 
              </p>

              {/* --- 1. SUBSTACK EMBED --- */}
              <div className="w-full mb-6 flex justify-center">
                <iframe 
                  src="https://leaderlaboratory.substack.com/embed" 
                  width="480" 
                  height="320" 
                  style={{ 
                    border: '1px solid #EEE', 
                    background: 'white',
                    maxWidth: '100%' // Ensures responsiveness on mobile
                  }} 
                  frameBorder="0" 
                  scrolling="no"
                ></iframe>
              </div>

              {/* Divider */}
              <div className="flex items-center w-full gap-4 mb-6 opacity-50">
                <div className="h-px bg-[#5c4033] flex-1"></div>
                <span className="text-xs text-[#5c4033] uppercase">Or</span>
                <div className="h-px bg-[#5c4033] flex-1"></div>
              </div>

              {/* --- 2. LINKEDIN BUTTON --- */}
              {/* Used your link but styled it to match your site + LinkedIn Blue */}
              <a 
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7413946210195202048" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white w-full max-w-[280px] h-10 rounded-full font-sans font-medium text-sm hover:bg-[#004182] transition-colors shadow-sm"
              >
                <FaLinkedin size={18} />
                Subscribe on LinkedIn
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipLab;
