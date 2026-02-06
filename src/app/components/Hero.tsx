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
          
          {/* LOGO CARD - The white box from your screenshot */}
          <div className="bg-white p-8 w-72 mb-12 shadow-2xl flex flex-col items-center">
            <div className="relative w-48 h-48">
              <Image 
                src="/logo.png" 
                alt="Crescere Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logo Text inside the box */}
            <p className="text-crescere-green font-display font-bold text-xl mt-4 text-center leading-tight">
              Crescere Strategies LLC
            </p>
          </div>

          {/* INTRO TEXT */}
          <p className="text-white/80 text-lg md:text-xl mb-6 font-medium tracking-wide">
            Maximize sustainable results for enterprises and non-profit organizations.
          </p>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-tight">
            Execute Strategy.<br />
            Develop Leaders.<br />
            Achieve Unstoppable Growth.
          </h1>
          
          {/* BUTTONS - Adapted for Dark Background */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/insights" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-crescere-green text-lg font-bold rounded-sm hover:bg-crescere-gold hover:text-white transition shadow-lg"
            >
              Access Insights
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#process" 
              className="flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-sm hover:bg-white hover:text-crescere-green transition"
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
