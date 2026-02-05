'use client';
import React, { useState } from 'react';
import LeadMagnetModal from '../components/LeadMagnetModal';
import { FaCheckCircle, FaLock } from 'react-icons/fa';

const tools = [
  { id: 'board-diag', title: "Board Dynamics Diagnostic", category: "Governance" },
  { id: 'fund-audit', title: "Funder Alignment Audit", category: "Strategy" },
  { id: 'staff-pulse', title: "Staff Culture Pulse", category: "Operations" },
];

export default function InsightsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-crescere-green text-crescere-cream pt-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Executive Insights
        </h1>
        <p className="text-xl opacity-80 mb-12 max-w-2xl">
          Unlock exclusive tools designed to align your stakeholders and accelerate organizational growth.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="p-8 border border-crescere-gold/20 rounded-xl hover:bg-white/5 transition group">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-crescere-gold/60">
                  {tool.category}
                </span>
                <FaLock className="text-crescere-gold group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{tool.title}</h3>
              <button 
                onClick={() => setSelectedTool(tool.id)}
                className="text-sm font-bold border-b border-crescere-gold pb-1 hover:text-white hover:border-white transition"
              >
                Unlock Access
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-crescere-cream text-crescere-green rounded-xl flex items-start gap-4">
          <FaCheckCircle className="text-3xl mt-1 text-crescere-gold" />
          <div>
            <h3 className="font-bold text-xl mb-2">Why is this content locked?</h3>
            <p className="opacity-80">
              We curate these resources specifically for leaders committed to transformation. 
              Access is complimentary—we simply ask to know who you are.
            </p>
          </div>
        </div>
      </div>

      <LeadMagnetModal 
        isOpen={!!selectedTool} 
        onClose={() => setSelectedTool(null)} 
        resourceId={selectedTool || ''} 
      />
    </main>
  );
}
