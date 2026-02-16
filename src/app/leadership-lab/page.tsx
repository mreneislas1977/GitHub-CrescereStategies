'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';

/**
 * Intelligence Component - Page 2 Methodology
 * Palette: Parchment (#fdfbf5), Emerald (#014421), Gold (#C5A059)
 */
const LeadershipLab = () => {
  const diagnosticEngines = [
    {
      title: "STATE: OCEAN Behavioral Profile",
      subtitle: "Executive Psychology",
      desc: "Analyze the five broad domains of personality to understand leadership tendencies and team dynamics.",
      status: "Operational",
      href: "/ocean"
    },
    {
      title: "TRAIT: PANAS-X Affect Audit",
      subtitle: "Emotional Climate",
      desc: "Measure positive and negative affect to gauge emotional climate and resilience within leadership.",
      status: "Operational",
      href: "/panas"
    },
    {
      title: "Financial Intelligence",
      subtitle: "Fiscal Health",
      desc: "AI-driven fiscal health audit for 501(c)(3) organizations. Automated IRS 990 parsing and benchmarking.",
      status: "Coming Soon",
      href: "#"
    }
  ];

  const labLiteNotes = [
    {
      tag: "Intelligence Note 01",
      title: "The Boardroom Trap: Why 70% of Change Fails",
      desc: "Architecting human-centric authority to increase Substack opt-in rates via profile psychology.",
      meta: "Why 70% of Change Fails"
    },
    
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative bg-[#fdfbf5] py-12 md:py-24 px-4 md:px-8 overflow-hidden font-sans text-[#014421]">
          
          {/* Background Texture: Subtle Research Grid */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="researchGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#researchGrid)" />
            </svg>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            
            {/* Academic Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#014421]/10 pb-8 mb-16">
              <div className="mb-6 md:mb-0">
                <span className="text-[#C5A059] font-bold tracking-[0.4em] text-[10px] uppercase block mb-2">Crescere Strategies LLC</span>
                <h1 className="text-4xl md:text-6xl font-serif font-medium leading-none">
                  Intelli<span className="italic font-light opacity-60">gence</span>
                </h1>
              </div>
              <div className="flex flex-col md:items-end text-[10px] tracking-[0.15em] opacity-50 uppercase font-semibold text-right">
                <span>Research Division</span>
                <span>Ref: CS-INT-2026-Q1</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Main Content (Left 8) */}
              <div className="lg:col-span-8">
                <div className="max-w-3xl mb-16">
                  <h2 className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-6">Intelligence Brief</h2>
                  <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#014421]/90 mb-8 italic">
                    "Advancing organizational health through the quantification of operational efficiency and human capital performance."
                  </p>
                  <p className="text-sm leading-relaxed text-[#014421]/70">
                    The Intelligence division serves as the proprietary research arm of Crescere Strategies, focusing on the critical intersection of operations and people. Our diagnostic engines provide a rigorous, data-driven foundation for scaling high-performance teams.
                  </p>
                </div>

                {/* Diagnostic Modules */}
                <div className="mb-20">
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-[#014421]/10 pb-4">Diagnostic Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {diagnosticEngines.map((engine, i) => {
                      const isOperational = engine.status === 'Operational';
                      const CardContent = (
                        <div className={`
                          relative p-6 rounded-sm border transition-all duration-300 group
                          ${isOperational 
                            ? 'border-transparent hover:border-[#C5A059]/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
                            : 'border-transparent opacity-60 grayscale cursor-not-allowed'}
                        `}>
                          <span className="text-[#C5A059] text-[9px] font-bold tracking-widest uppercase block mb-3">{engine.subtitle}</span>
                          <h4 className={`text-lg font-serif font-bold mb-3 transition-colors leading-tight ${isOperational ? 'group-hover:text-[#C5A059]' : ''}`}>
                            {engine.title}
                          </h4>
                          <p className="text-xs leading-relaxed opacity-70 mb-6">{engine.desc}</p>
                          <div className={`flex items-center gap-2 py-1 px-2 w-fit rounded-sm ${isOperational ? 'bg-emerald-500/10' : 'bg-gray-100'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${isOperational ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`}></div>
                            <span className="text-[8px] uppercase tracking-widest font-bold opacity-80">{engine.status}</span>
                          </div>
                        </div>
                      );

                      return isOperational ? (
                        <Link key={i} href={engine.href} className="block">
                          {CardContent}
                        </Link>
                      ) : (
                        <div key={i}>{CardContent}</div>
                      );
                    })}
                  </div>
                </div>

                {/* Leader Lab Lite on LinkedIn */}
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Executive Notes (Intelligence Lite)</h3>
                    <div className="h-[1px] flex-1 bg-[#014421]/10 mx-6"></div>
                  </div>
                  
                  <div className="space-y-12">
                    {labLiteNotes.map((note, i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                        <div className="md:w-32 shrink-0">
                          <span className="text-[#C5A059] text-[10px] font-bold tracking-[0.2em] uppercase">{note.tag}</span>
                        </div>
                        <div className="flex-1 pb-8 border-b border-[#014421]/5">
                          <h5 className="text-xl font-serif font-bold mb-2 group-hover:text-[#C5A059] transition-colors">{note.title}</h5>
                          <p className="text-sm opacity-60 leading-relaxed mb-4">{note.desc}</p>
                          <div className="flex items-center gap-2 opacity-40 text-[9px] font-bold uppercase tracking-widest">
                            <span>{note.meta}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Sidebar (Right 4) */}
              <div className="lg:col-span-4 lg:sticky lg:top-12">
                <div className="bg-white border border-[#014421]/10 p-8 shadow-sm relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]"></div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-serif font-bold text-[#014421] mb-2">Access Portal</h3>
                    <p className="text-[11px] leading-relaxed opacity-60">
                      Register for proprietary access to the full intelligence sequence and operational frameworks.
                    </p>
                  </div>

                  <div className="mb-8 overflow-hidden rounded-sm border border-[#014421]/5 bg-gray-50 min-h-[320px]">
                    <iframe 
                      src="https://leaderlaboratory.substack.com/embed" 
                      className="w-full h-[320px] bg-white"
                      frameBorder="0" 
                      scrolling="no"
                      title="Substack"
                    ></iframe>
                  </div>

                  <div className="pt-8 border-t border-[#014421]/10">
                    <a 
                      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7413946210195202048" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-[#014421] text-[#fdfbf5] w-full py-4 rounded-sm font-bold text-[10px] tracking-[0.2em] hover:bg-[#002b15] transition-all shadow-md group"
                    >
                      <FaLinkedin size={16} />
                      SUBSCRIBE FOR EXECUTIVE BRIEFS AT LEADER LAB LITE ON LINKEDIN
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#014421]/10 text-center">
                    <p className="text-[8px] tracking-[0.2em] uppercase opacity-40 italic">
                      Non-disclosure protocols in effect
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LeadershipLab;
