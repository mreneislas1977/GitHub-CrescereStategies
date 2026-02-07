'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useModal } from './ModalContext';

const Hero = () => {
  const { openModal } = useModal();
  return (
    <section className="relative min-h-screen flex items-center bg-crescere-green overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Execute Strategy. <br />
            <span className="text-crescere-gold">Achieve Unstoppable Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-crescere-cream/90 leading-relaxed">
            Elite executive research and leadership consulting for firms that refuse to settle for the status quo.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={openModal} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-crescere-green font-bold rounded-sm hover:bg-crescere-gold hover:text-white transition-all shadow-xl">
              Request A Briefing <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
