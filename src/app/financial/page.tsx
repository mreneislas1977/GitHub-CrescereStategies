"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { UploadCloud, CheckCircle, Loader2, FileText, AlertCircle } from 'lucide-react';

function FinancialIntelContent() {
  const [step, setStep] = useState(1); // 1: Upload, 2: Confirm, 3: Success
  const [email, setEmail] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [data, setData] = useState({
    progExpenses: 0, adminExpenses: 0, fundExpenses: 0, totalExpenses: 0,
    totalRevenue: 0, totalAssets: 0, totalLiabilities: 0
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('crescere_user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const extractDataFrom990 = async (file: File) => {
    if (!file) return;
    setIsParsing(true);
    try {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/workers/pdf.worker.mjs';

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        fullText += content.items.map((item: any) => item.str).join(" ");
      }

      const newData = { ...data };
      const cleanNum = (val: string) => parseFloat(val.replace(/,/g, '')) || 0;
      
      const patterns = {
        totalRevenue: /(?:Line 12|Total revenue).*?([\d,]{4,})/i,
        totalExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(A\).*?([\d,]{4,})/i,
        progExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(B\).*?([\d,]{4,})/i,
        adminExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(C\).*?([\d,]{4,})/i,
        fundExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(D\).*?([\d,]{4,})/i
      };

      Object.entries(patterns).forEach(([key, regex]) => {
        const match = fullText.match(regex);
        if (match && match[1]) (newData as any)[key] = cleanNum(match[1]);
      });

      setData(newData);
      setStep(2); // Automatically move to confirmation step
    } catch (err) {
      console.error("Extraction Error:", err);
      alert("Could not auto-parse PDF. Please enter data manually.");
      setStep(2);
    } finally {
      setIsParsing(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // 1. Save to Firebase
      await addDoc(collection(db, "financial_results"), {
        email,
        inputData: data,
        timestamp: serverTimestamp(),
        source: '501c3_intel_audit'
      });

      // 2. Trigger Alert API
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email, 
          testType: 'Executive 990 Audit Request' 
        })
      });

      setStep(3);
    } catch (e) {
      console.error("Submission Error:", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Success View ---
  if (step === 3) return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <div className="pt-40 text-center px-6 max-w-2xl mx-auto">
        <div className="bg-white p-12 border border-[#014421]/10 shadow-2xl">
          <CheckCircle className="mx-auto text-[#014421] mb-6" size={64} />
          <h1 className="text-3xl font-serif text-[#014421] mb-4">Request Submitted Successfully</h1>
          <p className="text-[#014421]/70 leading-relaxed mb-8">
            Your fiscal data has been securely transmitted to Crescere Strategies LLC. 
            <strong> M. Rene Islas</strong> will review your audit and contact you within 24 hours to schedule your strategy session.
          </p>
          <div className="bg-[#fdfbf5] p-4 border-l-4 border-[#C5A059] text-left text-sm italic">
            Check your inbox for a confirmation of this request.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-[#014421]/10 shadow-2xl overflow-hidden">
          
          {/* Progress Header */}
          <div className="flex border-b border-[#014421]/10 text-[10px] font-bold uppercase tracking-widest">
            <div className={`flex-1 py-4 text-center ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>1. Upload 990</div>
            <div className={`flex-1 py-4 text-center ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>2. Verify & Analyze</div>
          </div>

          <div className="p-10">
            {step === 1 ? (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/10 p-20 mb-6 bg-[#fdfbf5]/50 hover:bg-[#fdfbf5] transition-all">
                  {isParsing ? (
                    <div className="flex flex-col items-center">
                      <Loader2 className="animate-spin text-[#C5A059] mb-4" size={48} />
                      <p className="text-xs font-bold uppercase tracking-widest text-[#014421]">Analyzing IRS Data...</p>
                    </div>
                  ) : (
                    <>
                      <UploadCloud className="mx-auto text-[#014421]/10 mb-4" size={64} />
                      <h3 className="font-serif text-xl text-[#014421] mb-2">Upload IRS Form 990</h3>
                      <p className="text-sm text-[#014421]/50 mb-6">PDF format preferred. Our engine will extract key fiscal markers.</p>
                      <input type="file" accept=".pdf" onChange={(e) => e.target.files && extractDataFrom990(e.target.files[0])} className="hidden" id="pdf-up" />
                      <label htmlFor="pdf-up" className="cursor-pointer bg-[#014421] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5A059] transition-all inline-block">Begin Digital Audit</label>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-[#fdfbf5] p-6 border-l-4 border-[#C5A059] flex items-start gap-4">
                  <AlertCircle className="text-[#C5A059] shrink-0" size={20} />
                  <p className="text-xs text-[#014421]/70 italic">Please confirm the extracted values below. Accuracy is critical for a valid strategy session.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {Object.keys(data).map((key) => (
                    <div key={key}>
                      <label className="block text-[9px] uppercase font-bold text-[#014421]/50 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                      <input type="number" name={key} value={(data as any)[key]} onChange={handleInputChange} className="w-full p-3 bg-white border border-[#014421]/10 outline-none focus:border-[#C5A059]" />
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#014421]/10 flex justify-between items-center">
                  <button onClick={() => setStep(1)} className="text-[10px] uppercase font-bold text-[#014421]/40 border-b border-transparent hover:border-[#014421]/40">Re-upload Document</button>
                  <button onClick={handleSubmit} disabled={isSubmitting || !email} className="px-12 py-4 bg-[#014421] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#C5A059] transition-all flex items-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Request Strategy Meeting'} <FileText size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default dynamic(() => Promise.resolve(FinancialIntelContent), { ssr: false });
