'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import { FaInfoCircle, FaFingerprint, FaTachometerAlt, FaChessKnight, FaLock, FaFlask, FaTimes, FaEnvelope, FaArrowRight, FaGem } from 'react-icons/fa';

export default function Insights() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tools = [
    {
      title: "The OCEAN Assessment",
      subtitle: "The Thermostat",
      icon: <FaFingerprint />,
      desc: "A baseline behavioral analysis that sets your leadership temperature. Defines your stable traits and default settings.",
      type: "Behavioral",
      borderColor: "group-hover:border-crescere-green"
    },
    {
      title: "The PANAS-X",
      subtitle: "The Gauge",
      icon: <FaTachometerAlt />,
      desc: "A reactive, situational measure of positive and negative affect. Diagnostics for how you are showing up in the moment.",
      type: "Situational",
      borderColor: "group-hover:border-crescere-gold"
    },
    {
      title: "Decision Matrix",
      subtitle: "The Operator",
      icon: <FaChessKnight />,
      desc: "Operational heuristics and logic gates. A structured guide to moving from insight to executed decision.",
      type: "Operational",
      borderColor: "group-hover:border-gray-800"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-crescere-brown font-sans selection:bg-crescere-gold selection:text-white">
      <Header />

      {/* --- LUXURY HERO --- */}
      <section className="pt-40 pb-24 px-6 relative">
        <div className="container mx-auto max-w-5xl text-center">
          
          {/* Decorative Top Line */}
          <div className="w-px h-16 bg-crescere-gold mx-auto mb-8 opacity-60"></div>

          <div className="flex justify-center mb-6">
            <span className="border border-crescere-green/30 px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase text-crescere-green rounded-full">
              Executive Research Division
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-display font-medium text-crescere-green mb-6 leading-tight">
            The Leadership <span className="italic font-serif text-crescere-gold">Lab</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-crescere-brown/70 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experimental frameworks and behavioral instrumentation designed for the modern executive.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-crescere-green text-white font-medium tracking-wide hover:bg-crescere-brown transition-colors duration-500"
          >
            <span>Request Access</span>
            <FaArrowRight className="text-xs opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </section>

      {/* --- PREVIEW STRIP --- */}
      <div className="border-y border-crescere-green/10 bg-white py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-3 text-sm tracking-wide text-crescere-brown/60">
          <FaInfoCircle className="text-crescere-gold" />
          <span className="uppercase font-bold text-xs">Status:</span>
          <span>In Development — Spring 2026 Release</span>
        </div>
      </div>

      {/* --- INSTRUMENTATION SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-crescere-green/10 pb-6">
            <div>
              <h2 className="text-4xl font-display text-crescere-green mb-2">Instrumentation</h2>
              <p className="text-crescere-brown/60 font-serif italic text-lg">Calibrate your leadership style.</p>
            </div>
            <div className="hidden md:block text-xs font-bold tracking-widest uppercase text-crescere-brown/40">
              Proprietary Toolkit
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className={`group relative bg-white p-10 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-transparent ${tool.borderColor} border-t-2`}>
                
                {/* Coming Soon Stamp */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-2 py-1 text-gray-400">
                    <FaLock size={8} /> Coming Soon
                  </div>
                </div>

                <div className="mb-8 pt-4">
                  <div className="text-3xl text-crescere-gold mb-6 opacity-80 group-hover:scale-110 transition-transform duration-700">
                    {tool.icon}
                  </div>
                  
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                    {tool.type}
                  </div>
                  
                  <h3 className="text-2xl font-display font-medium text-crescere-green">
                    {tool.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 leading-relaxed mb-10 font-light border-l-2 border-gray-100 pl-4">
                  {tool.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-crescere-gold">
                    {tool.subtitle}
                  </span>
                  <FaLock className="text-gray-200 group-hover:text-crescere-green transition-colors" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- THE LUXURY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-[#1a2e1a]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-[#FDFBF7] p-12 md:p-16 w-full max-w-xl shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            {/* Elegant Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-crescere-brown/40 hover:text-crescere-gold transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="text-center">
              <div className="w-12 h-1 bg-crescere-gold mx-auto mb-8"></div>
              
              <h3 className="text-3xl font-display text-crescere-green mb-4">
                Invitation Only
              </h3>
              
              <p className="text-crescere-brown/70 mb-10 leading-relaxed font-light">
                The Leadership Lab provides exclusive instrumentation for executive growth. Join the waitlist to receive priority access upon launch.
              </p>

              <form className="space-y-6">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder=" " 
                    className="peer w-full border-b border-crescere-brown/20 bg-transparent py-3 text-crescere-green focus:border-crescere-gold focus:outline-none placeholder-transparent"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs font-bold text-crescere-brown/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-crescere-brown/30 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-crescere-gold">
                    Email Address
                  </label>
                </div>
                
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-crescere-green text-white font-medium tracking-widest py-4 hover:bg-crescere-brown transition-colors duration-500 uppercase text-xs"
                >
                  Request Invitation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
