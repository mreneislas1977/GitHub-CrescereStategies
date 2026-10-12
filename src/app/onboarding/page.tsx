"use client";
export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { oceanQuestions } from '../../lib/oceanQuestions';
import { panasQuestions } from '../../lib/panasQuestions';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, CheckCircle, Lock, Printer, Gauge, Mail, MessageSquare } from 'lucide-react';

export default function OnboardingPipeline() {
  // WIZARD STEP CONTROL: 1 = OCEAN, 2 = PANAS-X, 3 = Normalcy Check
  const [currentStep, setCurrentStep] = useState(1);
  const [startTime] = useState(Date.now());

  // QUESTION PAGINATION STATE
  const [oceanPage, setOceanPage] = useState(0);
  const [panasPage, setPanasPage] = useState(0);

  // ANSWERS & SCORES
  const [oceanAnswers, setOceanAnswers] = useState<Record<number, number>>({});
  const [panasAnswers, setPanasAnswers] = useState<Record<number, number>>({});
  const [normalcyScore, setNormalcyScore] = useState<number>(3);

  // SUBMISSION & RESULT STATES
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [oceanScores, setOceanScores] = useState<Record<string, number>>({});
  const [panasScores, setPanasScores] = useState<Record<string, number>>({});
  
  // IDENTITY & CONSULTATION GATE STATE
  const [email, setEmail] = useState('');
  const [wantsConsultation, setWantsConsultation] = useState<boolean>(true); // Default checked
  const [showIdentityGate, setShowIdentityGate] = useState(false);

  // CONSTANTS
  const OCEAN_PER_PAGE = 5;
  const PANAS_PER_PAGE = 6;
  const totalOceanPages = Math.ceil(oceanQuestions.length / OCEAN_PER_PAGE);
  const totalPanasPages = Math.ceil(panasQuestions.length / PANAS_PER_PAGE);

  useEffect(() => {
    const storedEmail = localStorage.getItem('crescere_user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // OCEAN CALCULATIONS
  const calculateOceanScores = () => {
    const newScores = {
      Extraversion: 0, Agreeableness: 0, Conscientiousness: 0,
      'Emotional Stability': 0, Intellect: 0,
    };
    oceanQuestions.forEach((q) => {
      const rawValue = oceanAnswers[q.id] || 3;
      const finalValue = q.keyed === 'plus' ? rawValue : (6 - rawValue);
      newScores[q.factor] += finalValue;
    });
    return newScores;
  };

  // PANAS CALCULATIONS
  const calculatePanasScores = () => {
    const newScores: Record<string, number> = {
      "Positive Affect": 0, "Negative Affect": 0, "Fear": 0, "Hostility": 0, "Guilt": 0,
      "Sadness": 0, "Joviality": 0, "Self-Assurance": 0, "Attentiveness": 0, "Shyness": 0,
      "Fatigue": 0, "Serenity": 0, "Surprise": 0
    };
    panasQuestions.forEach((q) => {
      const value = panasAnswers[q.id] || 0; 
      q.scales.forEach(scale => { if (newScores[scale] !== undefined) newScores[scale] += value; });
    });
    return newScores;
  };

  // PRE-SUBMIT CHECK
  const handlePreSubmit = () => {
    setShowIdentityGate(true);
    window.scrollTo(0, 0);
  };

  // FINAL COMBINED FIRESTORE SUBMISSION
  const handleSubmitAll = async () => {
    if (!email) return;

    const totalMinutes = (Date.now() - startTime) / (1000 * 60);

    setIsSubmitting(true);
    const finalOcean = calculateOceanScores();
    const finalPanas = calculatePanasScores();

    setOceanScores(finalOcean);
    setPanasScores(finalPanas);
    localStorage.setItem('crescere_user_email', email);

    setShowIdentityGate(false);
    setShowResults(true);
    window.scrollTo(0, 0);

    // Save combined record into 'executive_baselines' collection
    try {
      await addDoc(collection(db, "executive_baselines"), {
        email: email,
        wantsConsultation: wantsConsultation,
        sessionStart: new Date(startTime).toISOString(),
        completedAt: serverTimestamp(),
        elapsedMinutes: Math.round(totalMinutes),
        
        oceanScores: finalOcean,
        oceanAnswers: oceanAnswers,
        
        panasScores: finalPanas,
        panasAnswers: panasAnswers,
        
        normalcyConfidenceScore: normalcyScore,
        isBaselineVolatile: normalcyScore <= 2,
        appType: 'COMBINED_ASSESSMENT'
      });
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // RESULTS VIEW
  if (showResults) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#014421]/10 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-[#014421]" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[#014421] mb-2">Assessment Complete</h2>
            <p className="text-[#014421]/70 mb-4">
              Profile compiled for <strong>{email}</strong>.
            </p>

            {/* Consultation Indicator Banner */}
            <div className="mb-8 p-3 bg-[#014421]/5 rounded-lg border border-[#014421]/10 inline-flex items-center gap-2 text-xs font-bold text-[#014421]">
              <MessageSquare size={16} />
              <span>
                {wantsConsultation 
                  ? "Free Consultation Requested: A Crescere Strategies advisor will reach out to review your results." 
                  : "Private Baseline Saved: No consultation requested."}
              </span>
            </div>

            {/* Normalcy Check Badge */}
            <div className="mb-8 p-4 bg-[#fdfbf5] rounded-xl border border-[#014421]/15 text-left flex items-center justify-between">
              <div>
                <h4 className="font-bold text-[#014421] text-sm uppercase tracking-wider">Baseline Reality Check</h4>
                <p className="text-xs text-[#014421]/70 mt-1">
                  Self-Reported Normalcy: <strong>{normalcyScore} / 5</strong>
                </p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${normalcyScore <= 2 ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-[#014421]'}`}>
                {normalcyScore <= 2 ? 'Abnormal State Flagged' : 'Typical State Confirmed'}
              </span>
            </div>

            {/* OCEAN Summary */}
            <h3 className="text-xl font-bold text-[#014421] mb-4 text-left border-b pb-2">OCEAN Profile</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
              {Object.entries(oceanScores).map(([factor, score]) => (
                <div key={factor} className="p-4 bg-[#fdfbf5] rounded-lg border border-[#014421]/10">
                  <h4 className="font-bold text-[#014421] text-sm">{factor}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#014421]" style={{ width: `${(score / 50) * 100}%` }}></div>
                    </div>
                    <span className="font-mono font-bold text-[#014421] text-sm">{score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* PANAS-X Summary */}
            <h3 className="text-xl font-bold text-[#014421] mb-4 text-left border-b pb-2">PANAS-X Affect Profile</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left mb-8">
              {Object.entries(panasScores).map(([factor, score]) => (
                <div key={factor} className="p-3 bg-[#fdfbf5] rounded-lg border border-[#014421]/10">
                  <h4 className="text-xs font-bold text-[#014421]">{factor}</h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#014421]" style={{ width: `${(score / 30) * 100}%` }}></div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#014421]">{score}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => window.print()}
              className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 transition-all flex items-center justify-center gap-2 mx-auto"
            >
               <Printer size={20} /> Save Summary PDF
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // IDENTITY & CONSULTATION GATE
  if (showIdentityGate) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-xl mx-auto text-center">
           <div className="bg-white p-10 rounded-2xl shadow-2xl border border-[#014421]/20">
             <div className="mb-6 inline-flex p-4 bg-[#014421]/5 rounded-full">
               <Lock className="text-[#014421]" size={32} />
             </div>
             <h2 className="text-2xl font-bold text-[#014421] mb-2">Final Step: Unlock Your Results</h2>
             <p className="text-[#014421]/70 text-sm mb-6">
               Your baseline assessment data has been compiled. Please provide your email address to unlock and secure your results.
             </p>

             {/* EMAIL INPUT */}
             <div className="text-left mb-6">
               <label className="block text-xs font-bold text-[#014421] uppercase tracking-wider mb-2">
                 Email Address
               </label>
               <div className="relative">
                 <input 
                   type="email" 
                   placeholder="executive@company.com" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   className="w-full p-4 border border-[#014421]/20 rounded-xl focus:outline-none focus:border-[#014421] text-[#014421] pl-11" 
                 />
                 <Mail className="absolute left-4 top-4 text-[#014421]/40" size={20} />
               </div>
             </div>

             {/* FREE CONSULTATION CHECKBOX */}
             <div className="bg-[#fdfbf5] p-4 rounded-xl border border-[#014421]/15 text-left mb-8">
               <label className="flex items-start gap-3 cursor-pointer">
                 <input 
                   type="checkbox" 
                   checked={wantsConsultation} 
                   onChange={(e) => setWantsConsultation(e.target.checked)}
                   className="mt-1 h-5 w-5 accent-[#014421] rounded cursor-pointer"
                 />
                 <div>
                   <span className="font-bold text-sm text-[#014421] block">
                     Request a Free Consultation
                   </span>
                   <span className="text-xs text-[#014421]/70 leading-relaxed block mt-0.5">
                     Would you like a free consultation with a Crescere Strategies advisor to confidentially review and analyze your baseline results?
                   </span>
                 </div>
               </label>
             </div>

             <button 
               onClick={handleSubmitAll} 
               disabled={!email || isSubmitting} 
               className="w-full py-4 bg-[#014421] text-white font-bold rounded-xl hover:bg-[#014421]/90 transition-all disabled:opacity-50 shadow-lg"
             >
               {isSubmitting ? 'Securing Profile...' : 'Unlock Results'}
             </button>
           </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ASSESSMENT WIZARD
  const currentOceanQuestions = oceanQuestions.slice(oceanPage * OCEAN_PER_PAGE, (oceanPage + 1) * OCEAN_PER_PAGE);
  const currentPanasQuestions = panasQuestions.slice(panasPage * PANAS_PER_PAGE, (panasPage + 1) * PANAS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        
        {/* PROGRESS HEADER */}
        <div className="mb-8 border-b border-[#014421]/15 pb-4">
          <div className="flex justify-between text-xs font-bold text-[#014421] mb-2 tracking-wider">
            <span>ASSESSMENT INTAKE • STEP {currentStep} OF 3</span>
            <span>
              {currentStep === 1 
                ? `PART I: OCEAN (PAGE ${oceanPage + 1}/${totalOceanPages})` 
                : currentStep === 2 
                ? `PART II: PANAS-X (PAGE ${panasPage + 1}/${totalPanasPages})` 
                : 'PART III: REALITY CHECK'}
            </span>
          </div>
          <div className="h-2 bg-[#014421]/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#014421] transition-all duration-500 ease-out" 
              style={{ width: `${currentStep === 1 ? ((oceanPage + 1) / totalOceanPages) * 33 : currentStep === 2 ? 33 + ((panasPage + 1) / totalPanasPages) * 33 : 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: OCEAN ASSESSMENT */}
        {currentStep === 1 && (
          <div>
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold text-[#014421] mb-2">Part I: OCEAN Assessment</h1>
              <p className="text-[#014421]/60">Describe yourself as you generally are now, not as you wish to be.</p>
            </div>
            <div className="space-y-10">
              {currentOceanQuestions.map((q) => (
                <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-[#014421]/5">
                  <p className="text-lg font-medium text-[#014421] mb-6"><span className="opacity-40 mr-3">{q.id}.</span> {q.text}</p>
                  <div className="grid grid-cols-5 gap-2 text-center">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <label key={val} className="cursor-pointer group">
                        <input 
                          type="radio" 
                          name={`ocean-${q.id}`} 
                          value={val} 
                          checked={oceanAnswers[q.id] === val} 
                          onChange={() => setOceanAnswers(prev => ({ ...prev, [q.id]: val }))} 
                          className="hidden" 
                        />
                        <div className={`h-12 w-12 mx-auto rounded-full flex items-center justify-center border-2 transition-all ${oceanAnswers[q.id] === val ? 'bg-[#014421] border-[#014421] text-white' : 'border-[#014421]/20 text-[#014421]/40 group-hover:border-[#014421]/50'}`}>{val}</div>
                        <span className="text-[10px] mt-2 block font-medium text-[#014421]/60 uppercase tracking-wider">{val === 1 ? 'Inaccurate' : val === 5 ? 'Accurate' : ''}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between">
              <button onClick={() => setOceanPage(p => Math.max(0, p - 1))} disabled={oceanPage === 0} className="px-6 py-3 font-bold text-[#014421] disabled:opacity-30 hover:bg-[#014421]/5 rounded-lg transition-colors">Back</button>
              {oceanPage < totalOceanPages - 1 ? (
                <button onClick={() => { window.scrollTo(0, 0); setOceanPage(p => p + 1); }} disabled={currentOceanQuestions.some(q => !oceanAnswers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 transition-all flex items-center">Next Page <ArrowRight className="ml-2" size={18} /></button>
              ) : (
                <button onClick={() => { window.scrollTo(0, 0); setCurrentStep(2); }} disabled={currentOceanQuestions.some(q => !oceanAnswers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 transition-all flex items-center">Continue to Part II: PANAS-X <ArrowRight className="ml-2" size={18} /></button>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: PANAS-X ASSESSMENT */}
        {currentStep === 2 && (
          <div>
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold text-[#014421] mb-2">Part II: PANAS-X Assessment</h1>
              <p className="text-[#014421]/60">Indicate to what extent you have felt this way <strong>during the past few weeks.</strong></p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {currentPanasQuestions.map((q) => (
                <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-[#014421]/5">
                  <p className="text-lg font-bold text-[#014421] mb-4 capitalize text-center">{q.text}</p>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <label key={val} className="cursor-pointer group flex flex-col items-center w-full">
                        <input 
                          type="radio" 
                          name={`panas-${q.id}`} 
                          value={val} 
                          checked={panasAnswers[q.id] === val} 
                          onChange={() => setPanasAnswers(prev => ({ ...prev, [q.id]: val }))} 
                          className="hidden" 
                        />
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all text-sm font-bold ${panasAnswers[q.id] === val ? 'bg-[#014421] border-[#014421] text-white' : 'border-[#014421]/20 text-[#014421]/40 group-hover:border-[#014421]/50'}`}>{val}</div>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 px-1"><span className="text-[9px] text-[#014421]/40 uppercase font-bold">Not at all</span><span className="text-[9px] text-[#014421]/40 uppercase font-bold">Extremely</span></div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between">
              <button onClick={() => { if (panasPage === 0) setCurrentStep(1); else setPanasPage(p => p - 1); }} className="px-6 py-3 font-bold text-[#014421] hover:bg-[#014421]/5 rounded-lg transition-colors">Back</button>
              {panasPage < totalPanasPages - 1 ? (
                <button onClick={() => { window.scrollTo(0, 0); setPanasPage(p => p + 1); }} disabled={currentPanasQuestions.some(q => !panasAnswers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 transition-all flex items-center">Next Page <ArrowRight className="ml-2" size={18} /></button>
              ) : (
                <button onClick={() => { window.scrollTo(0, 0); setCurrentStep(3); }} disabled={currentPanasQuestions.some(q => !panasAnswers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 transition-all flex items-center">Continue to Step 3: Reality Check <ArrowRight className="ml-2" size={18} /></button>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: NORMALCY QUESTION */}
        {currentStep === 3 && (
          <div>
            <div className="mb-10 text-center">
              <div className="inline-flex p-4 bg-[#014421]/5 rounded-full mb-4">
                <Gauge className="text-[#014421]" size={36} />
              </div>
              <h1 className="text-3xl font-bold text-[#014421] mb-2">Part III: Normalcy Reality Check</h1>
              <p className="text-[#014421]/60">
                How accurately do your responses today reflect your typical, day-to-day operational state over the last 6 months?
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-[#014421]/20 mb-8">
              <label className="block text-center text-lg font-bold text-[#014421] mb-6">
                Selected Normalcy Score: <span className="font-mono text-2xl ml-2">{normalcyScore} / 5</span>
              </label>

              <input 
                type="range" 
                min="1" 
                max="5" 
                value={normalcyScore} 
                onChange={(e) => setNormalcyScore(parseInt(e.target.value))}
                className="w-full accent-[#014421] h-3 bg-gray-200 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-xs font-bold text-[#014421]/60 mt-4">
                <span>1 - Highly Abnormal (Crisis / Peak Stress)</span>
                <span>3 - Typical</span>
                <span>5 - Exact Baseline Norm</span>
              </div>
            </div>

            <div className="flex justify-between mt-12">
              <button onClick={() => setCurrentStep(2)} className="px-6 py-3 font-bold text-[#014421] hover:bg-[#014421]/5 rounded-lg transition-colors">Back</button>
              <button 
                onClick={handlePreSubmit} 
                className="px-8 py-4 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 shadow-lg transition-all flex items-center"
              >
                Complete & Unlock Results
              </button>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
