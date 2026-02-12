"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, UploadCloud, Calculator, CheckCircle, Mail, Loader2 } from 'lucide-react';
import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface FinancialData {
  progExpenses: number; adminExpenses: number; fundExpenses: number; totalExpenses: number; depreciation: number;
  totalContributions: number; totalRevenue: number; maxSingleSource: number;
  totalAssets: number; totalLiabilities: number; cashSavings: number; unrestrictedNetAssets: number; totalNetAssets: number;
}

export default function FinancialIntel() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [data, setData] = useState<FinancialData>({
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

  // --- NEW: PDF PARSING LOGIC ---
  const extractDataFrom990 = async (file: File) => {
    setIsParsing(true);
    const reader = new FileReader();
    
    reader.onload = async () => {
      try {
        const typedarray = new Uint8Array(reader.result as ArrayBuffer);
        const pdf = await pdfjs.getDocument(typedarray).promise;
        let fullText = "";

        for (let i = 1; i <= Math.min(pdf.numPages, 12); i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          fullText += content.items.map((item: any) => item.str).join(" ");
        }

        const newData = { ...data };
        const cleanNum = (val: string) => parseFloat(val.replace(/,/g, '')) || 0;

        // Targeted Regex for Form 990 Lines
        const patterns = {
          totalRevenue: /(?:Line 12|Total revenue).*?([\d,]{4,})/i,
          totalExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(A\).*?([\d,]{4,})/i,
          progExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(B\).*?([\d,]{4,})/i,
          adminExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(C\).*?([\d,]{4,})/i,
          fundExpenses: /(?:Line 25|Total functional expenses).*?Column\s?\(D\).*?([\d,]{4,})/i,
          totalAssets: /(?:Line 16|Total assets).*?Column\s?\(B\).*?([\d,]{4,})/i,
          totalLiabilities: /(?:Line 26|Total liabilities).*?Column\s?\(B\).*?([\d,]{4,})/i,
        };

        Object.entries(patterns).forEach(([key, regex]) => {
          const match = fullText.match(regex);
          if (match && match[1]) {
            (newData as any)[key] = cleanNum(match[1]);
          }
        });

        setData(newData);
        alert("Data successfully extracted from PDF. Please verify the numbers in Step 1.");
        setStep(1); // Take them back to verify the parsed data
      } catch (err) {
        console.error("Parse Error:", err);
      } finally {
        setIsParsing(false);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
      if (selectedFiles[0]) extractDataFrom990(selectedFiles[0]);
    }
  };

  const calculateRatios = () => {
    const d = data;
    return {
      progRatio: d.totalExpenses ? (d.progExpenses / d.totalExpenses) * 100 : 0,
      opMargin: d.totalRevenue ? ((d.totalRevenue - d.totalExpenses) / d.totalRevenue) * 100 : 0,
      currentRatio: d.totalLiabilities ? (d.totalAssets / d.totalLiabilities) : 0
    };
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStep(3); 
    
    const results = calculateRatios();
    try {
      await addDoc(collection(db, "financial_results"), {
        email: email || 'anonymous',
        inputData: data,
        calculatedRatios: results,
        fileCount: files.length,
        completedAt: serverTimestamp(),
        appType: 'Financial Intel'
      });

      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientEmail: email, testType: 'Financial Intel Data Received' })
      });
    } catch (error) {
      console.error("Firebase Save Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReportRequest = async () => {
    setRequestStatus('loading');
    try {
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientEmail: email, testType: 'Financial Full Report Request' })
      });
      setRequestStatus('success');
    } catch (error) {
      setRequestStatus('idle');
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-[#014421]/10">
            <CheckCircle className="text-[#014421] mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-[#014421] mb-4">Analysis Complete</h2>
            <p className="text-[#014421]/70 mb-8">Data has been secured. Your 8-point fiscal health scorecard is ready for review.</p>
            <button onClick={handleReportRequest} className="bg-[#014421] text-white px-8 py-4 rounded-full font-bold">
              {requestStatus === 'success' ? 'Request Sent' : 'Request Full Report'}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-[#014421]/10 overflow-hidden">
          <div className="flex border-b">
            <button onClick={() => setStep(1)} className={`flex-1 py-4 font-bold ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>1. Data Entry</button>
            <button onClick={() => setStep(2)} className={`flex-1 py-4 font-bold ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>2. 990 Upload</button>
          </div>
          <div className="p-8">
            {step === 1 ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.keys(data).filter(k => k !== 'isFromUpload').map((key) => (
                    <div key={key}>
                      <label className="block text-[10px] uppercase font-bold text-[#014421]/60 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                      <input 
                        type="number" 
                        name={key} 
                        value={(data as any)[key] || ''} 
                        onChange={handleInputChange} 
                        className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/10 rounded" 
                      />
                    </div>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="w-full py-4 bg-[#014421] text-white font-bold rounded-full">Next: Upload 990s</button>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/20 rounded-xl p-12 mb-8">
                  {isParsing ? <Loader2 className="animate-spin mx-auto text-[#014421]" size={48} /> : <UploadCloud className="mx-auto text-[#014421]/20" size={48} />}
                  <h3 className="text-xl font-bold mt-4">Upload IRS 990s</h3>
                  <input type="file" multiple accept=".pdf" onChange={handleFileChange} className="mt-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#014421] file:text-white" />
                </div>
                <button onClick={handleSubmit} disabled={!email} className="px-12 py-4 bg-[#014421] text-white font-bold rounded-full disabled:opacity-50">Generate Executive Report</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
