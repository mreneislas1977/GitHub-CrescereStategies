'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import { FaInfoCircle, FaFingerprint, FaTachometerAlt, FaChessKnight, FaLock, FaFlask, FaTimes, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Insights() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <main className="min-h-screen bg-crescere-cream font-sans">
      <Header />

      {/* PAGE HERO */}
      <section className="bg-crescere-green pt-32 pb-24 text-white text-center px-6 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 text-crescere-gold text-5xl">
            <FaFlask />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            The Leadership Lab
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 mb-8">
            Experimental frameworks and instrumentation for the modern executive.
          </p>
          
          {/* TRIGGER BUTTON FOR MODAL */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-crescere-gold text-crescere-green font-bold px-8 py-3 rounded-sm hover:bg-white transition-colors shadow-lg flex items-center gap-2"
          >
            <FaEnvelope /> Join the Lab
          </button>
        </div>
      </section>

      {/* CONSTRUCTION BANNER */}
      <div className="bg-crescere-gold text-crescere-green font-bold text-center py-3 px-4 shadow-md sticky top-[72px] z-40">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
          <FaInfoCircle />
          <span>PREVIEW MODE: The Lab is currently under development.</span>
        </div>
      </div>

      {/* SECTION 1: INSTRUMENTATION (The Tools) */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-crescere-green">Instrumentation</h2>
          <p className="opacity-70 mt-2 text-lg">Calibrate your leadership style with our proprietary toolkit.</p>
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
              
              <p className="text-gray-600 leading-relaxed text-sm mb-8">
                {tool.desc}
              </p>

              {/* DISABLED BUTTON */}
              <button disabled className="w-full py-3 bg-gray-50 text-gray-400 font-bold text-sm rounded-sm border border-gray-200 cursor-not-allowed flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                <FaLock />
                Tool In Development
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white p-8 md:p-10 rounded-sm shadow-2xl max-w-lg w-full text-center border-t-8 border-crescere-green animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="text-crescere-green text-4xl mb-4 flex justify-center">
              <FaEnvelope />
            </div>

            <h3 className="text-3xl font-display font-bold text-crescere-green mb-2">
              Join the Leadership Lab
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get notified when we launch our proprietary tools and release new strategic frameworks.
            </p>

            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-crescere-green focus:ring-1 focus:ring-crescere-green"
              />
              <button 
                type="button"
                className="w-full bg-crescere-green text-white font-bold py-3 rounded-sm hover:bg-crescere-gold transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsModalOpen(false)}
              >
                Notify Me <FaArrowRight />
              </button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4">
              We respect your inbox. No spam, just strategy.
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
