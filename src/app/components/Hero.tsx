'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-crescere-cream overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-crescere-gold/5 skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* LARGE HERO LOGO */}
            <div className="relative w-64 h-64 mx-auto md:mx-0 mb-8">
              <Image 
                src="/logo.png" 
                alt="Crescere Emblem" 
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-crescere-green mb-6 leading-tight">
              Growth with <br/>
              <span className="text-crescere-gold">Purpose.</span>
            </h1>
            <p className="text-xl text-crescere-brown/80 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Empowering non-profits and startups to navigate complexity, align stakeholders, and scale their impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/insights" 
                className="px-8 py-4 bg-crescere-green text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-lg text-center"
              >
                Access Insights
              </Link>
              <Link 
                href="#process" 
                className="px-8 py-4 border-2 border-crescere-green text-crescere-green font-bold rounded-lg hover:bg-crescere-green hover:text-white transition text-center"
              >
                Our Process
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE/GRAPHIC */}
          <div className="md:w-1/2 relative h-[500px] w-full hidden md:block">
            {/* Abstract visual representation of growth/strategy */}
            <div className="absolute inset-0 bg-gradient-to-br from-crescere-green to-crescere-green/80 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
               <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
               <div className="absolute p-12 text-white/10 text-9xl font-display font-bold select-none">
                 Scale
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
