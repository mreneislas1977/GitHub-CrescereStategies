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
      setLoadingMessage("Extracting data...");
      const text = await extractTextFromPDF(file);
      if (!text) throw new Error("Could not extract text.");
      setAllPdfText(text);
    } catch (err) {
      setError("Failed to read PDF.");
    } finally {
      setLoadingMessage("");
    }
  };

  const handleAnalyze = async () => {
    if (!allPdfText) return;
    setViewState('analyzing');
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: allPdfText.substring(0, 20000) }),
      });
      const data = await response.json();
      const cleanedJson = data.result.replace(/```json/g, '').replace(/```/g, '').trim();
      setAnalysisResult(JSON.parse(cleanedJson));
      setViewState('results');
    } catch (err) {
      setError("Analysis failed.");
      setViewState('upload');
    }
  };

  if (!userProfile) {
    return <LeadGate appName="Financial Intelligence" onUnlock={(p) => setUserProfile(p)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between">
        <Logo className="h-8" />
        {viewState === 'results' && <button onClick={() => setViewState('upload')}>New</button>}
      </header>
      <main className="max-w-4xl mx-auto p-6">
        {error && <div className="text-red-500">{error}</div>}
        {viewState === 'upload' && (
          <div className="bg-white p-6 shadow rounded">
            <Form990Input onFileProcess={handleFileUpload} hasText={!!allPdfText} isLoading={!!loadingMessage} />
            <button onClick={handleAnalyze} className="w-full mt-4 bg-blue-600 text-white p-2 rounded">Analyze</button>
          </div>
        )}
        {viewState === 'analyzing' && <div className="text-center">Analyzing...</div>}
        {viewState === 'results' && analysisResult && <AnalysisResult report={analysisResult} isPremium={isPremium} onUnlock={() => setIsPremium(true)} />}
      </main>
    </div>
  );
}