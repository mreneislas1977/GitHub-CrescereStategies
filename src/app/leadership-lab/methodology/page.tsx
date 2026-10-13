"use client";
import Header from '../../Header';
import Footer from '../../Footer';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Activity, Sliders, CheckCircle2 } from 'lucide-react';

export default function DiagnosticMethodology() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfbf5] text-[#014421] font-sans selection:bg-[#C5A059]/30">
      <Header />

      <main className="flex-1 pt-28 pb-24 px-6 max-w-5xl mx-auto w-full">
        
        {/* BREADCRUMB & CLASSIFICATION */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#014421]/15 pb-4 mb-8 text-[11px] font-bold tracking-widest uppercase">
          <Link 
            href="/leader-lab" 
            className="inline-flex items-center gap-2 text-[#014421]/70 hover:text-[#014421] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Leadership Lab</span>
          </Link>
          <span className="text-[#C5A059]">Technical Whitepaper • Ref: CS-SPEC-2026</span>
        </div>

        {/* HERO / HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014421]/5 border border-[#014421]/15 rounded-sm text-[11px] font-bold uppercase tracking-widest text-[#014421] mb-4">
            <Sliders size={14} className="text-[#C5A059]" /> Technical Architecture Specification
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#014421] mb-4">
            Diagnostic Engine Methodology
          </h1>
          <p className="text-sm sm:text-base text-[#014421]/80 max-w-3xl leading-relaxed">
            The mathematical, psychometric, and clinical frameworks governing the 3-part Executive Baseline Intake Pipeline (MASTER-INTAKE-01).
          </p>
        </div>

        {/* DETAILED SPECIFICATION BLOCKS */}
        <div className="space-y-8 mb-16">
          
          {/* PART 1 */}
          <div className="bg-white border border-[#014421]/15 rounded-sm p-8 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Module 01 • Personality Baseline
                </span>
                <h2 className="text-xl font-bold font-serif text-[#014421]">
                  50-Item IPIP-NEO Personality Framework
                </h2>
              </div>
              <span className="text-xs font-bold uppercase px-2.5 py-1 bg-[#014421]/5 text-[#014421] rounded-sm">
                50 Items
              </span>
            </div>
            <p className="text-sm text-[#014421]/80 leading-relaxed mb-6">
              Measures enduring baseline trait architecture across Extraversion, Agreeableness, Conscientiousness, Emotional Stability, and Intellect. Trait hardware remains relatively constant over extended executive horizons, establishing the structural anchor for all downstream analysis.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Primary Focus</span>
                <p className="text-[#014421]/70">Baseline behavioral tendencies under routine operational conditions.</p>
              </div>
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Output Structure</span>
                <p className="text-[#014421]/70">Factor raw scores standardized against executive normative percentiles.</p>
              </div>
            </div>
          </div>

          {/* PART 2 */}
          <div className="bg-white border border-[#014421]/15 rounded-sm p-8 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Module 02 • Transient Strain
                </span>
                <h2 className="text-xl font-bold font-serif text-[#014421]">
                  60-Item PANAS-X Affective State Audit
                </h2>
              </div>
              <span className="text-xs font-bold uppercase px-2.5 py-1 bg-[#014421]/5 text-[#014421] rounded-sm">
                60 Items
              </span>
            </div>
            <p className="text-sm text-[#014421]/80 leading-relaxed mb-6">
              Audits transient emotional states and operational strain experienced over the preceding weeks. Tracks Positive Affect, Negative Affect, Fear, Hostility, Joviality, and Attentiveness to differentiate permanent personality traits from acute cognitive fatigue.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Primary Focus</span>
                <p className="text-[#014421]/70">Transient stress response, situational volatility, and cognitive burnout.</p>
              </div>
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Output Structure</span>
                <p className="text-[#014421]/70">13 Subscale Affect Indices with situational volatility alert flags.</p>
              </div>
            </div>
          </div>

          {/* PART 3 */}
          <div className="bg-white border border-[#014421]/15 rounded-sm p-8 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Module 03 • Grounding Calibration
                </span>
                <h2 className="text-xl font-bold font-serif text-[#014421]">
                  Self-Reported Operational Reality Check
                </h2>
              </div>
              <span className="text-xs font-bold uppercase px-2.5 py-1 bg-[#014421]/5 text-[#014421] rounded-sm">
                Calibration Index
              </span>
            </div>
            <p className="text-sm text-[#014421]/80 leading-relaxed mb-6">
              Evaluates whether the current psychometric intake reflects typical executive operations or transient crisis conditions, preventing misclassification during acute board friction, market crashes, or major organizational pivots.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Primary Focus</span>
                <p className="text-[#014421]/70">Intake bias detection, operational context grounding, and validity verification.</p>
              </div>
              <div className="p-4 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm">
                <span className="font-bold uppercase tracking-wider block text-[#014421] mb-1">Output Structure</span>
                <p className="text-[#014421]/70">5-Point Normalcy Index and confidence interval coefficient.</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION CARD */}
        <div className="bg-[#014421] text-[#fdfbf5] p-8 sm:p-10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
              Ready to Begin
            </span>
            <h3 className="text-2xl font-serif font-bold">
              Initiate the Executive Baseline Pipeline
            </h3>
            <p className="text-xs text-[#fdfbf5]/75 mt-1 max-w-lg">
              Takes approximately 12–15 minutes. Results are encrypted under private clinical protocol.
            </p>
          </div>
          <Link 
            href="/onboarding" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A059] text-[#014421] text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#fdfbf5] transition-all whitespace-nowrap"
          >
            <span>Launch Diagnostic</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
