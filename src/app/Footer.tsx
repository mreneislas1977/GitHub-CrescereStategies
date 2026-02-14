'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    // Changed bg-[#014421] to bg-[#5c4033] (Crescere Brown)
    <footer className="bg-[#5c4033] text-[#fdfbf5] py-20 px-6 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-[#C5A059] font-serif text-2xl">CRESCERE STRATEGIES LLC</h3>
          <p className="text-xs uppercase tracking-[0.2em] leading-relaxed opacity-80">
            Proprietary diagnostic engines for quantifying executive performance and organizational health.
          </p>
          <div className="pt-4">
            <p className="text-[10px] font-mono opacity-50">© 2026 CRESCERE STRATEGIES | PROFESSIONAL CONFIDENTIALITY GUARANTEED</p>
          </div>
        </div>

        <div>
          <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-6">LEADERSHIP LAB</h4>
          <ul className="space-y-4 text-xs font-medium opacity-80">
            <li><Link href="/leadership-lab" className="hover:text-[#C5A059] transition-colors">Lab Overview</Link></li>
            <li><Link href="/ocean" className="hover:text-[#C5A059] transition-colors">OCEAN Profile</Link></li>
            <li><Link href="/panas" className="hover:text-[#C5A059] transition-colors">PANAS-X Affect</Link></li>
            <li><Link href="/financial" className="hover:text-[#C5A059] transition-colors">Financial Intel</Link></li>
            <li><Link href="/admin" className="text-[#C5A059]/90 hover:text-[#C5A059] transition-colors">Admin Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-6">FOUNDATION</h4>
          <ul className="space-y-4 text-xs font-medium opacity-80">
            <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-[#C5A059] transition-colors">Disclaimers</Link></li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          {/* Adjusted quote box background to blend with brown */}
          <div className="bg-[#fdfbf5]/10 p-6 border border-[#C5A059]/20">
            <p className="text-[10px] italic opacity-70 leading-relaxed">
              "Strategic alignment is the thermostat of organizational health."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
