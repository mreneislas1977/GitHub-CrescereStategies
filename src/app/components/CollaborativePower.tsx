'use client';

import React from 'react';

const CollaborativePower: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white text-crescere-brown">
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

          {/* INTRO TEXT */}
          <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-12">
            Friction in an organization isn't always bad—it’s often energy waiting to be aligned. We help you transform internal conflict into a unified force that drives execution.
          </p>

          {/* CARDS - Text Only (No Buttons) */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Diagnose */}
            <div className="p-8 bg-crescere-cream rounded-sm border-l-4 border-crescere-green shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-3 text-crescere-green">Diagnose</h3>
              <p className="text-base opacity-80 leading-relaxed">
                Identify the root causes of friction and misalignment within your teams to uncover hidden barriers to growth.
              </p>
            </div>
            
            {/* Card 2: Align */}
            <div className="p-8 bg-crescere-cream rounded-sm border-l-4 border-crescere-gold shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-3 text-crescere-green">Align</h3>
              <p className="text-base opacity-80 leading-relaxed">
                Unify stakeholders around a shared vision and clear strategic objectives, ensuring everyone pulls in the same direction.
              </p>
            </div>
            
            {/* Card 3: Execute */}
            <div className="p-8 bg-crescere-cream rounded-sm border-l-4 border-crescere-green shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl mb-3 text-crescere-green">Execute</h3>
              <p className="text-base opacity-80 leading-relaxed">
                Build the frameworks and culture needed for sustainable, long-term growth and operational excellence.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CollaborativePower;
