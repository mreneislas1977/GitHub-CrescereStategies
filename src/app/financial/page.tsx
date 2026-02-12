"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, UploadCloud, CheckCircle, Loader2, FileText } from 'lucide-react';

function FinancialIntelContent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [data, setData] = useState({
    progExpenses: 0, adminExpenses: 0, fundExpenses: 0, totalExpenses: 0, depreciation: 0,
    totalContributions: 0, totalRevenue: 0, maxSingleSource: 0,
    totalAssets: 0, totalLiabilities: 0, cashSavings: 0, unrestrictedNetAssets: 0, totalNetAssets: 0
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
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const typedarray = new Uint8Array(event.target?.result as ArrayBuffer);
          const pdf = await pdfjs.getDocument({ data: typedarray }).promise;
          let fullText = "";
          for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            fullText += content.items.map((item: any) => (item as any).str).join(" ");
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
          setStep(1);
          setIsParsing(false);
        } catch (inner) {
          console.error(inner);
          setIsParsing(false);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error(err);
      setIsParsing(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "financial_results"), {
        email,
        inputData: data,
        timestamp: serverTimestamp()
      });
      setStep(3);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3) return (
    <div className="min-h-screen bg-[#fdfbf5] flex flex-col">
      <Header />
      <div className="flex-grow pt-40 text-center px-6">
        <CheckCircle className="mx-auto text-[#014421] mb-4" size={60} />
        <h1 className="text-3xl font-serif text-[#014421]">Analysis Complete</h1>
        <p className="mt-4 text-[#014421]/60">Your 501(c)(3) Fiscal Health Audit is ready.</p>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-[#014421]/10 shadow-2xl overflow-hidden">
          <div className="flex border-b border-[#014421]/10 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => setStep(1)} className={`flex-1 py-4 ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>1. Financials</button>
            <button onClick={() => setStep(2)} className={`flex-1 py-4 ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>2. Upload 990</button>
          </div>
          <div className="p-10">
            {step === 1 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.keys(data).map((key) => (
                  <div key={key}>
                    <label className="block text-[9px] uppercase font-bold text-[#014421]/50 mb-1">{key}</label>
                    <input type="number" name={key} value={(data as any)[key]} onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/10 outline-none" />
                  </div>
                ))}
                <button onClick={() => setStep(2)} className="md:col-span-2 w-full py-4 bg-[#014421] text-white font-bold uppercase text-xs tracking-widest">Next Step</button>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/10 p-20 mb-6">
                  {isParsing ? <Loader2 className="animate-spin mx-auto text-[#C5A059]" size={48} /> : (
                    <>
                      <UploadCloud className="mx-auto text-[#014421]/10 mb-4" size={64} />
                      <input type="file" accept=".pdf" onChange={(e) => e.target.files && extractDataFrom990(e.target.files[0])} className="hidden" id="pdf-up" />
                      <label htmlFor="pdf-up" className="cursor-pointer bg-[#014421] text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest">Select 990 PDF</label>
                    </>
                  )}
                </div>
                <button onClick={handleSubmit} disabled={isSubmitting} className="px-12 py-4 bg-[#C5A059] text-white font-bold uppercase text-xs tracking-widest">Execute Audit</button>
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
