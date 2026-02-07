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
      setLoadingMessage("Extracting financial data from PDF...");
      const text = await extractTextFromPDF(file);
      if (!text || text.length < 50) {
        throw new Error("Could not extract readable text. Ensure the PDF is not a scan.");
      }
      setAllPdfText(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to read PDF file.");
    } finally {
      setLoadingMessage("");
    }
  };

  const handleAnalyze = async () => {
    if (!allPdfText) return;
    setViewState('analyzing');
    setError(null);
    setLoadingMessage("Generating Strategic Intelligence Report...");
    try {
      const safePdfText = allPdfText.substring(0, 30000);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: safePdfText }),
      });
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      const cleanedJson = data.result.replace(/```json/g, '').replace(/```/g, '').trim();
      setAnalysisResult(JSON.parse(cleanedJson));
      setViewState('results');
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed.");
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
          <button onClick={() => setViewState('upload')} className="text-brand-green">New Analysis</button>
        )}
      </header>
      <main className="max-w-4xl mx-auto p-6">
        {error && <div className="bg-red-50 text-red-700 p-4 rounded mb-4">{error}</div>}
        {viewState === 'upload' && (
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Form990Input onFileProcess={handleFileUpload} hasText={!!allPdfText} isLoading={!!loadingMessage} />
            <button 
              onClick={handleAnalyze} 
              disabled={!allPdfText || !!loadingMessage}
              className="w-full mt-6 bg-brand-green text-white p-4 rounded-lg font-bold"
            >
              {loadingMessage ? "Processing..." : "Generate Strategic Report"}
            </button>
          </div>
        )}
        {viewState === 'analyzing' && <div className="text-center py-20">Analyzing...</div>}
        {viewState === 'results' && analysisResult && <AnalysisResult report={analysisResult} isPremium={isPremium} onUnlock={() => setIsPremium(true)} />}
      </main>
    </div>
  );
}