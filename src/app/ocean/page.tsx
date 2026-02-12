"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { oceanQuestions } from '../../lib/oceanQuestions';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, CheckCircle, Lock, Printer, Mail, Loader2 } from 'lucide-react';

export default function OceanAssessment() {
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

  const QUESTIONS_PER_PAGE = 5;
  const totalPages = Math.ceil(oceanQuestions.length / QUESTIONS_PER_PAGE);

  useEffect(() => {
    const storedEmail = localStorage.getItem('crescere_user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleOptionChange = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScores = () => {
    const newScores = {
      Extraversion: 0, Agreeableness: 0, Conscientiousness: 0,
      'Emotional Stability': 0, Intellect: 0,
    };
    oceanQuestions.forEach((q) => {
      const rawValue = answers[q.id] || 3;
      const finalValue = q.keyed === 'plus' ? rawValue : (6 - rawValue);
      newScores[q.factor] += finalValue;
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
    
    // 1. INSTANTLY SHOW RESULTS
    setIsSubmitting(true);
    const finalScores = calculateScores();
    setScores(finalScores);
    localStorage.setItem('crescere_user_email', email);

    setShowIdentityGate(false);
    setShowResults(true);
    window.scrollTo(0, 0);

    // 2. Background Save & Email
    try {
      await addDoc(collection(db, "ocean_results"), {
        email: email, 
        scores: finalScores,
        answers: answers,
        completedAt: serverTimestamp(),
        appType: 'OCEAN'
      });

      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'OCEAN Assessment Completed'
        })
      });
    } catch (error) {
      console.error("Background save failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // One-Click Request Function
  const handleConsultationRequest = async () => {
    setRequestStatus('loading');
    try {
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'OCEAN Consultation Requested'
        })
      });
      setRequestStatus('success');
    } catch (error) {
      console.error("Request failed", error);
      setRequestStatus('idle');
      alert("System busy. Please try again later.");
    }
  };

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = oceanQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);
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
            <h2 className="text-3xl font-bold text-[#014421] mb-4">Assessment Complete</h2>
            <p className="text-[#014421]/70 mb-8">
              Executive profile generated for <strong>{email}</strong>. 
              <br/>Your raw scoring summary is below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {Object.entries(scores).map(([factor, score]) => (
                <div key={factor} className="p-4 bg-[#fdfbf5] rounded-lg border border-[#014421]/10 print:bg-white print:border-gray-200">
                  <h4 className="font-bold text-[#014421]">{factor}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden print:border print:border-gray-300">
                      <div className="h-full bg-[#014421]" style={{ width: `${(score / 50) * 100}%` }}></div>
                    </div>
                    <span className="font-mono font-bold text-[#014421]">{score}</span>
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
               Your assessment is scored and ready. Please verify your email to generate the report.
             </p>
             <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 mb-6 border border-[#014421]/20 rounded-lg focus:outline-none focus:border-[#014421] text-[#014421]" />
             <button onClick={handleSubmit} disabled={!email || isSubmitting} className="w-full py-4 bg-[#014421] text-white font-bold rounded-lg hover:bg-[#014421]/90 transition-all disabled:opacity-50">
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
          <h1 className="text-3xl font-bold text-[#014421] mb-2">The OCEAN Assessment</h1>
          <p className="text-[#014421]/60">Describe yourself as you generally are now, not as you wish to be.</p>
        </div>
        <div className="space-y-12">
          {currentQuestions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-[#014421]/5">
              <p className="text-lg font-medium text-[#014421] mb-6"><span className="opacity-40 mr-3">{q.id}.</span> {q.text}</p>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[1, 2, 3, 4, 5].map((val) => (
                  <label key={val} className="cursor-pointer group">
                    <input type="radio" name={`q-${q.id}`} value={val} checked={answers[q.id] === val} onChange={() => handleOptionChange(q.id, val)} className="hidden" />
                    <div className={`h-12 w-12 mx-auto rounded-full flex items-center justify-center border-2 transition-all ${answers[q.id] === val ? 'bg-[#014421] border-[#014421] text-white' : 'border-[#014421]/20 text-[#014421]/40 group-hover:border-[#014421]/50'}`}>{val}</div>
                    <span className="text-[10px] mt-2 block font-medium text-[#014421]/60 uppercase tracking-wider">{val === 1 ? 'Inaccurate' : val === 5 ? 'Accurate' : ''}</span>
                  </label>
                ))}
              </div>
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
