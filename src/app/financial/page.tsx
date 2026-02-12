"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowRight, UploadCloud, Calculator, CheckCircle, Mail, Loader2, FileText } from 'lucide-react';

interface FinancialData {
  progExpenses: number; adminExpenses: number; fundExpenses: number; totalExpenses: number; depreciation: number;
  totalContributions: number; totalRevenue: number; maxSingleSource: number;
  totalAssets: number; totalLiabilities: number; cashSavings: number; unrestrictedNetAssets: number; totalNetAssets: number;
}

export default function FinancialIntel() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  // REPORT REQUEST STATE
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const calculateRatios = () => {
    const d = data;
    return {
      progRatio: d.totalExpenses ? (d.progExpenses / d.totalExpenses) * 100 : 0,
      adminRatio: d.totalExpenses ? (d.adminExpenses / d.totalExpenses) * 100 : 0,
      fundEfficiency: d.totalContributions ? (d.fundExpenses / d.totalContributions) : 0,
      currentRatio: d.totalLiabilities ? (d.totalAssets / d.totalLiabilities) : 0,
      monthsCash: ((d.totalExpenses - d.depreciation) / 12) ? (d.cashSavings / ((d.totalExpenses - d.depreciation) / 12)) : 0,
      opReserve: d.totalExpenses ? (d.unrestrictedNetAssets / d.totalExpenses) * 100 : 0,
      debtEquity: d.totalNetAssets ? (d.totalLiabilities / d.totalNetAssets) : 0,
      revDiversification: d.totalRevenue ? (d.maxSingleSource / d.totalRevenue) * 100 : 0,
      opMargin: d.totalRevenue ? ((d.totalRevenue - d.totalExpenses) / d.totalRevenue) * 100 : 0
    };
  };

  const handleSubmit = async () => {
    // 1. INSTANTLY SHOW RESULTS (The Fix)
    // We move to step 3 immediately so the user never hangs.
    setIsSubmitting(true);
    setStep(3); 
    
    // 2. Background Processing
    const results = calculateRatios();
    try {
      // Save data
      await addDoc(collection(db, "financial_results"), {
        email: email || 'anonymous',
        inputData: data,
        calculatedRatios: results,
        fileCount: files.length, // We just save the count, not the actual files (too heavy for now)
        completedAt: serverTimestamp(),
        appType: 'Financial Intel'
      });

      // Send Alert
      fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'Financial Intel Data Received'
        })
      });

    } catch (error) {
      console.error("Background save error:", error);
      // User doesn't care, they are already looking at the results page.
    } finally {
      setIsSubmitting(false);
    }
  };

  // ONE-CLICK REQUEST FUNCTION
  const handleReportRequest = async () => {
    setRequestStatus('loading');
    try {
      await fetch('/api/send-alert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientEmail: email,
          testType: 'Financial Full Report Request'
        })
      });
      setRequestStatus('success');
    } catch (error) {
      console.error("Request failed", error);
      setRequestStatus('idle');
      alert("System busy. Please try again later.");
    }
  };

  // --- VIEW: TEASER RESULTS ---
  if (step === 3) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-[#014421]/10">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-[#014421]" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-[#014421] mb-4">Analysis In Progress</h2>
            <p className="text-[#014421]/70 mb-8 leading-relaxed">
              Your 990 data and key figures have been successfully uploaded.
              <br/><br/>
              Our solvency engine is generating your 8-point fiscal health scorecard. To access the final ratios and diversification risk assessment, please request your report.
            </p>
            
            <button 
              onClick={handleReportRequest}
              disabled={requestStatus !== 'idle'}
              className={`inline-flex items-center px-8 py-4 font-bold rounded-full transition-all shadow-lg gap-2
                ${requestStatus === 'success' 
                  ? 'bg-green-700 text-white cursor-default' 
                  : 'bg-[#014421] text-white hover:bg-[#014421]/90'
                }
              `}
            >
              {requestStatus === 'idle' && <><Mail size={20} /> Request Full Report</>}
              {requestStatus === 'loading' && <><Loader2 size={20} className="animate-spin" /> Sending...</>}
              {requestStatus === 'success' && <><CheckCircle size={20} /> Request Sent</>}
            </button>

             <div className="mt-8">
               <a href="/insights" className="text-sm text-[#014421]/50 hover:text-[#014421] font-bold">Return to Lab</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- VIEW: INPUT & UPLOAD FORM ---
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#014421] mb-2">Financial Intel</h1>
          <p className="text-[#014421]/60 max-w-2xl mx-auto">Upload your last 3 IRS 990 forms for deep analysis. For an instant health score, enter your most recent key figures below.</p>
        </div>
        
        {/* Email Capture (Only if not already set) */}
        {!email && (
           <div className="mb-8 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Enter your email to start analysis" 
               onChange={(e) => setEmail(e.target.value)} 
               className="w-full p-4 border border-[#014421]/20 rounded-lg text-center"
             />
           </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl border border-[#014421]/10 overflow-hidden">
          <div className="flex border-b border-[#014421]/10">
            <button onClick={() => setStep(1)} className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}><Calculator size={18} /> Data Entry</button>
            <button onClick={() => setStep(2)} className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}><UploadCloud size={18} /> File Upload</button>
          </div>
          <div className="p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#014421] mb-4 border-b border-[#014421]/10 pb-2">Part IX: Statement of Functional Expenses</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Program Service Exp (Line 25, Col B)</label><input type="number" name="progExpenses" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Management & General Exp (Line 25, Col C)</label><input type="number" name="adminExpenses" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Fundraising Expenses (Line 25, Col D)</label><input type="number" name="fundExpenses" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Functional Expenses (Line 25, Col A)</label><input type="number" name="totalExpenses" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Depreciation (Line 22)</label><input type="number" name="depreciation" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#014421] mb-4 border-b border-[#014421]/10 pb-2">Part VIII: Revenue</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Contributions (Line 1h)</label><input type="number" name="totalContributions" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Revenue (Line 12)</label><input type="number" name="totalRevenue" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div className="md:col-span-2"><label className="block text-xs font-bold text-[#014421]/60 mb-1">Largest Single Source Revenue ($ Amount)</label><input type="number" name="maxSingleSource" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="For diversification check" /></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#014421] mb-4 border-b border-[#014421]/10 pb-2">Part X: Balance Sheet</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Assets (Line 16)</label><input type="number" name="totalAssets" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Liabilities (Line 26)</label><input type="number" name="totalLiabilities" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Cash & Savings (Line 1 + 2)</label><input type="number" name="cashSavings" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Unrestricted Net Assets (Line 27)</label><input type="number" name="unrestrictedNetAssets" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                    <div><label className="block text-xs font-bold text-[#014421]/60 mb-1">Total Net Assets (Line 33)</label><input type="number" name="totalNetAssets" onChange={handleInputChange} className="w-full p-3 bg-[#fdfbf5] border border-[#014421]/20 rounded" placeholder="0.00" /></div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setStep(2)} className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 transition-all flex items-center">Next: Upload Verification <ArrowRight className="ml-2" size={18} /></button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/20 rounded-xl p-12 bg-[#fdfbf5] mb-8">
                  <UploadCloud className="mx-auto text-[#014421]/40 mb-4" size={64} />
                  <h3 className="text-xl font-bold text-[#014421] mb-2">Upload IRS 990 Forms</h3>
                  <p className="text-[#014421]/60 mb-6">Please upload your last 3 filed returns (PDF) for verification.</p>
                  <input type="file" multiple accept=".pdf" onChange={handleFileChange} className="block w-full text-sm text-[#014421] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#014421] file:text-white hover:file:bg-[#014421]/90" />
                  <p className="text-xs text-[#014421]/40 mt-4">{files.length} files selected</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => setStep(1)} className="px-6 py-3 font-bold text-[#014421] hover:bg-[#014421]/5 rounded-lg transition-colors">Back to Data</button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting || !email} 
                    className="px-8 py-3 bg-[#014421] text-white font-bold rounded-full hover:bg-[#014421]/90 transition-all shadow-lg flex items-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Generate Report'}
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
