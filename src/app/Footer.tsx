import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#5c4033' }} className="text-[#fdfbf5] py-16 px-6 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Brand Identity */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter mb-4 text-[#fdfbf5]">
            CRESCERE <span style={{ color: '#C5A059' }}>STRATEGIES</span> <span className="italic font-light text-base ml-1 opacity-80">LLC</span>
          </h2>
          <p className="text-[#fdfbf5]/80 max-w-sm mb-6 leading-relaxed">
            Proprietary diagnostic engines for quantifying executive performance and organizational health.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-[#fdfbf5]/40">
            © {new Date().getFullYear()} Crescere Strategies LLC. Professional Confidentiality Guaranteed.
          </p>
        </div>

        {/* Leadership Lab Section - Bold Gold Header */}
        <div>
          <h3 style={{ color: '#C5A059' }} className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">
            Leadership Lab
          </h3>
          <ul className="space-y-3 text-sm font-light text-[#fdfbf5]/90">
            <li><Link href="/leadership-lab" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059]">Lab Overview</Link></li>
            <li><Link href="/ocean" className="hover:text-[#C5A059] transition-colors">OCEAN Profile</Link></li>
            <li><Link href="/panas" className="hover:text-[#C5A059] transition-colors">PANAS-X Affect</Link></li>
            <li><Link href="/financial" className="hover:text-[#C5A059] transition-colors">Financial Intel</Link></li>
          </ul>
        </div>

        {/* Foundation Section - Bold Gold Header */}
        <div>
          <h3 style={{ color: '#C5A059' }} className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">
            Foundation
          </h3>
          <ul className="space-y-3 text-sm font-light text-[#fdfbf5]/90">
            <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-[#C5A059] transition-colors">Disclaimers</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
