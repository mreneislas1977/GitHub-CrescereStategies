"use client";
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import { 
  ArrowRight, 
  Activity, 
  BrainCircuit, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export default function LeadershipLab() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfbf5] text-[#014421] font-sans selection:bg-[#C5A059]/30">
      <Header />

      <main className="flex-1 pt-28 pb-24 px-6 max-w-6xl mx-auto w-full">
        
        {/* TOP CLASSIFICATION BANNER */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#014421]/15 pb-3 mb-10 text-[11px] font-bold tracking-widest text-[#014421]/70 uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Clinical Diagnostic Suite v3.4</span>
            <span className="hidden sm:inline text-[#014421]/30">|</span>
            <span className="hidden sm:inline">REF: CS-PSYCH-2026</span>
          </div>
          <div className="text-[#C5A059] font-bold tracking-widest">
            Restricted Distribution • Executive Baseline
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014421]/5 border border-[#014421]/15 rounded-sm text-[11px] font-bold uppercase tracking-widest text-[#014421] mb-6">
            <BrainCircuit size={14} className="text-[#C5A059]" /> Empirical Psychometric Hardware & Strain Analysis
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#014421] mb-6 leading-tight">
            The Leadership Lab
          </h1>
          
          <p className="text-base sm:text-lg text-[#014421]/80 max-w-2xl mx-auto leading-relaxed">
            Quantifying executive trait stability, operational affect under pressure, and decision volatility through validated psychometric diagnostic engines.
          </p>
        </div>

        {/* MAIN DIAGNOSTIC ENGINE SPECIFICATION */}
        <div className="mb-20 bg-white border border-[#014421]/20 rounded-sm shadow-xl overflow-hidden relative">
          
          {/* TOP CARD BAR */}
          <div className="bg-[#014421] text-[#fdfbf5] px-6 py-3 border-b border-[#C5A059]/30 flex justify-between items-center text-xs uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-[#C5A059]" />
              <span>ENGINE ID: MASTER-INTAKE-01</span>
            </div>
            <span className="text-[#C5A059] bg-[#014421] border border-[#C5A059]/40 px-2.5 py-0.5 rounded-sm text-[10px] tracking-widest">
              Core Clinical Model
            </span>
          </div>

          <div className="p-8 sm:p-10 grid lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: ENGINE SPECIFICATIONS */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Primary Instrument
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#014421]">
                  Executive Baseline Intake Pipeline
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-[#014421]/80">
                A unified 3-part diagnostic wizard that maps persistent personality hardware against short-term affective strain to detect behavioral risk vectors before operational friction occurs.
              </p>

              {/* STATS / METRICS GRID */}
              <div className="grid grid-cols-3 gap-4 pt-3 pb-3 border-y border-[#014421]/10 uppercase text-center sm:text-left">
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#014421]/60">Total Items</div>
                  <div className="text-base font-bold text-[#014421]">110 Items</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#014421]/60">Est. Duration</div>
                  <div className="text-base font-bold text-[#014421]">12–15 Min</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-[#014421]/60">Reliability</div>
                  <div className="text-base font-bold text-[#C5A059]">α = 0.89</div>
                </div>
              </div>

              {/* INCLUDED MODULES LIST */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#014421]" />
                  <span><strong>Part I: 50-Item IPIP-NEO</strong> — Big Five Personality Hardware Mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#014421]" />
                  <span><strong>Part II: 60-Item PANAS-X</strong> — Affective Strain & Operational State Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#014421]" />
                  <span><strong>Part III: Normalcy Check</strong> — Self-Reported Operational Reality Calibration</span>
                </div>
              </div>

              {/* DUAL ACTION BUTTONS */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link 
                  href="/onboarding" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#014421] text-[#fdfbf5] text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[#C5A059] hover:text-[#014421] transition-all shadow-md text-center"
                >
                  <span>Launch Master Diagnostic</span>
                  <ArrowRight size={16} />
                </Link>

                <Link 
                  href="/leader-lab/methodology" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#014421]/20 text-[#014421] text-xs uppercase tracking-widest font-bold rounded-sm hover:border-[#C5A059] hover:text-[#C5A059] hover:bg-white/60 transition-all text-center"
                >
                  <span>Explore Methodology</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* RIGHT: SCHEMATIC RADAR MOCKUP */}
            <div className="lg:col-span-5 bg-[#fdfbf5] p-6 border border-[#014421]/15 rounded-sm relative">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#014421]/60 mb-4 pb-2 border-b border-[#014421]/10">
                <span>SCHEMATIC OVERLAY</span>
                <span>NORMATIVE Z-SCORES</span>
              </div>

              <div className="relative w-full h-48 flex items-center justify-center my-2">
                <svg viewBox="0 0 200 200" className="w-full h-full max-h-48">
                  <polygon points="100,20 176,64 147,156 53,156 24,64" fill="none" stroke="#014421" strokeOpacity="0.15" strokeWidth="1" />
                  <polygon points="100,45 152,75 132,137 68,137 48,75" fill="none" stroke="#014421" strokeOpacity="0.2" strokeWidth="1" />
                  <polygon points="100,70 128,86 117,118 83,118 72,86" fill="none" stroke="#014421" strokeOpacity="0.25" strokeWidth="1" />
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#014421" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <line x1="100" y1="100" x2="176" y2="64" stroke="#014421" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <line x1="100" y1="100" x2="147" y2="156" stroke="#014421" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <line x1="100" y1="100" x2="53" y2="156" stroke="#014421" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <line x1="100" y1="100" x2="24" y2="64" stroke="#014421" strokeOpacity="0.2" strokeDasharray="2 2" />
                  <polygon points="100,32 160,70 125,142 62,130 38,72" fill="#C5A059" fillOpacity="0.25" stroke="#C5A059" strokeWidth="2" />
                  <circle cx="100" cy="32" r="3" fill="#014421" />
                  <circle cx="160" cy="70" r="3" fill="#014421" />
                  <circle cx="125" cy="142" r="3" fill="#014421" />
                  <circle cx="62" cy="130" r="3" fill="#014421" />
                  <circle cx="38" cy="72" r="3" fill="#014421" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wider text-[#014421]/80 mt-2 pt-2 border-t border-[#014421]/10">
                <div className="flex justify-between"><span>EXTRAVERSION:</span> <span className="font-bold">HIGH</span></div>
                <div className="flex justify-between"><span>STABILITY:</span> <span className="font-bold">MODERATE</span></div>
                <div className="flex justify-between"><span>AFFECT STRAIN:</span> <span className="font-bold text-amber-700">ELEVATED</span></div>
                <div className="flex justify-between"><span>CONFIDENCE:</span> <span className="font-bold text-emerald-800">98.4%</span></div>
              </div>
            </div>

          </div>
        </div>

        {/* CLINICAL PUBLICATIONS & EXECUTIVE WRITINGS */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-[#014421]/15 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[#014421]" size={22} />
              <h2 className="text-2xl font-bold font-serif text-[#014421]">
                Executive Monographs & Intelligence Notes
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#014421]/60 hidden sm:inline">
              Peer-Reviewed & Applied
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* MONOGRAPH CARD 1 */}
            <article className="bg-white p-8 border border-[#014421]/15 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-3">
                  <span>MONOGRAPH 01</span>
                  <span>OCT 2026</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#014421] mb-3 leading-snug">
                  The Boardroom Trap: Why 70% of Strategic Pivots Fail Under Strain
                </h3>
                <p className="text-xs text-[#014421]/70 leading-relaxed mb-6">
                  An empirical analysis of how unmapped emotional volatility in C-suite leadership creates cascading execution failure during high-stakes organizational restructuring.
                </p>
              </div>
              <div className="pt-4 border-t border-[#014421]/10 flex justify-between items-center text-xs font-bold tracking-wider uppercase">
                <span className="text-[#014421]/60">READ TIME: 8 MIN</span>
                <Link href="#" className="text-[#014421] hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <span>READ PAPER</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </article>

            {/* MONOGRAPH CARD 2 */}
            <article className="bg-white p-8 border border-[#014421]/15 rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-3">
                  <span>MONOGRAPH 02</span>
                  <span>FORTHCOMING</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#014421] mb-3 leading-snug">
                  Quantifying Affective Strain: Applying PANAS-X to Executive Volatility
                </h3>
                <p className="text-xs text-[#014421]/70 leading-relaxed mb-6">
                  Methodological frameworks for isolating transient affective stress from enduring Big Five personality traits in board-level decision-makers.
                </p>
              </div>
              <div className="pt-4 border-t border-[#014421]/10 flex justify-between items-center text-xs font-bold tracking-wider uppercase">
                <span className="text-[#014421]/60">IN PEER REVIEW</span>
                <span className="text-[#014421]/40">RELEASE SOON</span>
              </div>
            </article>

          </div>
        </div>

        {/* SUBSTACK DISPATCH TERMINAL */}
        <div className="bg-white p-8 border border-[#014421]/20 rounded-sm shadow-md text-center max-w-3xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
            Executive Intelligence Briefings
          </div>
          <h3 className="text-2xl font-bold font-serif text-[#014421] mb-3">
            Subscribe to Private Intelligence Dispatches
          </h3>
          <p className="text-xs text-[#014421]/70 mb-6 max-w-md mx-auto">
            Receive confidential psychometric research updates, C-suite case studies, and executive risk analysis directly to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <iframe 
              src="https://mreneislas.substack.com/embed" 
              width="100%" 
              height="280" 
              style={{ background: "transparent", border: "none" }} 
              frameBorder="0" 
              scrolling="no"
            />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-widest text-[#014421]/40 mt-4">
            CONFIDENTIAL PROTOCOLS APPLY • NO SPAM
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
