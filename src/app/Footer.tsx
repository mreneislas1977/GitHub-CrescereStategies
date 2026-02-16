'use client';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

/**
 * Intelligence Footer - Sienna & Gold Edition
 * Palette: Sienna (#5c4033), Emerald (#014421), Gold (#C5A059), Parchment (#fdfbf5)
 */
const Footer = () => {
  return (
    <footer className="bg-[#5c4033] text-[#fdfbf5] py-16 border-t border-[#C5A059]/30 font-sans">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: RESEARCH DIVISION BRANDING */}
          <div className="md:col-span-5">
            <h3 className="font-serif font-bold text-xl tracking-wider mb-6">
              <span className="text-[#fdfbf5]">CRESCERE</span>
              <span className="text-[#C5A059]"> STRATEGIES</span>
              <span className="text-[#fdfbf5]"> LLC</span>
            </h3>
            <p className="text-[10px] opacity-70 leading-relaxed uppercase tracking-[0.2em] max-w-sm mb-8">
              Proprietary diagnostic engines for quantifying executive performance and organizational health. Registered Research Division Ref: CS-INT-2026.
            </p>
            <a 
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7413946210195202048" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-white transition-colors border border-[#C5A059]/40 px-4 py-2 rounded-sm"
            >
              <FaLinkedin size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Access Public Network</span>
            </a>
          </div>

          {/* COLUMN 2: INTELLIGENCE ASSETS */}
          <div className="md:col-span-4">
            <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.3em] mb-8">
              Intelligence Assets
            </h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest opacity-80">
              <li><a href="/leadership-lab" className="hover:text-[#C5A059] transition-colors">Research Briefs</a></li>
              <li><a href="/leadership-lab" className="hover:text-[#C5A059] transition-colors">OCEAN Behavioral Profile</a></li>
              <li><a href="/leadership-lab" className="hover:text-[#C5A059] transition-colors">PANAS-X Affect Audit</a></li>
            </ul>
          </div>

          {/* COLUMN 3: PROTOCOLS & LEGAL */}
          <div className="md:col-span-3">
            <h4 className="text-[#C5A059] font-bold uppercase text-[10px] tracking-[0.3em] mb-8">
              Protocols
            </h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest opacity-80">
              <li><a href="/privacy" className="hover:text-[#C5A059] transition-colors">Data Privacy</a></li>
              <li><a href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Access</a></li>
              <li><a href="/disclaimer" className="hover:text-[#C5A059] transition-colors">Legal Disclaimers</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: INTELLECTUAL PROPERTY NOTICE */}
        <div className="pt-8 border-t border-[#fdfbf5]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] opacity-40 uppercase tracking-[0.3em] text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Crescere Strategies LLC. All Rights Reserved.
          </p>
          <p className="italic">
            Non-Disclosure Protocols in Effect • Class I Intellectual Property
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
