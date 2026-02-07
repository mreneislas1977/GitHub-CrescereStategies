'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useModal } from './ModalContext';

const Hero = () => {
  const { openModal } = useModal();
  return (
    <section className="relative min-h-screen flex items-center bg-crescere-green overflow-hidden pt-20 text-white">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">Execute Strategy.<br />Achieve Unstoppable Growth.</h1>
        <div className="flex flex-col sm:flex-row gap-5">
          <button onClick={openModal} className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-crescere-green font-bold rounded-sm hover:bg-crescere-gold hover:text-white transition-all">
            Request A Briefing <FaArrowRight />
          </button>
          <Link href="/insights" className="flex items-center justify-center px-8 py-4 border-2 border-white/30 font-bold rounded-sm hover:bg-white/10">Leadership Lab</Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
