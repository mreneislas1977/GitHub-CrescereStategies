import React, { useState } from 'react';
import Logo from './components/Logo';
import Form990Input from './components/Form990Input'; 
import LeadGate from './components/LeadGate'; 
import AnalysisResult from './components/AnalysisResult';
import { extractTextFromPDF } from './pdfService';
import { UserProfile, TrendAnalysisReport } from './types';

const API_URL = import.meta.env.VITE_API_URL || '/api/analyze';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [viewState, setViewState] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [loadingMessage, setLoadingMessage] = useState("");
  const [allPdfText, setAllPdfText] = useState("");
  const [analysisResult, setAnalysisResult] = useState<TrendAnalysisReport | null>(null);

  if (!userProfile) {
    return <LeadGate appName="Financial Intel" onUnlock={(p) => setUserProfile(p)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-sm flex justify-between">
        <Logo className="h-8" />
        {viewState === 'results' && <button onClick={() => setViewState('upload')}>Reset</button>}
      </header>
      <main className="p-8 max-w-4xl mx-auto">
        {viewState === 'upload' && (
          <div className="bg-white p-6 rounded shadow">
             <Form990Input onFileProcess={(f) => extractTextFromPDF(f).then(setAllPdfText)} hasText={!!allPdfText} isLoading={false} />
             <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded" onClick={() => setViewState('results')}>Test Transition</button>
          </div>
        )}
        {viewState === 'results' && <div className="text-center">Build Successful. Code is live.</div>}
      </main>
    </div>
  );
}