"use client";
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Activity, BarChart3, BrainCircuit } from 'lucide-react';

export default function LeadershipLab() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* UNIFIED MASTER BASELINE CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#014421] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#014421]/5 rounded-full group-hover:scale-125 transition-transform duration-500" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#014421] text-white rounded-xl"><Activity size={28} /></div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full uppercase tracking-wider">Core Master Engine</span>
              </div>
              <h2 className="text-2xl font-bold text-[#014421] mb-3">Executive Baseline Intake Pipeline</h2>
              <p className="text-[#014421]/70 text-sm leading-relaxed mb-6">Combines 50-item OCEAN personality hardware mapping with 60-item PANAS-X affective strain analysis and Part III Normalcy Check into a single 3-part intake wizard.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part I: 50-Item IPIP-NEO (OCEAN Trait Baseline)</span></div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part II: 60-Item PANAS-X Affect Audit</span></div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#014421]"><ShieldCheck size={16} className="text-green-700" /> <span>Part III: Normalcy & Operational Reality Check</span></div>
              </div>
            </div>
            <Link href="/onboarding" className="w-full py-4 bg-[#014421] text-white font-bold rounded-xl hover:bg-[#014421]/90 transition-all flex items-center justify-center gap-2 shadow-md">
              <span>Launch Unified Master Assessment</span> <ArrowRight size={18} />
            </Link>
          </div>

          {/* FINANCIAL AUDIT CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-[#014421]/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#014421]/10 text-[#014421] rounded-xl"><BarChart3 size={28} /></div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-full uppercase tracking-wider">Organizational Tool</span>
              </div>
              <h2 className="text-2xl font-bold text-[#014421] mb-3">Financial & Strategy Audit Engine</h2>
              <p className="text-[#014421]/70 text-sm leading-relaxed mb-6">Position-aware 990 extraction and institutional financial sustainability audit designed for non-profit executives and early-stage startup board leaders.</p>
            </div>
            <Link href="/financial" className="w-full py-4 bg-white text-[#014421] border-2 border-[#014421] font-bold rounded-xl hover:bg-[#014421]/5 transition-all flex items-center justify-center gap-2">
              <span>Access Financial Audit Engine</span> <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
