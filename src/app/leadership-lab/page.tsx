"use client";
import React from 'react';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';
import { Calculator, BarChart3, Thermometer, ArrowRight, Lock } from 'lucide-react';

const LabCard = ({ title, description, icon: Icon, href, isComingSoon = false }: any) => {
  const CardContent = (
    <div className={`group relative bg-white border border-[#014421]/10 p-8 transition-all duration-300 ${isComingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#C5A059] hover:shadow-2xl'}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`p-3 ${isComingSoon ? 'bg-gray-100 text-gray-400' : 'bg-[#fdfbf5] text-[#C5A059]'} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
        {isComingSoon ? (
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1">
            <Lock size={10} /> Coming Soon
          </span>
        ) : (
          <ArrowRight className="text-[#014421]/20 group-hover:text-[#C5A059] transition-colors" size={20} />
        )}
      </div>
      <h3 className="text-xl font-serif text-[#014421] mb-3">{title}</h3>
      <p className="text-sm text-[#014421]/60 leading-relaxed mb-6">{description}</p>
      {!isComingSoon && <div className="h-0.5 w-0 group-hover:w-full bg-[#C5A059] transition-all duration-500" />}
    </div>
  );

  return isComingSoon ? CardContent : <Link href={href}>{CardContent}</Link>;
};

export default function LeadershipLab() {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <Header />
      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-4 border-[#C5A059] pl-8">
            <h1 className="text-5xl font-serif text-[#014421] mb-4">Leadership Lab</h1>
            <p className="text-lg text-[#014421]/60 max-w-2xl uppercase tracking-wide text-sm font-medium">
              Proprietary diagnostic engines for quantifying executive performance and organizational health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LabCard 
              title="OCEAN Behavioral Profile" 
              description="Analyze the five broad domains of personality to understand leadership tendencies and team dynamics."
              icon={BarChart3}
              href="/ocean"
            />
            <LabCard 
              title="PANAS-X Affect Audit" 
              description="Measure positive and negative affect to gauge emotional climate and resilience within leadership."
              icon={Thermometer}
              href="/panas"
            />
            <LabCard 
              title="Financial Intelligence" 
              description="AI-driven fiscal health audit for 501(c)(3) organizations. Automated IRS 990 parsing and benchmarking."
              icon={Calculator}
              href="/financial"
              isComingSoon={true}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
