"use client";
import Header from '../../Header';
import Footer from '../../Footer';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Sliders, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Scale 
} from 'lucide-react';

export default function DiagnosticMethodology() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfbf5] text-[#014421] font-sans selection:bg-[#C5A059]/30">
      <Header />

      <main className="flex-1 pt-28 pb-24 px-6 max-w-5xl mx-auto w-full">
        
        {/* BREADCRUMB & IP CLASSIFICATION */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#014421]/15 pb-4 mb-8 text-[11px] font-bold tracking-widest uppercase gap-2">
          <Link 
            href="/leadership-lab" 
            className="inline-flex items-center gap-2 text-[#014421]/70 hover:text-[#014421] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Leadership Lab</span>
          </Link>
          <div className="flex items-center gap-2 text-[#C5A059]">
            <ShieldCheck size={14} />
            <span>Crescere Way™ Protected Architecture • USPTO Prov. Pat. #64/084.244</span>
          </div>
        </div>

        {/* HERO / SPECIFICATION TITLE */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014421]/5 border border-[#014421]/15 rounded-sm text-[11px] font-bold uppercase tracking-widest text-[#014421] mb-4">
            <Sliders size={14} className="text-[#C5A059]" /> Empirical Psychometric Specification
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#014421] mb-4 leading-tight">
            Diagnostic Engine Methodology
          </h1>
          <p className="text-sm sm:text-base text-[#014421]/80 max-w-3xl leading-relaxed">
            The mathematical, psychometric, and behavioral frameworks governing the Executive Baseline Intake Pipeline (MASTER-INTAKE-01). By synthesizing structural personality baselines with real-time affective tracking, the engine isolates enduring leadership traits from transient operational strain.
          </p>
        </div>

        {/* SECTION 1: HARDWARE VS. SOFTWARE THESIS */}
        <div className="mb-16 bg-white border border-[#014421]/15 rounded-sm p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#014421]/10">
            <Layers className="text-[#C5A059]" size={20} />
            <h2 className="text-xl font-bold font-serif text-[#014421]">
              The Core Architecture: Hardware vs. Software Synthesis
            </h2>
          </div>

          <p className="text-sm text-[#014421]/80 leading-relaxed mb-8">
            Traditional executive assessments treat personality as static or rely purely on transient self-evaluation. The Crescere Way™ decouples psychological architecture into two distinct computational layers: enduring cognitive hardware and dynamic operational software.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#fdfbf5] border border-[#014421]/15 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Layer 01 • Structural Baseline
                </span>
                <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                  Psychological &quot;Hardware&quot; (Big Five / OCEAN)
                </h3>
                <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                  Rooted in decades of factor-analytic research by Paul Costa and Robert McCrae. Measures immutable baseline trait tendencies across Extraversion, Agreeableness, Conscientiousness, Emotional Stability, and Intellect.
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#014421]/60 pt-3 border-t border-[#014421]/10">
                Horizon: Multi-Year Stable Operating Posture
              </div>
            </div>

            <div className="p-6 bg-[#fdfbf5] border border-[#014421]/15 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Layer 02 • Real-Time State Dynamics
                </span>
                <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                  Psychological &quot;Software&quot; (PANAS-X)
                </h3>
                <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                  Grounded in David Watson and Lee Anna Clark&apos;s (1994) expanded affect schedule. Audits acute situational friction, cognitive fatigue, threat detection, and subjective burden under current board-level conditions.
                </p>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#014421]/60 pt-3 border-t border-[#014421]/10">
                Horizon: Acute Operational & Stress Horizon
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ARTHUR BROOKS AFFECT MATRIX */}
        <div className="mb-16">
          <div className="flex items-center justify-between border-b border-[#014421]/15 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <Compass className="text-[#014421]" size={22} />
              <h2 className="text-2xl font-bold font-serif text-[#014421]">
                The Arthur Brooks Affect Matrix
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#014421]/60 hidden sm:inline">
              Baseline Norms: PA = 35.0 | NA = 18.0
            </span>
          </div>

          <p className="text-sm text-[#014421]/80 leading-relaxed mb-6">
            By plotting raw Positive Affect (PA) and Negative Affect (NA) scores against calibrated population medians, the diagnostic assigns executives to one of four validated operational archetypes:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* ARCHETYPE 1 */}
            <div className="bg-white p-6 border border-[#014421]/15 rounded-sm shadow-sm">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                <span>High PA / Low NA</span>
                <span>Quadrant I</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                The Cheerleader
              </h3>
              <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                Optimistic, highly encouraging, and intrinsically driven. Catalyzes exceptional team morale and rapid execution momentum.
              </p>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm text-[11px]">
                <strong className="text-[#014421]">Operational Blindspot:</strong> May overlook subtle risk vectors or downplay structural flaws in high-stress operational climates.
              </div>
            </div>

            {/* ARCHETYPE 2 */}
            <div className="bg-white p-6 border border-[#014421]/15 rounded-sm shadow-sm">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                <span>High PA / High NA</span>
                <span>Quadrant II</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                The Mad Scientist
              </h3>
              <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                High-drive, intense, and intellectually restless. Couples visionary strategic innovation with relentless environmental risk-scanning.
              </p>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm text-[11px]">
                <strong className="text-[#014421]">Operational Blindspot:</strong> Generates significant team turbulence and cognitive exhaustion under unmanaged friction.
              </div>
            </div>

            {/* ARCHETYPE 3 */}
            <div className="bg-white p-6 border border-[#014421]/15 rounded-sm shadow-sm">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                <span>Low PA / Low NA</span>
                <span>Quadrant III</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                The Judge
              </h3>
              <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                Cool-headed, highly objective, and emotionally detached. Delivers dispassionate analytical appraisal and steady procedural execution.
              </p>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm text-[11px]">
                <strong className="text-[#014421]">Operational Blindspot:</strong> Can struggle to project inspiring vision or motivate teams during ambiguous turnaround campaigns.
              </div>
            </div>

            {/* ARCHETYPE 4 */}
            <div className="bg-white p-6 border border-[#014421]/15 rounded-sm shadow-sm">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                <span>Low PA / High NA</span>
                <span>Quadrant IV</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-[#014421] mb-2">
                The Poet
              </h3>
              <p className="text-xs text-[#014421]/75 leading-relaxed mb-4">
                Reflective, hyper-vigilant, and deeply attuned to organizational truth. First to diagnose systemic misalignment, cultural decay, and hidden liabilities.
              </p>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm text-[11px]">
                <strong className="text-[#014421]">Operational Blindspot:</strong> Vulnerable to internalized guilt, acute fatigue, and quiet withdrawal under sustained disruption.
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: COMPUTATIONAL STANDARDS */}
        <div className="mb-16 bg-white border border-[#014421]/15 rounded-sm p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#014421]/10">
            <Activity className="text-[#C5A059]" size={20} />
            <h2 className="text-xl font-bold font-serif text-[#014421]">
              Computational Standards & T-Score Conversion
            </h2>
          </div>

          <p className="text-sm text-[#014421]/80 leading-relaxed mb-6">
            To eliminate raw self-reporting bias, individual subscale scores are standardized into normalized T-scores calibrated against Watson &amp; Clark&apos;s normative adult executive distributions (Normative Mean = 50.0, Standard Deviation = 10.0).
          </p>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="p-6 bg-[#014421] text-[#fdfbf5] rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                Mathematical Standardization
              </span>
              <div className="text-sm sm:text-base font-mono bg-[#022c16] p-4 rounded-sm border border-[#C5A059]/30 mb-3 text-center">
                T = 50 + 10 × [ (Raw - Mean) / SD ]
              </div>
              <p className="text-[11px] text-[#fdfbf5]/75 leading-relaxed">
                Raw subscale scores are converted into standardized linear deviations, pinning each executive against empirical percentiles.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#014421] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#014421]">Outlier High Flag (T ≥ 60 / +1.0 SD):</strong> Indicates severe situational concentration or acute behavioral friction requiring intervention.
                </div>
              </div>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#014421] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#014421]">Standard Operational Range (40 to 60):</strong> Denotes balanced cognitive equilibrium under routine board conditions.
                </div>
              </div>
              <div className="p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded-sm flex items-start gap-3">
                <CheckCircle2 size={16} className="text-[#014421] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-[#014421]">Outlier Low Flag (T ≤ 40 / -1.0 SD):</strong> Flags suppressed affect, situational disengagement, or operational blindness.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: GOVERNANCE & NON-CLINICAL DISCLAIMER */}
        <div className="mb-16 bg-[#fdfbf5] border border-[#014421]/20 rounded-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#014421]/15">
            <Scale className="text-[#014421]" size={20} />
            <h3 className="text-base font-bold font-serif text-[#014421] uppercase tracking-wider">
              Institutional Governance & Advisory Scope
            </h3>
          </div>
          <p className="text-xs text-[#014421]/75 leading-relaxed mb-3">
            The psychometric frameworks, behavioral analytics, and affective state measurements utilized by Crescere Strategies LLC (including the IPIP-NEO Big Five and PANAS-X evaluations) are applied strictly for executive risk management, organizational restructuring, and strategic leadership development.
          </p>
          <p className="text-xs text-[#014421]/75 leading-relaxed">
            Crescere Strategies LLC provides strategic management consulting services only and does not provide formal psychiatric diagnoses, medical mental health treatment, or legal/tax counsel. The Executive Behavioral &amp; Affective Audit is a strategic governance asset designed to model executive strain and structural stability within organizational systems.
          </p>
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
