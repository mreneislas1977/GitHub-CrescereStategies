'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-crescere-green overflow-hidden pt-20">
      {/* Background decoration (Subtle) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          
          {/* LOGO CARD - Smaller & Tighter */}
          <div className="bg-white p-6 w-60 mb-10 shadow-2xl flex flex-col items-center rounded-sm">
            <div className="relative w-36 h-36">
              <Image 
                src="/logo.png" 
                alt="Crescere Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logo Text inside the box */}
            <p className="text-crescere-green font-display font-bold text-lg mt-3 text-center leading-tight">
              Crescere Strategies LLC
            </p>
          </div>

          {/* INTRO TEXT */}
          <p className="text-white/80 text-lg mb-4 font-medium tracking-wide">
            Maximize sustainable results for enterprises and non-profit organizations.
          </p>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Execute Strategy.<br />
            Develop Leaders.<br />
            Achieve Unstoppable Growth.
          </h1>
          
          {/* BUTTONS - Shrunk to standard size */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/insights" 
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-crescere-green font-bold rounded-sm hover:bg-crescere-gold hover:text-white transition shadow-lg"
            >
              Access Insights
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#process" 
              className="flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-crescere-green transition"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
