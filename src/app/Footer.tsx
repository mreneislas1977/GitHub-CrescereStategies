'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5c4033] text-[#fdfbf5] py-16 border-t border-[#C5A059]/30 font-sans">
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND (Updated Colors) */}
          <div className="md:col-span-5">
            <h3 className="font-serif font-bold text-xl tracking-wider mb-6">
              {/* CRESCERE (Green) | STRATEGIES (Gold) | LLC (Cream) */}
              <span className="text-[#014421]">CRESCERE</span>
              <span className="text-[#C5A059]"> STRATEGIES</span>
              <span className="text-[#fdfbf5]"> LLC</span>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed uppercase tracking-wide max-w-sm mb-6">
              Proprietary diagnostic engines for quantifying executive performance and organizational health.
            </p>
            <a 
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7413946210195202048" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
              <span className="text-xs uppercase tracking-widest font-bold">Follow on LinkedIn</span>
            </a>
          </div>

          {/* COLUMN 2: THE LAB */}
          <div className="md:col-span-4">
            <h4 className="text-[#C5A059] font-bold uppercase text-xs tracking-[0.2em] mb-6">
              The Lab
            </h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Research Overview</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">OCEAN Personality Profile</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">PANAS-X Affect Scales</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Executive Intelligence</a></li>
            </ul>
          </div>

          {/* COLUMN
