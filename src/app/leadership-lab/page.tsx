"use client";
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Activity, BrainCircuit, BookOpen } from 'lucide-react';

export default function LeadershipLab() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#014421]/5 border border-[#014421]/15 rounded-full text-xs font-bold text-[#014421] mb-4 uppercase tracking-wider">
            <BrainCircuit size={16} /> Diagnostic Intelligence Engines
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#014421] mb-4">
            The Leadership Lab
          </h1>
          <p className="text-[#014421]/70 text-lg leading-relaxed">
            Quantifying executive trait stability, affective strain, and organizational performance through empirical psychometric diagnostic frameworks.
          </p>
        </div>

        {/* DIAGNOSTIC CARD SECTION */}
        <div className="max-w-3xl mx-auto mb-20">
          {/* UNIFIED MASTER BASELINE CARD */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#014421] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#014421]/5 rounded-full group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#014421] text-white rounded-xl"><Activity size={28} /></div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full uppercase tracking-wider">Core Master Engine</span>
              </div>
              <h2 className="text-2xl font-bold text-[#014421] mb-3">Executive Baseline Intake Pipeline</h2>
              <p className="text-[#014421]/70 text-sm leading-relaxed mb-6">Combines 50-item OCEAN personality hardware mapping with 60-item PANAS-X affective strain analysis and Part III Normalcy Check into a single 3-part intake wizard.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part I: 50-Item IPIP-NEO (OCEAN Trait Baseline)</span></div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part II: 60-Item PANAS-X Affect Audit</span></div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part III: Normalcy & Operational Reality Check</span></div>
              </div>
            </div>
            <Link href="/onboarding" className="w-full py-4 bg-[#014421] text-white font-bold rounded-xl hover:bg-[#014421]/90 transition-all flex items-center justify-center gap-2 shadow-md">
              <span>Launch Unified Master Assessment</span> <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* EXECUTIVE NOTES (INTELLIGENCE LITE) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-[#014421]/15 pb-4">
            <BookOpen className="text-[#014421]" size={24} />
            <h2 className="text-2xl font-bold text-[#014421] uppercase tracking-wider">
              Executive Notes (Intelligence Lite)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#014421]/10 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2 block">
                Intelligence Note 01
              </span>
              <h3 className="text-xl font-bold text-[#014421] mb-3">
                The Boardroom Trap: Why 70% of Change Fails
              </h3>
              <p className="text-[#014421]/70 text-sm leading-relaxed mb-6">
                Implementing new initiatives requires attending to human dynamics. A look at the psychological friction that derails strategic pivots.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#014421] hover:text-[#014421]/70 transition-colors">
                Read Executive Note <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* SUBSTACK NEWSLETTER EMBED */}
        <div className="max-w-3xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-[#014421]/10 text-center">
           <h3 className="text-xs font-bold text-[#014421]/60 uppercase tracking-widest mb-4">
             Subscribe for Executive Briefs
           </h3>
           <iframe 
             src="https://mreneislas.substack.com/embed" 
             width="100%" 
             height="320" 
             style={{ background: "transparent", border: "none" }} 
             frameBorder="0" 
             scrolling="no"
           ></iframe>
           <p className="text-[10px] text-[#014421]/40 uppercase tracking-widest mt-4">
             Non-Disclosure Protocols In Effect
           </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
      <Footer />
    </div>
  );
}
