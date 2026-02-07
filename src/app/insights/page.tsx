'use client';
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { 
  FaInfoCircle, FaFingerprint, FaTachometerAlt, 
  FaChessKnight, FaLock, FaFlask, FaTimes, 
  FaEnvelope, FaArrowRight, FaGem 
} from 'react-icons/fa';

export default function Insights() {
  const cards = [
    {
      icon: <FaFingerprint />,
      title: "Executive Profiling",
      category: "Research",
      desc: "Deep-dive behavioral and psychological assessments for high-stakes leadership roles."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Performance Velocity",
      category: "Consulting",
      desc: "Methodologies for accelerating organizational decision-making and strategic output."
    },
    {
      icon: <FaChessKnight />,
      title: "Competitive Intelligence",
      category: "Strategy",
      desc: "Market-leading research on executive trends and competitor leadership structures."
    },
    {
      icon: <FaFlask />,
      title: "The Innovation Lab",
      category: "Development",
      desc: "Experimental frameworks for future-proofing your firm's internal leadership pipeline."
    },
    {
      icon: <FaLock />,
      title: "Succession Security",
      category: "Advisory",
      desc: "Mitigating risk in the transition of critical C-suite and Board positions."
    },
    {
      icon: <FaGem />,
      title: "Elite Talent Bench",
      category: "Intelligence",
      desc: "Maintaining a proprietary index of non-active, high-value executive targets."
    }
  ];

  return (
    <main className="min-h-screen bg-crescere-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-crescere-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-crescere-gold uppercase tracking-widest font-bold text-sm">Crescere Intelligence</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">Leadership Lab</h1>
            <p className="text-xl text-crescere-cream/80 leading-relaxed">
              Proprietary research and psychological insights designed for Boards, CEOs, and Private Equity partners.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 rounded-sm shadow-sm hover:shadow-2xl transition-all group cursor-default">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-3xl text-crescere-gold group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {card.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-crescere-green mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {card.desc}
                </p>
                <div className="flex items-center text-crescere-green font-bold text-sm group-hover:text-crescere-gold transition-colors">
                  Read Briefing <FaArrowRight className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
