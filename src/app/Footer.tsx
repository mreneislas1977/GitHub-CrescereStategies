import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
<footer style={{ backgroundColor: '#5c4033' }} className="text-[#fdfbf5] py-16 px-6 border-t border-[#C5A059]/30">        
        {/* Brand Identity */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter mb-4 italic">
            CRESCERE<span style={{ color: '#C5A059' }}>STRATEGIES</span>
          </h2>
          <p className="text-[#fdfbf5]/80 max-w-sm mb-6 leading-relaxed">
            Proprietary diagnostic engines for quantifying executive performance and propelling organizational health.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-[#fdfbf5]/40">
            © {new Date().getFullYear()} Crescere Strategies LLC. Driving Growth & Impact.
          </p>
        </div>

        {/* Intelligence Engines */}
        <div>
          <h3 style={{ color: '#C5A059' }} className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">
            Intelligence
          </h3>
          <ul className="space-y-3 text-sm font-light">
            <li><Link href="/leadership-lab" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059]">Leadership Lab</Link></li>
            <li><Link href="/ocean" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059]">OCEAN Profile</Link></li>
            <li><Link href="/panas" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059]">PANAS-X Affect</Link></li>
            <li><Link href="/financial" className="hover:text-[#C5A059] transition-colors border-b border-transparent hover:border-[#C5A059]">Financial Intel</Link></li>
          </ul>
        </div>

        {/* Foundation */}
        <div>
          <h3 style={{ color: '#C5A059' }} className="font-bold mb-6 uppercase tracking-[0.2em] text-xs">
            Foundation
          </h3>
          <ul className="space-y-3 text-sm font-light">
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
