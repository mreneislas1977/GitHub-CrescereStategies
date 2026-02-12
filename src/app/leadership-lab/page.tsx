"use client";
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import { Activity, Brain, TrendingUp, ArrowRight, Lock } from 'lucide-react';

export default function LeadershipLab() {
  const tools = [
    {
      title: "THE THERMOSTAT: OCEAN Profile",
      subtitle: "Big Five Personality Index",
      description: "The gold standard in personality modeling. Analyze Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
      icon: <Brain size={32} className="text-[#014421]" />,
      link: "/ocean",
      tag: "Behavioral"
    },
    {
      title: "THE THERMOMETER: PANAS-X",
      subtitle: "Emotional Affect Assessment",
      description: "A clinical-grade instrument measuring positive and negative affect states to gauge leadership resilience and emotional bandwidth.",
      icon: <Activity size={32} className="text-[#014421]" />,
      link: "/panas",
      tag: "Psychometric"
    },
    {
      title: "Financial Intel",
      subtitle: "Non-Profit 990 Solvency & Ratio Analysis",
      description: "Upload IRS 990 forms or input raw data to generate an 8-point fiscal health scorecard and diversification risk assessment.",
      icon: <TrendingUp size={32} className="text-[#014421]" />,
      link: "/financial",
      tag: "Fiscal"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      
      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014421]/5 rounded-full text-[#014421] text-xs font-bold uppercase tracking-wider mb-4">
            <Lock size={12} /> Proprietary Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#014421] mb-6">
            Leadership Lab
          </h1>
          <p className="text-xl text-[#014421]/70 leading-relaxed">
            Access our suite of diagnostic engines. These tools are designed to quantify the qualitative aspects of executive performance and organizational health.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link 
              key={tool.title} 
              href={tool.link}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-[#014421]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-[#fdfbf5] rounded-xl group-hover:bg-[#014421]/5 transition-colors">
                  {tool.icon}
                </div>
                <span className="px-3 py-1 bg-[#014421]/5 text-[#014421] text-[10px] font-bold uppercase tracking-wider rounded-full">
                  {tool.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-[#014421] mb-2">{tool.title}</h3>
              <p className="text-sm font-bold text-[#C5A059] mb-4">{tool.subtitle}</p>
              <p className="text-[#014421]/60 text-sm leading-relaxed mb-8 flex-grow">
                {tool.description}
              </p>
              
              <div className="flex items-center text-[#014421] font-bold text-sm group-hover:gap-2 transition-all">
                Launch Tool <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
