'use client';

import React from 'react';
import Header from '../components/Header';
import { FaInfoCircle, FaFingerprint, FaTachometerAlt, FaChessKnight, FaLock } from 'react-icons/fa';

export default function Insights() {
  const tools = [
    {
      title: "OCEAN Assessment",
      subtitle: "The Thermostat",
      icon: <FaFingerprint />,
      desc: "A baseline behavioral analysis that sets your leadership temperature. Defines your stable traits and default settings.",
      type: "Behavioral",
      color: "border-crescere-green text-crescere-green"
    },
    {
      title: "PANAS-X",
      subtitle: "The Temperature Gauge",
      icon: <FaTachometerAlt />,
      desc: "A reactive, situational measure of positive and negative affect. Diagnostics for how you are showing up in the moment.",
      type: "Situational",
      color: "border-crescere-gold text-crescere-gold"
    },
    {
      title: "Decision Rules",
      subtitle: "The Operator",
      icon: <FaChessKnight />,
      desc: "Operational heuristics and logic gates. A structured guide to moving from insight to executed decision.",
      type: "Operational",
      color: "border-gray-600 text-gray-600"
    }
  ];

  const previewArticles = [
    {
      category: "Strategy",
      title: "The Hidden Cost of Misalignment",
      summary: "How internal friction bleeds resources and stalls growth in mission-driven organizations.",
      date: "Spring 2026"
    },
    {
      category: "Leadership",
      title: "From Founder to CEO",
      summary: "Navigating the identity shift required to scale a startup beyond its initial success.",
      date: "Spring 2026"
    },
    {
      category: "Case Study",
      title: "Turning Conflict into Capital",
      summary: "How a mid-sized non-profit used board tension to fuel a strategic pivot.",
      date: "Spring 2026"
    }
  ];

  return (
    <main className="min-h-screen bg-crescere-cream">
      <Header />

      {/* PAGE HERO */}
      <section className="bg-crescere-green pt-32 pb-20 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <h1 className="text-5xl font-display font-bold mb-6 relative z-10">
          Executive Insights
        </h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80 relative z-10">
          Tools, instrumentation, and frameworks for the modern leader.
        </p>
      </section>

      {/* CONSTRUCTION BANNER */}
      <div className="bg-crescere-gold text-crescere-green font-bold text-center py-3 px-4 shadow-md sticky top-[72px] z-40">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
          <FaInfoCircle />
          <span>PREVIEW MODE: These tools are currently in development.</span>
        </div>
      </div>

      {/* SECTION 1: INSTRUMENTATION (The Tools) */}
      <section className="py-20 container mx-auto px-6 border-b border-crescere-green/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-crescere-green">Leadership Instrumentation</h2>
          <p className="opacity-70 mt-2">Calibrate your leadership style with our proprietary toolkit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className={`relative bg-white p-8 rounded-sm shadow-sm border-t-4 ${tool.color} hover:shadow-xl transition-shadow duration-300 group`}>
              
              {/* "COMING SOON" BADGE */}
              <div className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1">
                <FaLock className="text-[10px]" /> Coming Soon
              </div>

              <div className="flex justify-between items-start mb-6 mt-2">
                <div className={`text-4xl ${tool.color} opacity-80 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50 border border-gray-200 px-2 py-1 rounded-sm">
                  {tool.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{tool.title}</h3>
              <p className={`text-sm font-bold uppercase tracking-wide mb-4 opacity-70 ${tool.color.split(' ')[1]}`}>
                {tool.subtitle}
              </p>
              
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {tool.desc}
              </p>

              {/* DISABLED BUTTON */}
              <button disabled className="w-full py-3 bg-gray-50 text-gray-400 font-bold text-sm rounded-sm border border-gray-200 cursor-not-allowed flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                <FaLock />
                In Development
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: LIBRARY (The Articles) */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-crescere-green">Research Library</h2>
          <p className="opacity-70 mt-2">White papers and strategic case studies.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewArticles.map((article, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm flex flex-col h-full opacity-90 hover:opacity-100 transition-opacity">
              <div className="mb-4">
                <span className="text-xs font-bold tracking-wider text-crescere-gold uppercase bg-crescere-green/5 px-2 py-1 rounded-sm">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-crescere-green mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="text-crescere-brown/70 text-sm mb-8 leading-relaxed flex-grow">
                {article.summary}
              </p>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-400 font-medium">{article.date}</span>
                <span className="text-sm text-gray-400 font-bold cursor-not-allowed">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
