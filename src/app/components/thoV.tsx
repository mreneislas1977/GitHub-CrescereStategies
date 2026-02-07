import React, { useState } from 'react';
import AnalysisResult from './components/AnalysisResult';
import Logo from './components/Logo';
import Form990Input from './components/Form990Input'; 
import LeadGate from './components/LeadGate'; 
import { extractTextFromPDF } from './pdfService';
import { TrendAnalysisReport, UserProfile } from './types';

const API_URL = import.meta.env.VITE_API_URL || '/api/analyze';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [viewState, setViewState] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [allPdfText, setAllPdfText] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<TrendAnalysisReport | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  const handleFileUpload = async (file: File) => {
    try {
      setError(null);
      setLoadingMessage("Extracting financial data...");
      const text = await extractTextFromPDF(file);
      if (!text || text.length < 50) throw new Error("Could not extract text. Ensure PDF is not a scan.");
      setAllPdfText(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to read PDF.");
    } finally {
      setLoadingMessage("");
    }
  };

  const handleAnalyze = async () => {
    if (!allPdfText) return;
    setViewState('analyzing');
    setError(null);
    setLoadingMessage("AI is generating your Strategic Report...");
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: allPdfText.substring(0, 25000) }),
      });
      
      if (!response.ok) throw new Error(`Server Error: ${response.status}`);
      
      const data = await response.json();
      // Clean markdown if AI includes it
      const cleanedJson = data.result.replace(/```json/g, '').replace(/```/g, '').trim();
      
      setAnalysisResult(JSON.parse(cleanedJson));
      setViewState('results');
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Please check your connection and try again.");
      setViewState('upload');
    } finally {
      setLoadingMessage("");
    }
  };

  if (!userProfile) {
    return <LeadGate appName="Financial Intelligence" onUnlock={(p) => setUserProfile(p)} />;
  }

  return (
    <div className="min-h-screen bg-brand-cream text-gray-800">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Logo className="h-10" />
        {viewState === 'results' && (
          <button onClick={() => setViewState('upload')} className="text-brand-green font-bold">New Analysis</button>
        )}
      </header>
      <main className="max-w-4xl mx-auto p-6">
        {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 shadow-sm">⚠️ {error}</div>}
        
        {viewState === 'upload' && (
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h1 className="text-3xl font-serif text-brand-green mb-4 text-center">Strategic Assessment</h1>
            <Form990Input onFileProcess={handleFileUpload} hasText={!!allPdfText} isLoading={!!loadingMessage} />
            <button 
              onClick={handleAnalyze} 
              disabled={!allPdfText || !!loadingMessage}
              className={`w-full mt-8 p-4 rounded-lg font-bold text-lg transition-all ${!allPdfText ? 'bg-gray-200 text-gray-400' : 'bg-brand-green text-white hover:bg-green-700 shadow-lg'}`}
            >
              {loadingMessage ? "Processing..." : "Generate Strategic Report"}
            </button>
          </div>
        )}

        {viewState === 'analyzing' && (
          <div className="flex flex-col items-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
            <p className="text-xl font-medium text-gray-600">{loadingMessage}</p>
          </div>
        )}

        {viewState === 'results' && analysisResult && (
          <AnalysisResult report={analysisResult} isPremium={isPremium} onUnlock={() => setIsPremium(true)} />
        )}
      </main>
    </div>
  );
}