'use client';

import React from 'react';
import { FaLandmark, FaCity, FaProjectDiagram } from 'react-icons/fa';

const Stakeholders: React.FC = () => {
  return (
    <section className="py-24 bg-crescere-cream text-crescere-brown">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-crescere-green">
            Who We Serve
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            We partner with leaders who are ready to navigate complexity and build for the future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CARD 1: Non-Profits & Foundations */}
          <div className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-crescere-green group hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-6 text-crescere-gold text-4xl group-hover:scale-110 transition-transform">
              <FaLandmark />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-crescere-green">
              Non-Profits & Foundations
            </h3>
            <p className="opacity-80 leading-relaxed">
              Mission-driven organizations seeking to align internal culture with external impact, optimize board governance, and secure sustainable funding models.
            </p>
          </div>

          {/* CARD 2: Enterprises & Startups */}
          <div className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-crescere-gold group hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-6 text-crescere-green text-4xl group-hover:scale-110 transition-transform">
              <FaCity />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-crescere-green">
              Enterprises & Startups
            </h3>
            <p className="opacity-80 leading-relaxed">
              Growing companies facing the friction of scale. We help you operationalize strategy, develop executive leadership, and maintain agility as you expand.
            </p>
          </div>

          {/* CARD 3: Complex Stakeholder Groups */}
          <div className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-crescere-green group hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-6 text-crescere-gold text-4xl group-hover:scale-110 transition-transform">
              <FaProjectDiagram />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-crescere-green">
              Complex Stakeholders
            </h3>
            <p className="opacity-80 leading-relaxed">
              Organizations navigating mergers, public-private partnerships, or board transitions where aligning diverse interests is critical to success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
