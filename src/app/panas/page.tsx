"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { panasQuestions } from '../../lib/panasQuestions';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, CheckCircle, Lock, Printer, Mail, Loader2 } from 'lucide-react';

export default function PanasAssessment() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  
  // IDENTITY STATE
  const [email, setEmail] = useState('');
  const [showIdentityGate, setShowIdentityGate] = useState(false);
  
  // CONSULTATION BUTTON STATE
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const QUESTIONS_PER_PAGE = 6;
  const totalPages = Math.ceil(panasQuestions.length / QUESTIONS_PER_PAGE);

  useEffect(() => {
    const storedEmail = localStorage.getItem('crescere_user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleOptionChange = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScores = () => {
    const newScores: Record<string, number> = {
      "Positive Affect": 0, "Negative Affect": 0, "Fear": 0, "Hostility": 0, "Guilt": 0,
      "Sadness": 0, "Joviality": 0, "Self-Assurance": 0, "Attentiveness": 0, "Shyness": 0,
      "Fatigue": 0, "Serenity": 0, "Surprise": 0
    };
    panasQuestions.forEach((q) => {
      const value = answers[q.id] || 0; 
      q.scales.forEach(scale => { if (newScores[scale] !== undefined) newScores[scale] += value; });
    });
    return newScores;
  };

  const handlePreSubmit = () => {
    if (email) {
      handleSubmit();
    } else {
      setShowIdentityGate(true);
    }
  };

  const handleSubmit = async () => {
    if (!email) return;
    
    // 1. INSTANTLY SHOW RESULTS (Optimistic UI)
    setIsSubmitting(true);
    const finalScores = calculateScores();
    setScores(finalScores);
    localStorage.setItem('crescere_user_email', email);
    
    setShowIdentityGate(false);
    setShowResults(true);
    window.scrollTo(0, 0);

    // 2. Perform Save & Email in Background
    try {
      // Save to Database
      await addDoc(collection(db, "panas_results"), {
        email: email,
        scores: finalScores,
        answers: answers,
        completedAt: serverTimestamp(),
        appType: 'PANAS-X'
      });

      // Trigger "New Lead" Email Alert
      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'PANAS-X Assessment Completed'
        })
      });

    } catch (error) {
      console.error("Background save failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // NEW: Handle the Consultation Request Button
  const handleConsultationRequest = async () => {
    setRequestStatus('loading');
    try {
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'PANAS Consultation Requested' // Specific subject line
        })
      });
      setRequestStatus('success');
    } catch (error) {
      console.error("Request failed", error);
      setRequestStatus('idle'); // Let them try again if it fails
      alert("System busy. Please try again or email us directly.");
    }
  };

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = panasQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);
  const progress = ((currentPage + 1) / totalPages) * 100;

  // --- RESULTS VIEW ---
  if (showResults) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#014421]/10 text-center print:shadow-none print:border-0">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6 print:hidden">
              <CheckCircle className="text-[#014421]" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[#014421] mb-2">Assessment Complete</h2>
            <p className="text-[#014421]/70 mb-8">
              Emotional baseline established for <strong>{email}</strong>.
            </p>
            
            {/* Primary Scores */}
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              {["Positive Affect", "Negative Affect"].map((factor) => (
                <div key={factor} className="p-6 bg-[#014421]/5 rounded-xl border border-[#014421]/20 print:border-gray-300">
                  <h4 className="text-xl font-bold text-[#014421]">{factor}</h4>
                  <div className="text-4xl font-bold text-[#014421] mt-2">{scores[factor]}</div>
                  <p className="text-xs text-[#014421]/60 mt-1">General Baseline Score</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-[#014421] mb-4 text-left">Detailed Affect Profile</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {Object.entries(scores)
                .filter(([key]) => key !== "Positive Affect" && key !== "Negative Affect")
                .map(([factor, score]) => (
                <div key={factor} className="p-3 bg-[#fdfbf5] rounded-lg border border-[#014421]/10 print:bg-white print:border-gray-200">
                  <h4 className="text-sm font-bold text-[#014421]">{factor}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden print:border print:border-gray-300">
                      <div className="h-full bg-[#014421]" style={{ width: `${(score / 30) * 100}%` }}></div>
                    </div>
                    <span className="text-sm font-mono font-bold text-[#014421]">{score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION BAR: Print & Schedule Analysis */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12 print:hidden">
              <button 
                onClick={() => window.print()}
                className="px-8 py-3 bg-white text-[#014421] border-2 border-[#014421] font-bold rounded-full hover:bg-[#014421]/5 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                 <Printer size={20} /> Save as PDF
              </button>
              
              <button 
                onClick={handleConsultationRequest}
                disabled={requestStatus !== 'idle'}
                className={`px-8 py-3 font-bold rounded-full transition-all shadow-lg flex items-center justify-center gap-2
                  ${requestStatus === 'success' 
                    ? 'bg-green-700 text-white cursor-default' 
                    : 'bg-[#014421] text-white hover:bg-[#014421]/90'
                  }
                `}
              >
                {requestStatus === 'idle' && <><Mail size={20} /> Schedule Analysis</>}
                {requestStatus === 'loading' && <><Loader2 size={20} className="animate-spin" /> Requesting...</>}
                {requestStatus === 'success' && <><CheckCircle size={20} /> Request Sent</>}
              </button>
            </div>

            <div className="mt-8 print:hidden">
               <a href="/insights" className="text-sm text-[#014421]/50 hover:text-[#014421] font-bold">Return to Lab</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- IDENTITY GATE ---
  if (showIdentityGate) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-xl mx-auto text-center">
           <div className="bg-white p-10 rounded-2xl shadow-2xl border border-[#014421]/20">
             <div className="mb-6 inline-flex p-4 bg-[#014421]/5 rounded-full">
               <Lock className="text-[#014421]" size={32} />
             </div>
             <h2 className="text-2xl font-bold text-[#014421] mb-4">Final Step</h2>
             <p className="text-[#014421]/70 mb-8">
               Your PANAS-X profile is ready. Please verify your email to link this data to your executive file.
             </p>
             <input 
               type="email" 
               name="email"
               id="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full p-4 mb-6 border border-[#014421]/20 rounded-lg focus:outline-none focus:border-[#014421] text-[#014421]"
             />
             <button 
                onClick={handleSubmit}
                disabled={!email || isSubmitting}
                className="w-full py-4 bg-[#014421] text-white font-bold rounded-lg hover:bg-[#014421]/90 transition-all disabled:opacity-50"
             >
               {isSubmitting ? 'Generating Report...' : 'Unlock Results'}
             </button>
           </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- QUESTIONS ---
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-[#014421] mb-2"><span>PROGRESS</span><span>{Math.round(progress)}%</span></div>
          <div className="h-2 bg-[#014421]/10 rounded-full overflow-hidden"><div className="h-full bg-[#014421] transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div></div>
        </div>
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#014421] mb-2">PANAS-X Assessment</h1>
          <p className="text-[#014421]/60">Indicate to what extent you have felt this way <strong>during the past few weeks.</strong></p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {currentQuestions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-[#014421]/5">
              <p className="text-lg font-bold text-[#014421] mb-4 capitalize text-center">{q.text}</p>
              <div className="flex justify-between gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <label key={val} className="cursor-pointer group flex flex-col items-center w-full">
                    <input type="radio" name={`q-${q.id}`} value={val} checked={answers[q.id] === val} onChange={() => handleOptionChange(q.id, val)} className="hidden" />
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all text-sm font-bold ${answers[q.id] === val ? 'bg-[#014421] border-[#014421] text-white' : 'border-[#014421]/20 text-[#014421]/40 group-hover:border-[#014421]/50'}`}>{val}</div>
                  </label>
                ))}
              </div>
              <div className="flex justify-between mt-2 px-1"><span className="text-[9px] text-[#014421]/40 uppercase font-bold">Not at all</span><span className="text-[9px] text-[#014421]/40 uppercase font-bold">Extremely</span></div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-between">
          <button onClick={() => setCurrentPage(p => Math.max(0, p - 1))} disabled={currentPage === 0} className="px-6 py-3 font-bold text-[#014421] disabled:opacity-30 hover:bg-[#014421]/5 rounded-lg transition-colors">Back</button>
          {currentPage < totalPages - 1 ? (
            <button onClick={() => { window.scrollTo(0, 0); setCurrentPage(p => p + 1); }} disabled={currentQuestions.some(q => !answers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center">Next <ArrowRight className="ml-2" size={18} /></button>
          ) : (
            <button onClick={handlePreSubmit} disabled={currentQuestions.some(q => !answers[q.id])} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 disabled:opacity-50 transition-all flex items-center">Complete Assessment</button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
