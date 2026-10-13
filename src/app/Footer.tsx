import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#014421] text-[#fdfbf5] border-t border-[#C5A059]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Brand Info */}
        <div>
          <Link href="/" className="text-lg font-bold tracking-tighter text-[#fdfbf5] leading-none">
            CRESCERE <span className="text-[#C5A059]">STRATEGIES</span> <span className="italic font-light text-xs text-[#fdfbf5]/80">LLC</span>
          </Link>
          <p className="text-xs text-[#fdfbf5]/70 mt-2 max-w-sm">
            Executive psychometric baselining, risk management, and strategic leadership intelligence.
          </p>
        </div>

        {/* Public Links Only */}
        <div className="flex justify-center space-x-6 text-xs font-bold uppercase tracking-wider">
          <Link href="/leadership-lab" className="hover:text-[#C5A059] transition-colors">
            Intelligence
          </Link>
          <a 
            href="https://calendar.app.google/BmYeAJiPqk5dSnBv5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
          >
            Schedule
          </a>
          <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-right text-[11px] text-[#fdfbf5]/50">
          © {new Date().getFullYear()} Crescere Strategies LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
