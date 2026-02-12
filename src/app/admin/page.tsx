"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { Lock, ShieldCheck, FileText, Activity, Users, AlertCircle, RefreshCw, X, Eye } from 'lucide-react';

export default function AdminDashboard() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // DATA STATE
  const [oceanResults, setOceanResults] = useState<any[]>([]);
  const [panasResults, setPanasResults] = useState<any[]>([]);
  const [financialResults, setFinancialResults] = useState<any[]>([]);
  
  // MODAL STATE
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const CORRECT_PIN = "CRESCERE2026";

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch OCEAN
      try {
        const oceanRef = collection(db, "ocean_results");
        const oceanQ = query(oceanRef, orderBy("completedAt", "desc"), limit(20));
        const oceanSnap = await getDocs(oceanQ);
        setOceanResults(oceanSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) { console.error(e); }

      // 2. Fetch PANAS
      try {
        const panasRef = collection(db, "panas_results");
        const panasQ = query(panasRef, orderBy("completedAt", "desc"), limit(20));
        const panasSnap = await getDocs(panasQ);
        setPanasResults(panasSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) { console.error(e); }

      // 3. Fetch Financial
      try {
        const finRef = collection(db, "financial_results");
        const finQ = query(finRef, orderBy("completedAt", "desc"), limit(20));
        const finSnap = await getDocs(finQ);
        setFinancialResults(finSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) { console.error(e); }

    } catch (err: any) {
      setError(err.message || "Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
      loadData();
    } else {
      alert("Invalid Security PIN");
      setPin('');
    }
  };

  // --- MODAL COMPONENT ---
  const DetailModal = () => {
    if (!selectedItem) return null;
    const isPanas = selectedItem.appType === 'PANAS-X';
    const isOcean = selectedItem.appType === 'OCEAN';
    const isFinance = selectedItem.appType === 'Financial Intel';

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
            <div>
              <h2 className="text-xl font-bold text-[#014421]">{selectedItem.appType} Report</h2>
              <p className="text-sm text-gray-500">{selectedItem.email}</p>
            </div>
            <button onClick={() => setSelectedItem(null)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
          </div>
          
          <div className="p-8">
            {/* PANAS FULL REPORT */}
            {isPanas && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-green-50 rounded-lg text-center">
                     <div className="text-xs uppercase font-bold text-green-800">Positive Affect</div>
                     <div className="text-3xl font-bold text-[#014421]">{selectedItem.scores["Positive Affect"]}</div>
                   </div>
                   <div className="p-4 bg-red-50 rounded-lg text-center">
                     <div className="text-xs uppercase font-bold text-red-800">Negative Affect</div>
                     <div className="text-3xl font-bold text-red-700">{selectedItem.scores["Negative Affect"]}</div>
                   </div>
                </div>
                <h3 className="font-bold text-gray-900 border-b pb-2">Detailed Affect Scales</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedItem.scores)
                    .filter(([k]) => k !== "Positive Affect" && k !== "Negative Affect")
                    .map(([key, val]: any) => (
                    <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm font-medium text-gray-700">{key}</span>
                      <span className="font-bold text-[#014421]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OCEAN FULL REPORT */}
            {isOcean && (
              <div className="space-y-4">
                {Object.entries(selectedItem.scores).map(([factor, score]: any) => (
                  <div key={factor} className="space-y-1">
                    <div className="flex justify-between text-sm font-bold text-gray-700">
                      <span>{factor}</span>
                      <span>{score} / 50</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#014421]" style={{ width: `${(score / 50) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FINANCIAL FULL REPORT */}
            {isFinance && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="font-bold text-[#014421] mb-2">Key Ratios</h3>
                   <div className="grid grid-cols-2 gap-4">
                     {Object.entries(selectedItem.calculatedRatios || {}).map(([key, val]: any) => (
                       <div key={key} className="flex justify-between border-b border-gray-200 pb-1">
                         <span className="text-xs text-gray-500 uppercase">{key}</span>
                         <span className="font-bold text-gray-800">{typeof val === 'number' ? val.toFixed(2) : val}</span>
                       </div>
                     ))}
                   </div>
                </div>
                <div>
                   <h3 className="font-bold text-[#014421] mb-2">Raw Input Data</h3>
                   <div className="text-xs font-mono bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                     {JSON.stringify(selectedItem.inputData, null, 2)}
                   </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <span className="text-xs text-gray-400">
                Completed: {selectedItem.completedAt?.seconds ? new Date(selectedItem.completedAt.seconds * 1000).toLocaleString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#014421] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="inline-flex p-4 bg-[#014421]/10 rounded-full mb-6">
            <Lock className="text-[#014421]" size={48} />
          </div>
          <h1 className="text-2xl font-bold text-[#014421] mb-2">Intelligence Vault</h1>
          <p className="text-gray-500 mb-8">Restricted Access. Authorized Personnel Only.</p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full p-4 text-center text-2xl tracking-widest border-2 border-gray-200 rounded-lg focus:border-[#014421] focus:outline-none mb-6"
              autoFocus
            />
            <button type="submit" className="w-full py-4 bg-[#014421] text-white font-bold rounded-lg hover:bg-[#014421]/90 transition-all shadow-lg flex items-center justify-center gap-2">
              <ShieldCheck size={20} /> Access Data
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DetailModal />
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div><h1 className="text-3xl font-bold text-[#014421]">Command Center</h1><p className="text-gray-500">Live feed of incoming intelligence.</p></div>
          <button onClick={loadData} className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 flex items-center gap-2 text-sm font-bold shadow-sm">
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} /> Refresh Data
          </button>
        </div>

        {error && (<div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-8 flex items-center gap-3"><AlertCircle size={24} /><div><p className="font-bold">System Error</p><p className="text-sm">{error}</p></div></div>)}
        
        {/* DATA COLUMNS */}
        {!loading && (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* OCEAN */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#014421]/5 border-b border-[#014421]/10 flex items-center gap-2"><Users size={20} className="text-[#014421]" /><h3 className="font-bold text-[#014421]">OCEAN Profiles</h3><span className="ml-auto bg-[#014421] text-white text-xs px-2 py-1 rounded-full">{oceanResults.length}</span></div>
              <div className="max-h-[600px] overflow-y-auto">
                {oceanResults.map((item) => (
                  <div key={item.id} onClick={() => setSelectedItem(item)} className="p-4 border-b border-gray-100 hover:bg-[#014421]/5 cursor-pointer transition-colors group">
                    <div className="flex justify-between items-start mb-2"><span className="font-bold text-gray-800 text-sm group-hover:text-[#014421]">{item.email}</span><Eye size={16} className="text-gray-300 group-hover:text-[#014421]" /></div>
                    <div className="text-xs text-gray-400">Click to view full 5-factor profile</div>
                  </div>
                ))}
              </div>
            </div>

            {/* PANAS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#014421]/5 border-b border-[#014421]/10 flex items-center gap-2"><Activity size={20} className="text-[#014421]" /><h3 className="font-bold text-[#014421]">PANAS Baselines</h3><span className="ml-auto bg-[#014421] text-white text-xs px-2 py-1 rounded-full">{panasResults.length}</span></div>
              <div className="max-h-[600px] overflow-y-auto">
                {panasResults.map((item) => (
                  <div key={item.id} onClick={() => setSelectedItem(item)} className="p-4 border-b border-gray-100 hover:bg-[#014421]/5 cursor-pointer transition-colors group">
                    <div className="flex justify-between items-start mb-2"><span className="font-bold text-gray-800 text-sm group-hover:text-[#014421]">{item.email}</span><Eye size={16} className="text-gray-300 group-hover:text-[#014421]" /></div>
                    <div className="flex gap-4 mt-2">
                       <div className="flex-1 bg-green-50 p-2 rounded"><div className="text-[10px] text-green-800 font-bold uppercase">Pos</div><div className="text-lg font-bold text-[#014421]">{item.scores?.["Positive Affect"]}</div></div>
                       <div className="flex-1 bg-red-50 p-2 rounded"><div className="text-[10px] text-red-800 font-bold uppercase">Neg</div><div className="text-lg font-bold text-red-700">{item.scores?.["Negative Affect"]}</div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FINANCIAL */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#014421]/5 border-b border-[#014421]/10 flex items-center gap-2"><FileText size={20} className="text-[#014421]" /><h3 className="font-bold text-[#014421]">Financial Intel</h3><span className="ml-auto bg-[#014421] text-white text-xs px-2 py-1 rounded-full">{financialResults.length}</span></div>
              <div className="max-h-[600px] overflow-y-auto">
                {financialResults.map((item) => (
                  <div key={item.id} onClick={() => setSelectedItem(item)} className="p-4 border-b border-gray-100 hover:bg-[#014421]/5 cursor-pointer transition-colors group">
                    <div className="flex justify-between items-start mb-2"><span className="font-bold text-gray-800 text-sm group-hover:text-[#014421] truncate max-w-[150px]">{item.email}</span><Eye size={16} className="text-gray-300 group-hover:text-[#014421]" /></div>
                    <div className="text-xs text-gray-500">Rev: ${(item.inputData?.totalRevenue || 0).toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
