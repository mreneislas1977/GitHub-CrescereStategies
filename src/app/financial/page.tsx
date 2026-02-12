"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, UploadCloud, Calculator, CheckCircle, Mail, Loader2, FileText } from 'lucide-react';

// Main Component Logic
function FinancialIntelContent() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
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
    setIsParsing(true);
    const pdfjs = await import('pdfjs-dist');
    https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
          if (match && match[1]) (newData as any)[key] = cleanNum(match[1]);
        });
        setData(newData);
        setStep(1); 
      } catch (err) { console.error(err); } finally { setIsParsing(false); }
    };
    reader.readAsArrayBuffer(file);
  };

  const calculateRatios = () => {
    const d = data;
    return {
      progRatio: d.totalExpenses ? (d.progExpenses / d.totalExpenses) * 100 : 0,
      opMargin: d.totalRevenue ? ((d.totalRevenue - d.totalExpenses) / d.totalRevenue) * 100 : 0,
      currentRatio: d.totalLiabilities ? (d.totalAssets / d.totalLiabilities) : 0,
      fundraisingEfficiency: d.totalContributions ? (d.fundExpenses / d.totalContributions) * 100 : 0
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
        completedAt: serverTimestamp(),
      });
      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientEmail: email, testType: 'Financial Intel Analysis' })
      });
    } catch (e) { console.error(e); } finally { setIsSubmitting(false); }
  };

  const handleReportRequest = async () => {
    setRequestStatus('loading');
    try {
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientEmail: email, testType: 'Full PDF Audit Request' })
      });
      setRequestStatus('success');
    } catch (e) { setRequestStatus('idle'); }
  };

  if (step === 3) {
    const r = calculateRatios();
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
          <div className="border-b-2 border-[#014421] pb-6 mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-2">Executive Fiscal Health Audit</h2>
              <h1 className="text-4xl font-serif text-[#014421]">Financial Intelligence Report</h1>
            </div>
            <div className="text-right text-[10px] font-mono text-[#014421]/40 uppercase">ID: {new Date().getTime().toString().slice(-6)}</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Program Efficiency', val: `${r.progRatio.toFixed(1)}%`, border: '#014421' },
              { label: 'Operating Margin', val: `${r.opMargin.toFixed(1)}%`, border: '#C5A059' },
              { label: 'Liquidity Ratio', val: `${r.currentRatio.toFixed(2)}x`, border: '#5c4033' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border-l-4 shadow-sm" style={{ borderLeftColor: item.border }}>
                <p className="text-[10px] uppercase font-bold text-[#014421]/40 mb-1">{item.label}</p>
                <h3 className="text-2xl font-bold text-[#014421]">{item.val}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#014421]/10 p-10 shadow-xl mb-12">
            <h4 className="text-[#C5A059] font-bold uppercase text-[10px] mb-6 tracking-widest text-center">Auditor's Narrative Analysis</h4>
            <div className="max-w-3xl mx-auto text-[#014421]/80 leading-relaxed text-sm">
              <p className="mb-4">The organization's allocation of <strong>{r.progRatio.toFixed(1)}%</strong> to program services suggests a <strong>{r.progRatio > 70 ? 'strong' : 'conservative'}</strong> operational alignment with its mission.</p>
              <p>Current liquidity standing at <strong>{r.currentRatio.toFixed(2)}x</strong> indicates capacity to manage obligations {r.currentRatio > 1.5 ? 'without structural risk' : 'requiring cash-flow oversight'}.</p>
            </div>
          </div>

          <div className="bg-white border border-[#014421]/10 overflow-hidden">
            <div className="bg-[#014421] px-6 py-2 text-[10px] font-bold text-white uppercase tracking-widest">Sector Benchmarking</div>
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b border-[#014421]/10 text-[10px] uppercase text-[#014421]/50"><th className="p-6">Indicator</th><th className="p-6">Result</th><th className="p-6">Average</th><th className="p-6">Status</th></tr></thead>
              <tbody>
                <tr className="border-b border-[#014421]/5">
                  <td className="p-6 font-bold">Program Efficiency</td><td className="p-6">{r.progRatio.toFixed(1)}%</td><td className="p-6">72.4%</td><td className="p-6 font-bold text-[#014421]">{r.progRatio > 72 ? '▲ Pass' : '▼ Review'}</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Fundraising ROI</td><td className="p-6">{r.fundraisingEfficiency.toFixed(1)}%</td><td className="p-6">18.0%</td><td className="p-6 font-bold text-[#C5A059]">{r.fundraisingEfficiency < 20 ? 'Optimal' : 'Elevated'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <button onClick={handleReportRequest} className="bg-[#014421] text-white px-12 py-5 font-bold uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2 mx-auto">
              {requestStatus === 'success' ? 'Request Dispatched' : 'Download Professional PDF Audit'} <FileText size={18} />
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
        <div className="bg-white rounded-none shadow-2xl border border-[#014421]/10">
          <div className="flex border-b border-[#014421]/10">
            <button onClick={() => setStep(1)} className={`flex-1 py-4 font-bold text-[10px] uppercase tracking-widest ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>1. Financial Data Entry</button>
            <button onClick={() => setStep(2)} className={`flex-1 py-4 font-bold text-[10px] uppercase tracking-widest ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>2. Document Verification</button>
          </div>
          <div className="p-10">
            {step === 1 ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.keys(data).map((key) => (
                    <div key={key}>
                      <label className="block text-[9px] uppercase font-bold text-[#014421]/50 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                      <input type="number" name={key} value={(data as any)[key] || ''} onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/10 focus:border-[#C5A059] outline-none transition-colors" />
                    </div>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="w-full py-4 bg-[#014421] text-white font-bold uppercase text-xs tracking-widest mt-6">Proceed to Verification</button>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/10 p-20 mb-8">
                  {isParsing ? <Loader2 className="animate-spin mx-auto text-[#C5A059]" size={48} /> : <UploadCloud className="mx-auto text-[#014421]/10" size={64} />}
                  <h3 className="text-xl font-serif text-[#014421] mt-6">Upload IRS Form 990</h3>
                  <input type="file" accept=".pdf" onChange={(e) => {if(e.target.files) { setFiles([e.target.files[0]]); extractDataFrom990(e.target.files[0]); }}} className="hidden" id="pdf-upload" />
                  <label htmlFor="pdf-upload" className="mt-4 cursor-pointer bg-[#014421] text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest inline-block">Select PDF Document</label>
                </div>
                <button onClick={handleSubmit} disabled={!email} className="px-12 py-4 bg-[#C5A059] text-white font-bold uppercase text-xs tracking-widest disabled:opacity-50">Execute Fiscal Health Audit</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// SSR Lockdown: This ensures pdfjs-dist only loads in the browser
export default dynamic(() => Promise.resolve(FinancialIntelContent), {
  ssr: false,
});
