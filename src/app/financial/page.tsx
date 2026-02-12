"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { UploadCloud, CheckCircle, Loader2, FileText, AlertCircle } from 'lucide-react';

function FinancialIntelContent() {
  const [step, setStep] = useState(1);
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

  const extractDataFrom990 = async (file: File) => {
    if (!file) return;
    setIsParsing(true);
    try {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/workers/pdf.worker.mjs';

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= Math.min(pdf.numPages, 12); i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        fullText += content.items.map((item: any) => item.str).join(" ");
      }

      const newData = { ...data };
      const cleanNum = (val: string) => {
          const stripped = val.replace(/[$\s,]/g, '');
          return parseFloat(stripped) || 0;
      };
      
      const patterns = {
        // Look for the absolute last currency-formatted number on the specific line
        totalRevenue: /(?:Total revenue|Line 12).*?(\d[\d,]{3,})/i,
        totalExpenses: /(?:Total expenses|Line 18|Line 25).*?(\d[\d,]{3,})/i,
        progExpenses: /(?:Program service expenses|Line 25).*?Column\s?\(B\).*?(\d[\d,]{3,})/i,
        adminExpenses: /(?:Management and general|Line 25).*?Column\s?\(C\).*?(\d[\d,]{3,})/i,
        fundExpenses: /(?:Fundraising expenses|Line 25).*?Column\s?\(D\).*?(\d[\d,]{3,})/i,
        totalAssets: /(?:Total assets|Line 20).*?(\d[\d,]{3,})/i,
        totalLiabilities: /(?:Total liabilities|Line 21).*?(\d[\d,]{3,})/i
      };

      Object.entries(patterns).forEach(([key, regex]) => {
        const matches = fullText.match(new RegExp(regex, 'gi'));
        if (matches) {
            // Grab the last sequence of digits in that matched line
            const lastVal = matches[matches.length - 1].match(/(\d[\d,]{2,})/);
            if (lastVal) (newData as any)[key] = cleanNum(lastVal[1]);
        }
      });

      setData(newData);
      setStep(2); 
    } catch (err) {
      console.error(err);
      setStep(2);
    } finally {
      setIsParsing(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "financial_results"), {
        email,
        inputData: data,
        timestamp: serverTimestamp(),
      });
      setStep(3);
    } catch (e) { console.error(e); } finally { setIsSubmitting(false); }
  };

  if (step === 3) return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <div className="pt-40 text-center px-6 max-w-2xl mx-auto">
        <div className="bg-white p-12 border border-[#014421]/10 shadow-2xl">
          <CheckCircle className="mx-auto text-[#014421] mb-6" size={64} />
          <h1 className="text-3xl font-serif text-[#014421] mb-4">Submitted</h1>
          <p className="text-[#014421]/70 leading-relaxed mb-8">
            <strong>M. Rene Islas</strong> will contact you within 24 hours.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-[#014421]/10 shadow-2xl">
          <div className="flex border-b border-[#014421]/10 text-[10px] font-bold uppercase tracking-widest">
            <div className={`flex-1 py-4 text-center ${step === 1 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>1. Upload</div>
            <div className={`flex-1 py-4 text-center ${step === 2 ? 'bg-[#014421] text-white' : 'text-[#014421]/40'}`}>2. Verify</div>
          </div>
          <div className="p-10">
            {step === 1 ? (
              <div className="text-center py-10">
                <div className="border-2 border-dashed border-[#014421]/10 p-20 mb-6">
                  {isParsing ? <Loader2 className="animate-spin mx-auto text-[#C5A059]" size={48} /> : (
                    <>
                      <UploadCloud className="mx-auto text-[#014421]/10 mb-4" size={64} />
                      <input type="file" accept=".pdf" onChange={(e) => e.target.files && extractDataFrom990(e.target.files[0])} className="hidden" id="pdf-up" />
                      <label htmlFor="pdf-up" className="cursor-pointer bg-[#014421] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5A059]">Begin Digital Audit</label>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-[#fdfbf5] p-6 border-l-4 border-[#C5A059] flex items-start gap-4 text-xs italic text-[#014421]/70">
                   <AlertCircle className="text-[#C5A059] shrink-0" size={20} />
                   Confirm the values. M. Rene Islas will review these within 24 hours.
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.keys(data).map((key) => (
                    <div key={key}>
                      <label className="block text-[9px] uppercase font-bold text-[#014421]/50 mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                      <input type="number" name={key} value={(data as any)[key]} onChange={handleInputChange} className="w-full p-3 bg-white border border-[#014421]/10 outline-none focus:border-[#C5A059]" />
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-[#014421]/10 flex justify-end">
                  <button onClick={handleSubmit} disabled={isSubmitting} className="px-12 py-4 bg-[#014421] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#C5A059]">Request Strategy Meeting</button>
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
