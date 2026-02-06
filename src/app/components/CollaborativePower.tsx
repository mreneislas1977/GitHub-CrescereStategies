'use client';

import React from 'react';

const CollaborativePower: React.FC = () => {
  return (
    <section className="py-24 bg-white text-crescere-brown">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-crescere-green">
            From Conflict to <br />
            {/* Gold Text + Underline */}
            <span className="text-crescere-gold border-b-4 border-crescere-gold pb-1 inline-block mt-2">
              Collaborative Power.
            </span>
          </h2>

          {/* CONTENT */}
          <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-8">
            Friction in an organization isn't always bad—it’s often energy waiting to be aligned. We help you transform internal conflict into a unified force that drives execution.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-6 bg-crescere-cream rounded-sm border-l-4 border-crescere-green">
              <h3 className="font-bold text-xl mb-2 text-crescere-green">Diagnose</h3>
              <p className="text-sm opacity-90">Identify the root causes of friction and misalignment within your teams.</p>
            </div>
            <div className="p-6 bg-crescere-cream rounded-sm border-l-4 border-crescere-gold">
              <h3 className="font-bold text-xl mb-2 text-crescere-green">Align</h3>
              <p className="text-sm opacity-90">Unify stakeholders around a shared vision and clear strategic objectives.</p>
            </div>
            <div className="p-6 bg-crescere-cream rounded-sm border-l-4 border-crescere-green">
              <h3 className="font-bold text-xl mb-2 text-crescere-green">Execute</h3>
              <p className="text-sm opacity-90">Build the frameworks and culture needed for sustainable, long-term growth.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollaborativePower;
