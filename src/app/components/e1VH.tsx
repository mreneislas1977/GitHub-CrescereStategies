import React, { useState, useRef } from 'react';
import { Upload, FileText, BarChart3, ArrowRight, Loader, CheckCircle, PieChart as PieIcon, Shield, AlertTriangle, Download, ChevronRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import * as pdfjsLib from 'pdfjs-dist';

// --- FIX: USE CDN FOR WORKER ---
// This prevents the "Rollup failed to resolve import" build error
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// --- IMPORT THE GATE ---
import LeadGate from './components/LeadGate';

// --- CONFIGURATION ---
const API_ENDPOINT = '/api/analyze'; 

// --- TYPES ---
interface AnalysisResult {
  financialHealthScore: number;
  programRatio: number;
  adminRatio: number;
  fundraisingRatio: number;
  summary: string;
  risks: string[];
  opportunities: string[];
  strategicRoadmap: { phase: string; action: string }[];
}

// --- COMPONENTS ---

const Header = () => (
  <header className="bg-brand-green text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 bg-brand-gold rounded-sm flex items-center justify-center">
          <BarChart3 className="text-brand-green w-5 h-5" />
        </div>
        <span className="font-heading font-bold text-xl tracking-wide">Crescere <span className="text-brand-gold">Financial</span></span>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
        <span className="text-brand-gold border-b border-brand-gold pb-1">Dashboard</span>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-brand-brown text-brand-cream py-12 border-t border-brand-gold/20">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading font-bold text-lg mb-2">Crescere Strategies LLC</p>
      <p className="text-sm opacity-60">Strategic Financial Intelligence Tool • © {new Date().getFullYear()}</p>
    </div>
  </footer>
);

const FileUploader = ({ onFileProcessed, isProcessing }: { onFileProcessed: (text: string) => void, isProcessing: boolean }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const extractTextFromPDF = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      const maxPages = Math.min(pdf.numPages, 5); 
      
      for (let i = 1; i <= maxPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        fullText += pageText + '\n';
      }
      onFileProcessed(fullText);
    } catch (error) {
      console.error("PDF Extraction Error:", error);
      alert("Could not read PDF. Please ensure it is a valid text-based PDF.");
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type === 'application/pdf') {
      extractTextFromPDF(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${dragActive ? 'border-brand-green bg-brand-green/5' : 'border-brand-brown/20 bg-white'}`}
      onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(true); }}
      onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); }}
      onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
      onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
    >
      <div className="bg-brand-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        {isProcessing ? <Loader className="w-8 h-8 text-brand-green animate-spin" /> : <Upload className="w-8 h-8 text-brand-green" />}
      </div>
      <h3 className="font-heading text-2xl font-bold text-brand-green mb-2">Upload Form 990</h3>
      <p className="text-brand-brown/60 mb-8 max-w-md mx-auto">Drag and drop your IRS Form 990 (PDF) here to generate an AI-powered strategic roadmap.</p>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={(e) => e.target.files && handleFile(e.target.files[0])} 
        accept="application/pdf" 
        className="hidden" 
      />
      <button 
        onClick={() => fileInputRef.current?.click()} 
        disabled={isProcessing}
        className="px-8 py-4 bg-brand-green hover:bg-brand-brown text-white font-bold uppercase tracking-widest text-sm rounded-sm transition-colors shadow-lg"
      >
        {isProcessing ? 'Processing...' : 'Select File'}
      </button>
    </div>
  );
};

const Dashboard = ({ data }: { data: AnalysisResult }) => {
  const chartData = [
    { name: 'Program', value: data.programRatio, color: '#014421' }, // Brand Green
    { name: 'Admin', value: data.adminRatio, color: '#5c4033' },   // Brand Brown
    { name: 'Fundraising', value: data.fundraisingRatio, color: '#C5A059' }, // Brand Gold
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-brand-green">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-brand-brown/70 text-sm uppercase tracking-wider">Financial Health</h3>
            <Shield className="w-5 h-5 text-brand-green" />
          </div>
          <div className="flex items-baseline">
            <span className="text-5xl font-heading font-bold text-brand-green">{data.financialHealthScore}</span>
            <span className="text-lg text-brand-brown/50 ml-2">/ 100</span>
          </div>
          <p className="text-xs text-brand-brown/60 mt-2">Based on liquidity & efficiency</p>
        </div>

        <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-brand-gold">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-brand-brown/70 text-sm uppercase tracking-wider">Expense Ratio</h3>
            <PieIcon className="w-5 h-5 text-brand-gold" />
          </div>
          <div className="h-24 w-full">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 text-xs font-bold text-brand-brown/60 -mt-2">
            <span className="flex items-center"><div className="w-2 h-2 bg-brand-green rounded-full mr-1"></div>Prog</span>
            <span className="flex items-center"><div className="w-2 h-2 bg-brand-brown rounded-full mr-1"></div>Admin</span>
            <span className="flex items-center"><div className="w-2 h-2 bg-brand-gold rounded-full mr-1"></div>Fund</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm shadow-md border-t-4 border-brand-brown">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-brand-brown/70 text-sm uppercase tracking-wider">Strategic Focus</h3>
            <AlertTriangle className="w-5 h-5 text-brand-brown" />
          </div>
          <p className="text-sm text-brand-brown leading-relaxed line-clamp-4">{data.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-sm shadow-md">
            <h3 className="font-heading text-xl font-bold text-brand-brown mb-6 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-700" /> Key Risks
            </h3>
            <ul className="space-y-4">
              {data.risks.map((risk, i) => (
                <li key={i} className="flex items-start text-sm text-brand-brown/80">
                  <span className="text-red-700 mr-2">•</span> {risk}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-md">
            <h3 className="font-heading text-xl font-bold text-brand-brown mb-6 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-brand-green" /> Opportunities
            </h3>
            <ul className="space-y-4">
              {data.opportunities.map((opp, i) => (
                <li key={i} className="flex items-start text-sm text-brand-brown/80">
                  <span className="text-brand-green mr-2">•</span> {opp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
           <div className="bg-white p-8 rounded-sm shadow-md h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-brand-green">Strategic Roadmap</h3>
                <button className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown hover:text-brand-gold">
                  <Download className="w-4 h-4 mr-2" /> Download Report
                </button>
              </div>

              <div className="space-y-0">
                {data.strategicRoadmap.map((step, i) => (
                  <div key={i} className="flex group">
                    <div className="mr-6 flex flex-col items-center">
                       <div className="w-8 h-8 rounded-full bg-brand-cream border-2 border-brand-green text-brand-green font-bold flex items-center justify-center text-xs z-10 group-hover:bg-brand-green group-hover:text-white transition-colors">
                         {i + 1}
                       </div>
                       {i !== data.strategicRoadmap.length - 1 && <div className="h-full w-0.5 bg-brand-brown/10 my-2"></div>}
                    </div>
                    <div className="pb-8">
                       <h4 className="font-heading font-bold text-lg text-brand-brown mb-2">{step.phase}</h4>
                       <p className="text-brand-brown/70 leading-relaxed">{step.action}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  // ------------------------------------------------
  // 1. UNIVERSAL GATE CHECK
  // ------------------------------------------------
  if (!isUnlocked) {
    return (
      <LeadGate 
        appName="Financial Intelligence Tool" 
        onUnlock={() => setIsUnlocked(true)} 
      />
    );
  }

  // ------------------------------------------------
  // 2. MAIN APPLICATION (Unlocked)
  // ------------------------------------------------
  const handleAnalysis = async (text: string) => {
    setAnalyzing(true);
    const prompt = `
      Analyze the following text extracted from an IRS Form 990 Non-Profit Tax Return.
      Return a JSON object strictly following this structure (no markdown formatting):
      {
        "financialHealthScore": (integer 0-100 based on efficiency and liquidity),
        "programRatio": (integer percentage of expenses on programs),
        "adminRatio": (integer percentage of expenses on admin),
        "fundraisingRatio": (integer percentage of expenses on fundraising),
        "summary": "A concise 2-sentence executive summary of their financial strategy.",
        "risks": ["Risk 1", "Risk 2", "Risk 3"],
        "opportunities": ["Opp 1", "Opp 2", "Opp 3"],
        "strategicRoadmap": [
           {"phase": "Immediate (0-3 Months)", "action": "Specific action..."},
           {"phase": "Short Term (3-12 Months)", "action": "Specific action..."},
           {"phase": "Long Term (12+ Months)", "action": "Specific action..."}
        ]
      }
      DATA:
      ${text.substring(0, 15000)} 
    `;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      const cleanJson = data.result.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      setResult(parsed);
    } catch (error) {
      console.error("Analysis Error:", error);
      alert("Analysis failed. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown font-body flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-6 py-12">
        {!result ? (
          <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-700">
            <div className="text-center space-y-4">
              <h1 className="font-heading text-5xl font-bold text-brand-green">Financial Intelligence</h1>
              <p className="text-xl text-brand-brown/70 font-light">
                AI-Powered Strategic Benchmarking for Non-Profits
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-xl">
              <FileUploader onFileProcessed={handleAnalysis} isProcessing={analyzing} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
               <div className="p-4">
                 <div className="bg-brand-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                   <FileText className="text-brand-green w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-brand-brown mb-2">Upload 990</h4>
                 <p className="text-xs text-brand-brown/60">Securely process your public tax filings PDF.</p>
               </div>
               <div className="p-4">
                 <div className="bg-brand-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                   <CheckCircle className="text-brand-green w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-brand-brown mb-2">AI Analysis</h4>
                 <p className="text-xs text-brand-brown/60">Gemini Pro analyzes ratios, governance, and strategy.</p>
               </div>
               <div className="p-4">
                 <div className="bg-brand-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                   <ArrowRight className="text-brand-green w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-brand-brown mb-2">Action Plan</h4>
                 <p className="text-xs text-brand-brown/60">Receive a tailored roadmap to Platinum Transparency.</p>
               </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
               <div>
                  <button onClick={() => setResult(null)} className="text-xs font-bold uppercase tracking-widest text-brand-brown/50 hover:text-brand-green flex items-center mb-2">
                    <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back to Upload
                  </button>
                  <h2 className="font-heading text-3xl font-bold text-brand-green">Analysis Report</h2>
               </div>
               <div className="text-right hidden sm:block">
                 <p className="text-xs font-bold text-brand-brown/40 uppercase tracking-widest">Generated by Crescere AI</p>
                 <p className="text-sm font-bold text-brand-brown">{new Date().toLocaleDateString()}</p>
               </div>
            </div>
            <Dashboard data={result} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;