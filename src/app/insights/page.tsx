'use client';
import React, { useState } from 'react';
import LeadMagnetModal from '@/components/LeadMagnetModal';

const tools = [
  { id: 'board-diag', title: "Board Dynamics Diagnostic", category: "Governance" },
  { id: 'stakeholder-map', title: "The Stakeholder Map", category: "Strategy" },
  // ... other tools
];

export default function InsightsPage() {
  const [selectedTool, setSelectedTool] = useState<{id: string, title: string} | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-crescere-cream">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-display font-bold text-crescere-green mb-12 text-center">Executive Insights</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white p-8 rounded-xl border border-crescere-brown/10">
              <h3 className="text-2xl font-display font-bold text-crescere-green mb-4">{tool.title}</h3>
              <button 
                onClick={() => setSelectedTool(tool)}
                className="bg-crescere-gold text-crescere-green px-6 py-2 rounded font-bold uppercase text-sm"
              >
                Access Tool
              </button>
            </div>
          ))}
        </div>

        {selectedTool && (
          <LeadMagnetModal 
            tool={selectedTool} 
            onClose={() => setSelectedTool(null)} 
          />
        )}
      </div>
    </main>
  );
}
