"use client";
export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { db } from '../../firebaseConfig';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { Shield, Mail, FileSearch } from 'lucide-react';

interface ExecutiveBaseline {
  id: string;
  email: string;
  wantsCustomAnalysis?: boolean;
  completedAt?: { toDate?: () => Date };
  elapsedMinutes?: number;
  normalcyConfidenceScore?: number;
  isBaselineVolatile?: boolean;
  oceanScores?: Record<string, number>;
  panasScores?: Record<string, number>;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [baselines, setBaselines] = useState<ExecutiveBaseline[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<ExecutiveBaseline | null>(null);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Whittier';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError(false);
      fetchBaselines();
    } else {
      setAuthError(true);
    }
  };

  const fetchBaselines = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "executive_baselines"),
        orderBy("completedAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const records: ExecutiveBaseline[] = [];
      querySnapshot.forEach((doc) => {
        records.push({ id: doc.id, ...doc.data() } as ExecutiveBaseline);
      });
      setBaselines(records);
    } catch (error) {
      console.error("Error fetching executive baselines:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#fdfbf5]">
        <Header />
        <main className="pt-32 pb-20 px-6 max-w-md mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#014421]/20">
            <div className="inline-flex p-4 bg-[#014421]/5 rounded-full mb-4">
              <Shield className="text-[#014421]" size={36} />
            </div>
            <h1 className="text-2xl font-bold text-[#014421] mb-2">Executive Vault Admin</h1>
            <p className="text-xs text-[#014421]/60 mb-6">Enter password to review client baseline intakes.</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Passcode"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3.5 border border-[#014421]/20 rounded-xl text-center font-mono text-lg focus:outline-none focus:border-[#014421]"
              />
              {authError && <p className="text-xs font-bold text-red-600">Invalid admin passcode. Please try again.</p>}
              <button type="submit" className="w-full py-3.5 bg-[#014421] text-white font-bold rounded-xl hover:bg-[#014421]/90 shadow-md">
                Unlock Vault Dashboard
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#014421]/15 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-[#014421]">Executive Baselines Admin</h1>
            <p className="text-sm text-[#014421]/60 mt-1">Reviewing combined OCEAN + PANAS-X records from <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">executive_baselines</code>.</p>
          </div>
          <button onClick={fetchBaselines} className="px-4 py-2 bg-[#014421]/10 text-[#014421] text-xs font-bold rounded-lg hover:bg-[#014421]/20">
            Refresh Records
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#014421] font-bold">Loading Executive Vault Records...</div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {baselines.length === 0 ? (
                <div className="bg-white p-8 rounded-xl border border-[#014421]/10 text-center text-[#014421]/60">
                  No executive baseline records found in vault.
                </div>
              ) : (
                baselines.map((rec) => (
                  <div
                    key={rec.id}
                    onClick={() => setSelectedRecord(rec)}
                    className={`bg-white p-5 rounded-xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${selectedRecord?.id === rec.id ? 'border-[#014421] ring-2 ring-[#014421]/20' : 'border-[#014421]/10'}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-[#014421]/60" />
                          <span className="font-bold text-[#014421] text-base">{rec.email}</span>
                        </div>
                        <span className="text-[11px] text-[#014421]/50 font-mono block mt-1">ID: {rec.id}</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${rec.isBaselineVolatile ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-green-100 text-[#014421]'}`}>
                          {rec.isBaselineVolatile ? 'Volatile Baseline (≤2)' : 'Normal Baseline'}
                        </span>
                        {rec.wantsCustomAnalysis && (
                          <span className="px-2 py-0.5 bg-[#014421]/10 text-[#014421] text-[10px] font-bold rounded flex items-center gap-1">
                            <FileSearch size={12} /> Custom Analysis Requested
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-100 text-xs">
                      <div>
                        <span className="text-[#014421]/50 block uppercase text-[9px] font-bold">Normalcy Score</span>
                        <span className="font-bold text-[#014421]">{rec.normalcyConfidenceScore ?? 'N/A'} / 5</span>
                      </div>
                      <div>
                        <span className="text-[#014421]/50 block uppercase text-[9px] font-bold">Duration</span>
                        <span className="font-bold text-[#014421]">{rec.elapsedMinutes ?? 'N/A'} min</span>
                      </div>
                      <div>
                        <span className="text-[#014421]/50 block uppercase text-[9px] font-bold">Date Saved</span>
                        <span className="font-bold text-[#014421]">
                          {typeof rec.completedAt?.toDate === 'function' ? rec.completedAt.toDate().toLocaleDateString() : 'Recent'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="lg:col-span-1">
              {selectedRecord ? (
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#014421]/20 sticky top-32">
                  <h3 className="text-xl font-bold text-[#014421] mb-1">Baseline Profile Detail</h3>
                  <p className="text-xs text-[#014421]/60 mb-6">{selectedRecord.email}</p>
                  <div className="space-y-6">
                    <div className="p-3 bg-[#fdfbf5] rounded-lg border border-[#014421]/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#014421]/60 block mb-1">Outreach Status</span>
                      <span className="text-xs font-bold text-[#014421]">
                        {selectedRecord.wantsCustomAnalysis ? "Yes - Requested Confidential Customized Analysis" : "No - Private Vault Storage Only"}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#014421] uppercase tracking-wider border-b pb-1 mb-3">OCEAN Trait Baseline</h4>
                      <div className="space-y-2 text-xs">
                        {selectedRecord.oceanScores ? (
                          Object.entries(selectedRecord.oceanScores).map(([factor, score]) => (
                            <div key={factor} className="flex justify-between items-center">
                              <span className="text-[#014421]/70">{factor}:</span>
                              <span className="font-mono font-bold text-[#014421]">{score}</span>
                            </div>
                          ))
                        ) : (
                          <span className="text-gray-400">No OCEAN score data</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#014421] uppercase tracking-wider border-b pb-1 mb-3">PANAS-X Affect Baseline</h4>
                      <div className="space-y-2 text-xs max-h-48 overflow-y-auto pr-1">
                        {selectedRecord.panasScores ? (
                          Object.entries(selectedRecord.panasScores).map(([scale, score]) => (
                            <div key={scale} className="flex justify-between items-center">
                              <span className="text-[#014421]/70">{scale}:</span>
                              <span className="font-mono font-bold text-[#014421]">{score}</span>
                            </div>
                          ))
                        ) : (
                          <span className="text-gray-400">No PANAS-X score data</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-dashed border-[#014421]/20 text-center text-xs text-[#014421]/50">
                  Select a record from the list to inspect full OCEAN and PANAS-X profile metrics.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
